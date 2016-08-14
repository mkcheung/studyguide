var express = require('express');
var router = express.Router();

var Field     = require('../models/field');

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
//
module.exports = router;