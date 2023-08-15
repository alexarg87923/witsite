const express = require('express');
const router = express.Router();

const database = require('../database/database');

router.delete('/api/v1/events/:id', (req, res) => {
    database.run('DELETE FROM event_list WHERE id=?', [req.params.id], error => {
        if (error) {
            return res.status(500).json({ error: 'Failed to delete the event.' });
        }
        res.sendStatus(200);
    });
});

router.put('/api/v1/events/:id', (req, res) => {
    database.run('UPDATE event_list SET title=?, date=? WHERE id=?', [req.body.title, req.body.date, req.params.id], error => {
        if (error) {
            return res.status(500).json({ error: 'Failed to update the event.' });
        }
        res.sendStatus(200);
    });
});

router.post('/api/v1/addevents', (req, res) => {
    if (req.body.password !== process.env.PASSWORD) {
        return res.sendStatus(400);
    }

    const { title, date } = req.body;
    if (!title || !date) {
        return res.status(400).json({ error: 'Title and date are required.' });
    }

    database.run(
        'INSERT INTO event_list (title, date) VALUES (?,?)',
        [title, date],
        function (err) {
        if (err) {
            return res.status(500).json({ error: 'Database error occurred.' });
        }
        res.sendStatus(200);
        }
    );
});

router.get('/api/v1/events', (req, res) => {
    database.all('SELECT * FROM event_list', (error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Database error occurred.' });
        }
        res.status(200).json(data);
    });
});
  

module.exports = router;
