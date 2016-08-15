var express = require('express');
var router = express.Router();


router.use(function(req, res, next){
  console.log('something is happening');
  next();
});


router.get('/', function(req, res) {
    // res.json({ message: 'hooray! welcome to our api!' });
    res.render('index', {name: "Study Guide: Map of Logic"});
});

module.exports = router;