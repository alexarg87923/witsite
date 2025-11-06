import path, { join } from 'path';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';
import createLogEntry from '../utils/logger.js';

const log = createLogEntry('database.js');

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const backEndDir = path.join(currentDir, '..');
const dataDir = path.join(backEndDir, 'data');
const dbPath = path.join(dataDir, 'database.db');

try {
    mkdirSync(dataDir, { recursive: true });
    log.debug('Data directory ensured', { dataDir });
} catch (err) {
    log.error('Failed to create data directory', { dataDir, error: err.message });
}

log.info('Initializing database connection', { dbPath });
const database = new sqlite3.Database(dbPath);

database.on('open', () => {
    log.info('Database connection opened successfully');
});

database.on('error', (err) => {
    log.error('Database error occurred', { error: err.message, stack: err.stack });
});

// Function to check if a table exists
function tableExists(tableName, callback) {
    log.debug('Checking if table exists', { tableName });
    database.get(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`, [tableName], (err, row) => {
        if (err) {
            log.error('Error checking if table exists', { tableName, error: err.message });
            throw err;
        };
        const exists = !!row;
        log.debug('Table existence check completed', { tableName, exists });
        callback(exists);
    });
};

tableExists('event_list', (exists) => {
    if (!exists) {
        log.info('Creating event_list table');
        database.run(`
            CREATE TABLE event_list (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                date DATETIME NOT NULL
            )
        `, (err) => {
            if (err) {
                log.error('Failed to create event_list table', { error: err.message, stack: err.stack });
                throw err;
            }
            log.info('event_list table created successfully');
        });
    } else {
        log.debug('event_list table already exists');
    };
});

tableExists('contacts', (exists) => {
    if (!exists) {
        log.info('Creating contacts table');
        database.run(`
            CREATE TABLE contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                email TEXT,
                subject TEXT,
                message TEXT
            )
        `, (err) => {
            if (err) {
                log.error('Failed to create contacts table', { error: err.message, stack: err.stack });
                throw err;
            }
            log.info('contacts table created successfully');
        });
    } else {
        log.debug('contacts table already exists');
    };
});

export default database;
