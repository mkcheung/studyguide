var express = require('express');
var router = express.Router();

var Point     = require('../models/point');

router.route('/points').get(function(req, res){

  Point.find(function(err, points){
    if(err){
      res.send(err);
    }
    res.json(points);
  });
})
.post(function(req, res){
  var newPoint = new Point();
  newPoint.title = req.body.title;
  newPoint.source = req.body.source;
  newPoint.argument = req.body.argument;
  newPoint.rebuttal = req.body.rebuttal;
  newPoint.save(function(err){
    if(err){
      res.send(err);
    }
    res.json({message: "New Point Created"});
  });
});

router.route('/points/:point_id')

    .get(function(req, res) {
        Point.findById(req.params.point_id)
        .populate('field')
        .exec(function(err, point) {
            if (err)
                res.send(err);
            res.json(point);
        });
    })
    .put(function(req, res) {

        // use our point model to find the point we want
        Point.findById(req.params.point_id, function(err, point) {
            if (err)
                res.send(err);

            for (prop in req.body) {
              point[prop] = req.body[prop];
            }

            // save the point
            point.save(function(err) {
                if (err)
                    res.send(err);

              res.json({ message: 'Point updated!' });
            });

        });
    });

module.exports = router;