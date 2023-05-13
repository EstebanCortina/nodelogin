const mysql = require('mysql');
const { DB_USER, DB_NAME, DB_PASSWORD } = require('../config/config');
const connection = mysql.createConnection({
  host: 'localhost',
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: '3306'
});

connection.connect();
module.exports = connection;