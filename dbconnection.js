var express = require('express');
var pg = require('pg');

pg.defaults.ssl = process.env.DATABASE_URL != undefined;

//var conString = process.env.DATABASE_URL || "postgres://postgres:1234@localhost:5432/reportes";; // Cadena de conexión a la base de datos
 var conString = process.env.DATABASE_URL || "postgres://smvttfaabggxas:f5897b70ed7a16e90eef7e086f0e84943b437024679a1e6ba3b31f181e45f12e@ec2-107-22-251-55.compute-1.amazonaws.com:5432/d9njtlf8aels58";; // Cadena de conexión a la base de datos



var client = new pg.Client(conString);
  client.connect();



 module.exports=client;
