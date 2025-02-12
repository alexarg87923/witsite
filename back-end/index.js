
import express, { urlencoded, json } from 'express';
import path, { join } from 'path';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import ContactRoutes from './routes/contact.js';
import eventRoutes from './routes/events.js';

const app = express();
dotenv.config();
const port = 3000;
const curr_dirr = path.dirname(fileURLToPath(import.meta.url));

// Midleware
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(morgan('dev'));

// Views
app.use(express.static(join(curr_dirr, 'build')));

// Routes
app.use(ContactRoutes);
app.use(eventRoutes);

// Confirm Admin Pass
app.post('/api/v1/validate-admin', (req, res) => {
    if (req.body.password === process.env.PASSWORD) {
        return res.sendStatus(200);
    };
    return res.status(401).json({ error: 'Incorrect password' });
});

// Send every request to index.html
app.use((req, res) => {
    res.sendFile(path.join(curr_dirr, "build", "index.html"));
});

// Listening
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});