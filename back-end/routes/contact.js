import { Router } from 'express';
import database from '../database/database.js';

const router = Router();

router.post('/api/v1/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    };
  
    database.run(
      'INSERT INTO contacts (name, email, subject, message) VALUES (?,?,?,?)',
      [name, email, subject, message],
      function (err) {
        if (err) {
            return res.status(500).json({ error: 'Database error occurred.' });
        };
        res.sendStatus(200);
    });
});
  
router.get('/api/v1/contact-submissions', (req, res) => {
    database.all('SELECT * FROM contacts', (error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Database error occurred.' });
        };
        res.status(200).json(data);
    });
});

export default router;
