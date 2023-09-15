require('dotenv').config()

const express = require('express')
const path = require('path');
const morgan = require('morgan');

const app = express()

const port = 3000
const ContactRoutes = require('./routes/contact');
const eventRoutes = require('./routes/events');

// Midleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

// Views
app.use(express.static(path.join(__dirname, "../front-end", "build")));
app.use(express.static("public"));

// Routes
app.use(ContactRoutes);
app.use(eventRoutes);

app.post('/api/v1/validate-admin', (req, res) => {
  const adminPassword = process.env.PASSWORD;
  if (req.body.password === adminPassword) {
      return res.sendStatus(200);
  }
  return res.status(401).json({ error: 'Incorrect password' });
});



app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../front-end", "build", "index.html"));
});



// Listening
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})