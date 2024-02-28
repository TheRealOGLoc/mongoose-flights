var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights');
const ticketController = require('../controllers/tickets');

// flights/ has been added, no need to add

// GET /new 
router.get('/new', flightsController.new);

// GET /show
router.get('/show', flightsController.show);

// GET /:id
router.get('/:id', flightsController.detail);

// POST /new
router.post('/new', flightsController.create);

// POST /flights/:id/ticket
router.post('/:id/ticket', ticketController.addToTicket);

// POST /:id
router.post('/:id/destination', flightsController.addDes);





module.exports = router;
