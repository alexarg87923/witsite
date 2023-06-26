const fs = require('fs')
const express = require('express')
const sqlite3 = require('sqlite3');
const app = express()
const path = require('path');
const dataBase = new sqlite3.Database(path.join(__dirname, 'eventList.db'));
const port = 3001

app.use(express.json());

app.post('/api/v1/addevent', (req, res, next) => {

})

app.get('/api/v1/events', (req, res, next) => {
  dataBase.get('SELECT * FROM EventList', (error, data) => {
    res.send(200).json(data);
    return;
  });
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})