const sql = require("./db.js");

// constructor
const ApiCall = function(data) {
    this.endpoint = data.endpoint;
    this.parameter = data.parameter;
    this.created_at = new Date();
};

ApiCall.create = (data, result) => {
    sql.query("INSERT INTO api_call SET ?", data, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("data: ", { id: res.insertId, ...data });
      result(null, { id: res.insertId, ...data });
    });
  };

  module.exports = ApiCall;