const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: 'us-cdbr-east-03.cleardb.com',
//   user: 'bf4c95ea373370',
//   password: '9c225b8e',
//   database: 'heroku_25862cd1f241f87'
// });


// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });

// module.exports = connection;

var db_config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
};

// var db_config = {
//   host: 'us-cdbr-east-03.cleardb.com',
//   user: 'bf4c95ea373370',
//   password: '9c225b8e',
//   database: 'heroku_25862cd1f241f87'
// };

var connection;

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
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });

  module.exports = connection;
}

handleDisconnect();

// mysql://bf4c95ea373370:9c225b8e@us-cdbr-east-03.cleardb.com/heroku_25862cd1f241f87?