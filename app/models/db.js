const mysql = require("mysql");

var db_config = {
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'bf4c95ea373370',
  password: '9c225b8e',
  database: 'heroku_25862cd1f241f87'
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config);

  connection.connect(function(err) { 
    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    }
    console.log("Successfully connected to the database.");
  });   

  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });

  module.exports = connection;
}

handleDisconnect();

// mysql://bf4c95ea373370:9c225b8e@us-cdbr-east-03.cleardb.com/heroku_25862cd1f241f87?