import express, { urlencoded, json } from 'express';
import path, { join } from 'path';
import { fileURLToPath } from 'url';
import createLogEntry, { getClientIp } from './utils/logger.js';

import ContactRoutes from './routes/contact.js';
import eventRoutes from './routes/events.js';

const app = express();
const port = process.env.PORT || 3000;
const curr_dirr = path.dirname(fileURLToPath(import.meta.url));
const log = createLogEntry('index.js');

log.info('Starting application initialization');

// Middleware
// Trust proxy to get real IP addresses (important if behind reverse proxy/load balancer)
app.set('trust proxy', true);
app.use(urlencoded({ extended: false }));
app.use(json());

// Custom request logging middleware (replaces morgan) - logs all requests with IP addresses
app.use((req, res, next) => {
    const start = Date.now();
    const ip = getClientIp(req);
    const functionName = `${req.method} ${req.path}`;
    const logFn = createLogEntry(functionName, ip);
    
    // Override res.end to log response (similar to morgan format but with IP)
    const originalEnd = res.end;
    res.end = function(chunk, encoding) {
        const duration = Date.now() - start;
        const statusCode = res.statusCode;
        const contentLength = res.get('content-length') || '-';
        
        // Log in morgan-like format: METHOD PATH STATUS DURATION - CONTENT-LENGTH
        // Format: [IP] METHOD PATH STATUS DURATION ms - CONTENT-LENGTH
        const logMessage = `${req.method} ${req.path} ${statusCode} ${duration}ms - ${contentLength}`;
        
        // Determine log level based on status code
        if (statusCode >= 500) {
            logFn.error(logMessage);
        } else if (statusCode >= 400) {
            logFn.warn(logMessage);
        } else {
            logFn.info(logMessage);
        }
        
        // Call original end
        originalEnd.call(this, chunk, encoding);
    };
    
    next();
});

log.debug('Middleware configured', { urlencoded: true, json: true, customLogger: true });

// Views
app.use(express.static(join(curr_dirr, 'build')));
log.debug('Static files configured', { buildPath: join(curr_dirr, 'build') });

// Routes - Consolidated with /api/v1 prefix
log.info('Registering routes with /api/v1 prefix');
app.use('/api/v1', ContactRoutes);
app.use('/api/v1', eventRoutes);

// Confirm Admin Pass
app.post('/api/v1/validate-admin', (req, res) => {
    const functionName = 'POST /api/v1/validate-admin';
    const ip = getClientIp(req);
    const logFn = createLogEntry(functionName, ip);
    
    logFn.info('Admin validation request received', { hasPassword: !!req.body.password });
    
    if (req.body.password === process.env.PASSWORD) {
        logFn.info('Admin validation successful');
        return res.sendStatus(200);
    };
    
    logFn.warn('Admin validation failed - incorrect password');
    return res.status(401).json({ error: 'Incorrect password' });
});

// Send every request to index.html
app.use((req, res) => {
    const functionName = 'catch-all route';
    const ip = getClientIp(req);
    const logFn = createLogEntry(functionName, ip);
    
    logFn.debug('Serving index.html for unmatched route', { path: req.path, method: req.method });
    res.sendFile(path.join(curr_dirr, "build", "index.html"));
});

// Listening
app.listen(port, () => {
    log.info('Application started successfully', { port, url: `http://localhost:${port}` });
});