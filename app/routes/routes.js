var express = require('express');
var router = express.Router();

var Subject     = require('../models/subject');
var Field     = require('../models/field');

router.use(function(req, res, next){
  console.log('something is happening');
  next();
});

router.route('/fields').get(function(req,res){
  Field.find(function(err, fields){
    if(err){
      res.send(err);
    }
    res.json(fields);
  });
})
.post(function(req,res){
  var newField = new Field();
  newField.fieldName = req.body.fieldName

  newField.save(function(err){
    if(err){
      res.send(error);
    }

    res.json({message: "New Field of Study Created!"});
  });

});

router.route('/fields/:field_id')

  .get(function(req,res){
    Field.findById(req.params.field_id)
    .populate('subjects')
    .exec(function(err, field){
      if(err){
        res.send(error);
      }
      res.json(field);
    });
  })
  .put(function(req,res){
    Field.findById(req.params.field_id, function(err, field){
      if (err)
          res.send(err);

      for (prop in req.body) {
        field[prop] = req.body[prop];
      }

      // save the field
      field.save(function(err) {
          if (err)
            res.send(err);

        res.json({ message: 'Field updated!' });
      });
    });
  });


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


router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

module.exports = router;