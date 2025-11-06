import { Router } from 'express';
import database from '../database/database.js';
import createLogEntry, { getClientIp } from '../utils/logger.js';

const router = Router();
const log = createLogEntry('contact.js');

router.post('/contact', (req, res) => {
    const functionName = 'POST /contact';
    const ip = getClientIp(req);
    const logFn = createLogEntry(functionName, ip);
    
    logFn.info('Contact form submission received', { 
        hasName: !!req.body.name, 
        hasEmail: !!req.body.email,
        hasSubject: !!req.body.subject,
        hasMessage: !!req.body.message
    });
    
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
        logFn.warn('Contact form submission missing required fields', { name, email, subject, message });
        return res.status(400).json({ error: 'All fields are required.' });
    };
  
    logFn.debug('Inserting contact into database', { name, email, subject });
    database.run(
      'INSERT INTO contacts (name, email, subject, message) VALUES (?,?,?,?)',
      [name, email, subject, message],
      function (err) {
        if (err) {
            logFn.error('Database error inserting contact', { error: err.message, stack: err.stack });
            return res.status(500).json({ error: 'Database error occurred.' });
        };
        logFn.info('Contact successfully inserted', { contactId: this.lastID });
        res.sendStatus(200);
    });
});
  
router.get('/contact-submissions', (req, res) => {
    const functionName = 'GET /contact-submissions';
    const ip = getClientIp(req);
    const logFn = createLogEntry(functionName, ip);
    
    logFn.info('Fetching all contact submissions');
    database.all('SELECT * FROM contacts', (error, data) => {
        if (error) {
            logFn.error('Database error fetching contact submissions', { error: error.message, stack: error.stack });
            return res.status(500).json({ error: 'Database error occurred.' });
        };
        logFn.info('Contact submissions retrieved successfully', { count: data?.length || 0 });
        res.status(200).json(data);
    });
});

export default router;
