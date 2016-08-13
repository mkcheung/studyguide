var express = require('express');
var router = express.Router();

var Subject     = require('../models/subject');

router.route('/subjects').get(function(req, res){

  Subject.find(function(err, subjects){
    if(err){
      res.send(err);
    }
    res.json(subjects);
  });
})
.post(function(req, res){
  var newSubject = new Subject();
  newSubject.name = req.body.name;
  newSubject.description = req.body.description;
  newSubject.save(function(err){
    if(err){
      res.send(err);
    }
    res.json({message: "New Subject Created"});
  });
});

router.route('/subjects/:subject_id')

    .get(function(req, res) {
        Subject.findById(req.params.subject_id)
        .populate('field')
        .exec(function(err, subject) {
            if (err)
                res.send(err);
            res.json(subject);
        });
    })
    .put(function(req, res) {

        // use our subject model to find the subject we want
        Subject.findById(req.params.subject_id, function(err, subject) {
            if (err)
                res.send(err);

            for (prop in req.body) {
              subject[prop] = req.body[prop];
            }

            // save the subject
            subject.save(function(err) {
                if (err)
                    res.send(err);

              res.json({ message: 'Subject updated!' });
            });

        });
    });

module.exports = router;