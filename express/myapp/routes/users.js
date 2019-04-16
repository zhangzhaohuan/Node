var express = require('express');
var router = express.Router();

/* GET users listing. */
/**deprecated starting with Express v4.11.0  */
router.param('id', function (req, res, next, val) {
  if (val == 1337) {
    next();
  } else {
    res.sendStatus(403);
  }
});

router.get('/:id', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
