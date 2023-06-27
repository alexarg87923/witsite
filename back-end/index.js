require('dotenv').config()
const fs = require('fs')
const express = require('express')
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express()
const path = require('path');

const dataBase = new sqlite3.Database(path.join(__dirname, 'eventList.db'));

const port = 3001

app.use(cors());
app.use(express.json());

app.post('/api/v1/addevents', (req, res, next) => {
  if (req.body.password != process.env.PASSWORD)
  {
    res.sendStatus(400);
    return
  }
  dataBase.run('INSERT INTO eventList (title, date) VALUES (?,?)', [req.body.title, req.body.date])
  res.sendStatus(200);
})

app.get('/api/v1/events', (req, res, next) => {
  dataBase.all('SELECT title, date FROM EventList', (error, data) => {
    res.status(200).json(data);
    return;
  });
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})