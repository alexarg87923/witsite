import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Custom format to include function name and IP address
const customFormat = winston.format.printf(({ timestamp, level, message, functionName, ip, ...meta }) => {
    const funcName = functionName ? `[${functionName}]` : '';
    const ipAddr = ip ? `[${ip}]` : '';
    const metaString = Object.keys(meta).length ? JSON.stringify(meta) : '';
    // Format: timestamp [LEVEL] [IP] [function] message metadata
    return `${timestamp} [${level.toUpperCase()}] ${ipAddr} ${funcName} ${message} ${metaString}`.trim();
});

// Create logs directory path
const logsDir = path.join(__dirname, '../logs');

// Ensure logs directory exists
try {
    mkdirSync(logsDir, { recursive: true });
} catch (err) {
    // Directory might already exist, ignore error
}

// Daily rotate file transport for all logs
const dailyRotateFileTransport = new DailyRotateFile({
    filename: path.join(logsDir, 'app-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        customFormat
    )
});

// Daily rotate file transport for error logs
const dailyRotateErrorTransport = new DailyRotateFile({
    filename: path.join(logsDir, 'error-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d',
    level: 'error',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        customFormat
    )
});

// Create logger instance
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.errors({ stack: true }),
        customFormat
    ),
    transports: [
        dailyRotateFileTransport,
        dailyRotateErrorTransport,
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                customFormat
            )
        })
    ]
});

// Helper function to extract real client IP from request
export const getClientIp = (req) => {
    // Check for IP in various headers (for proxies/load balancers)
    const forwarded = req.headers['x-forwarded-for'];
    if (forwarded) {
        // x-forwarded-for can contain multiple IPs, take the first one
        return forwarded.split(',')[0].trim();
    }
    
    const realIp = req.headers['x-real-ip'];
    if (realIp) {
        return realIp;
    }
    
    // Fallback to connection remote address
    return req.ip || req.connection?.remoteAddress || req.socket?.remoteAddress || 'unknown';
};

// Helper function to create log entries with function name
const createLogEntry = (functionName, ip = null) => {
    return {
        error: (message, meta = {}) => logger.error(message, { functionName, ip, ...meta }),
        warn: (message, meta = {}) => logger.warn(message, { functionName, ip, ...meta }),
        info: (message, meta = {}) => logger.info(message, { functionName, ip, ...meta }),
        debug: (message, meta = {}) => logger.debug(message, { functionName, ip, ...meta }),
        verbose: (message, meta = {}) => logger.verbose(message, { functionName, ip, ...meta }),
        silly: (message, meta = {}) => logger.silly(message, { functionName, ip, ...meta })
    };
};

export default createLogEntry;

