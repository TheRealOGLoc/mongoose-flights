var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/flights', function(req, res, next) {
  res.render('flights/index', { title: 'Express' });
});

module.exports = router;
