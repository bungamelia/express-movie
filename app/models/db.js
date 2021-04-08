const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'bf4c95ea373370',
  password: '9c225b8e',
  database: 'heroku_25862cd1f241f87'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;

// mysql://bf4c95ea373370:9c225b8e@us-cdbr-east-03.cleardb.com/heroku_25862cd1f241f87?