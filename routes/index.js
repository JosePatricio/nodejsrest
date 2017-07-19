var express = require('express');
var router = express.Router();

var pg = require('pg');

pg.defaults.ssl = process.env.DATABASE_URL != undefined;
var conString = process.env.DATABASE_URL || "postgres://postgres:1234@localhost:5432/reportes";; // Cadena de conexión a la base de datos

// Set up your database query to display GeoJSON
var coffee_query = "SELECT * from public.cliente";

/*
SELECT row_to_json(fc) FROM (
	SELECT array_to_json(array_agg(f)) As features FROM (
		SELECT ST_AsGeoJSON(lg.geom)::json As geometry,
		row_to_json((id, name)) As properties FROM cambridge_coffee_shops As lg
	) As f
) As fc
*/

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Postgis & NodeJS'}
  );
});

/* GET Postgres JSON data */
router.get('/data', function (req, res) {
  var client = new pg.Client(conString);
  client.connect();
  var query = client.query(coffee_query);
  query.on("row", function (row, result) {
    result.addRow(row);
  });
  query.on("end", function (result) {
    res.json(result.rows[0].row_to_json);
    res.end();
  });
});

/* GET Tabla */
router.get('/tabla', function (req, res) {
  var client = new pg.Client(conString);
  client.connect();
  var query = client.query(coffee_query);
  query.on("row", function (row, result) {
    result.addRow(row);
  });
  query.on("end", function (result) {
    res.render('tabla', {
      title: 'Tabla de datos',
      datos: result.rows[0].row_to_json.cliente
    });
  });
});

module.exports = router;
