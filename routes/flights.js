var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights');


// GET /new 
router.get('/new', flightsController.new);

// GET /show
router.get('/show', flightsController.show);

// GET /:id
router.get('/:id', flightsController.detail);

// POST /new
router.post('/new', flightsController.create);

// POST /:id
router.post('/:id', flightsController.addDes);


module.exports = router;
