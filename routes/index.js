var express = require('express');
var timestamp = require('normalize-date');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/:time', function(req, res) {
  if(!isNaN(req.params.time)){
    var data = {unix: req.params.time, natural: timestamp(+req.params.time)}
  }
  res.json(data);
});

module.exports = router;
