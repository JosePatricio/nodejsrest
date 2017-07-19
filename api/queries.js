  var db=require('../dbconnection2'); //reference of dbconnection.js




/////////////////////
// Query Functions
/////////////////////

function getAllStarships(req, res, next) {
  db.any('SELECT * FROM cliente')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all starships'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getStarship(req, res, next) {
  var id = parseInt(req.params.id);
  db.one('SELECT * FROM cliente WHERE id = $1', id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved one starship'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createStarship(req, res, next) {
  req.body.launched = parseInt(req.body.launched);


  db.none('INSERT INTO cliente(cliente,ruc,direccion,telefono,email,estado,telefono2,extension,contacto,prioridad)VALUES ' +
      'values(${cliente}, ${ruc}, ${direccion}, ${telefono}, ${email}, ${estado}, ${telefono2}, ${extension}, ${contacto}, ${prioridad}  )',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one starship'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateStarship(req, res, next) {
  db.none('UPDATE cliente SET cliente=$1, ruc=$2, direccion=$3, telefono=$4, email=$5, estado=$6, telefono2=$7, extension=$8, contacto=$9 , prioridad=$10 where id=$11',
    [req.body.name, req.body.registry, req.body.affiliation, parseInt(req.body.launched), req.body.class, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated starship'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeStarship(req, res, next) {
  var id = parseInt(req.params.id);
  db.result('DELETE FROM cliente WHERE id = $1', id)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: 'Removed ${result.rowCount} cliente'
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}


/////////////
// Exports
/////////////

module.exports = {
    getAllStarships: getAllStarships,
    getStarship: getStarship,
    createStarship: createStarship,
    updateStarship: updateStarship,
    removeStarship: removeStarship
};