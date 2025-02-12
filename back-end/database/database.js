import path, { join } from 'path';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';

const dbPath = join(path.dirname(fileURLToPath(import.meta.url)), 'database.db');
const database = new sqlite3.Database(dbPath);

// Function to check if a table exists
function tableExists(tableName, callback) {
    database.get(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`, [tableName], (err, row) => {
        if (err) {
            throw err;
        };
        callback(!!row);
    });
};

tableExists('event_list', (exists) => {
    if (!exists) {
        database.run(`
            CREATE TABLE event_list (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                date DATETIME NOT NULL
            )
        `, (err) => {
            if (err) {
                throw err;
            }
            console.log('event_list table created.');
        });
    };
});

tableExists('contacts', (exists) => {
    if (!exists) {
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
                throw err;
            }
            console.log('contacts table created.');
        });
    };
});

export default database;
