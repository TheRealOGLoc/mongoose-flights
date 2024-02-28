var express = require('express');
var router = express.Router();
const ticketController = require('../controllers/tickets')

// flights/tickets added

// GET /ticket
router.get('/', ticketController.new);

// POST /ticket
router.post('/', ticketController.create);


module.exports = router;