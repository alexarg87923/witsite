const path = require('path');
const sqlite3 = require('sqlite3');

module.exports = database = new sqlite3.Database(path.join(__dirname, 'database.db'));
