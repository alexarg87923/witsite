import { Router } from 'express';
import database from '../database/database.js';
import createLogEntry, { getClientIp } from '../utils/logger.js';

const router = Router();
const log = createLogEntry('events.js');

router.delete('/events/:id', (req, res) => {
    const functionName = `DELETE /events/:id`;
    const ip = getClientIp(req);
    const logFn = createLogEntry(functionName, ip);
    
    logFn.info('Delete event request received', { eventId: req.params.id });
    database.run('DELETE FROM event_list WHERE id=?', [req.params.id], function(error) {
        if (error) {
            logFn.error('Failed to delete event', { 
                eventId: req.params.id, 
                error: error.message, 
                stack: error.stack 
            });
            return res.status(500).json({ error: 'Failed to delete the event.' });
        }
        logFn.info('Event deleted successfully', { 
            eventId: req.params.id, 
            changes: this.changes 
        });
        res.sendStatus(200);
    });
});

router.put('/events/:id', (req, res) => {
    const functionName = `PUT /events/:id`;
    const ip = getClientIp(req);
    const logFn = createLogEntry(functionName, ip);
    
    logFn.info('Update event request received', { 
        eventId: req.params.id, 
        title: req.body.title, 
        date: req.body.date 
    });
    
    if (!req.body.title || !req.body.date) {
        logFn.warn('Update event request missing required fields', { 
            eventId: req.params.id, 
            title: req.body.title, 
            date: req.body.date 
        });
        return res.status(400).json({ error: 'Title and date are required.' });
    }
    
    database.run('UPDATE event_list SET title=?, date=? WHERE id=?', 
        [req.body.title, req.body.date, req.params.id], 
        function(error) {
            if (error) {
                logFn.error('Failed to update event', { 
                    eventId: req.params.id, 
                    error: error.message, 
                    stack: error.stack 
                });
                return res.status(500).json({ error: 'Failed to update the event.' });
            }
            logFn.info('Event updated successfully', { 
                eventId: req.params.id, 
                changes: this.changes 
            });
            res.sendStatus(200);
        });
});

router.post('/addevents', (req, res) => {
    const functionName = 'POST /addevents';
    const ip = getClientIp(req);
    const logFn = createLogEntry(functionName, ip);
    
    logFn.info('Add event request received', { 
        hasPassword: !!req.body.password, 
        title: req.body.title, 
        date: req.body.date 
    });
    
    if (req.body.password !== process.env.PASSWORD) {
        logFn.warn('Add event request failed authentication', { 
            passwordProvided: !!req.body.password 
        });
        return res.sendStatus(400);
    };

    const { title, date } = req.body;
    if (!title || !date) {
        logFn.warn('Add event request missing required fields', { title, date });
        return res.status(400).json({ error: 'Title and date are required.' });
    };

    logFn.debug('Inserting event into database', { title, date });
    database.run(
        'INSERT INTO event_list (title, date) VALUES (?,?)',
        [title, date],
        function (err) {
        if (err) {
            logFn.error('Database error inserting event', { 
                error: err.message, 
                stack: err.stack 
            });
            return res.status(500).json({ error: 'Database error occurred.' });
        };
        logFn.info('Event successfully inserted', { eventId: this.lastID, title, date });
        res.sendStatus(200);
    });
});

router.get('/events', (req, res) => {
    const functionName = 'GET /events';
    const ip = getClientIp(req);
    const logFn = createLogEntry(functionName, ip);
    
    logFn.info('Fetching all events');
    database.all('SELECT * FROM event_list', (error, data) => {
        if (error) {
            logFn.error('Database error fetching events', { 
                error: error.message, 
                stack: error.stack 
            });
            return res.status(500).json({ error: 'Database error occurred.' });
        }
        logFn.info('Events retrieved successfully', { count: data?.length || 0 });
        res.status(200).json(data);
    });
});
  

export default router;
