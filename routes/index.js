var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

function unixToNormal(date){
  var unix = new Date(date * 1000);
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = months[unix.getMonth()];
  var day = unix.getDate();
  var year = unix.getFullYear();
  var result = month + ' ' + day + ', ' + year;

  return result;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

router.get('/:time', function(req, res) {
  if(!isNaN(req.params.time)){
    var data = {unix: +req.params.time, natural: unixToNormal(req.params.time)}
    res.json(data);
  }else{
    var natural = new Date(req.params.time);
    if(!isNaN(natural)){
      var unix = natural / 1000;
      var data = {unix: unix, natural: capitalize(req.params.time)}
      res.json(data);
    }else{
      res.json({unix: null, natural: null});
    }
  }
});

module.exports = router;
