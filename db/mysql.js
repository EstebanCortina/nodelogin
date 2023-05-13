const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodelogin',
  password: '123',
  port: '3306'
});

connection.connect();
module.exports = connection;