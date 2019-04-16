var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.message = 'test';
  res.render('index', { title: 'EXpress' });
});

module.exports = router;
