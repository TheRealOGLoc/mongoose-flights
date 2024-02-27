var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights');


// GET /new 
router.get('/new', flightsController.new);

// GET /show
router.get('/show', flightsController.show);

// POST /new
router.post('/new', flightsController.create);

module.exports = router;
