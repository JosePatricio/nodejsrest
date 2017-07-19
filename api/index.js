var express = require('express');
var router = express.Router();


// http://localhost:3000/
router.get('/', function(req, res, next) {
    res.status(200)
      .json({
        status: 'success',
        message: 'Live long and prosper!'
      });
});


//////////////////////
// Postgres queries
//////////////////////

var db = require('./queries');

router.get('/api/clientes', db.getAllStarships);
router.get('/api/clientes/:id', db.getStarship);
router.post('/api/clientes', db.createStarship);
router.put('/api/clientes/:id', db.updateStarship);
router.delete('/api/clientes/:id', db.removeStarship);

module.exports = router;