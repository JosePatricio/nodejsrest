var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};



var pgp = require('pg-promise')(options);
var connectionString = "postgres://smvttfaabggxas:f5897b70ed7a16e90eef7e086f0e84943b437024679a1e6ba3b31f181e45f12e@ec2-107-22-251-55.compute-1.amazonaws.com:5432/d9njtlf8aels58"
// var connectionString =   "postgres://postgres:1234@localhost:5432/reportes";

var db = pgp(connectionString);


 module.exports=db;
