var express = require('express');
var router = express.Router();

var Tag     = require('../models/tag');

router.route('/tags').get(function(req, res){

  Tag.find(function(err, tags){
    if(err){
      res.send(err);
    }
    res.json(tags);
  });
})
.post(function(req, res){
  var newTag = new Tag();
  newTag.title = req.body.title;
  newTag.description = req.body.description;
  newTag.save(function(err){
    if(err){
      res.send(err);
    }
    res.json({message: "New Tag Created"});
  });
});

router.route('/tags/:tag_id')

    .get(function(req, res) {
        Tag.findById(req.params.tag_id)
        .populate('field')
        .exec(function(err, tag) {
            if (err)
                res.send(err);
            res.json(tag);
        });
    })
    .put(function(req, res) {

        // use our tag model to find the tag we want
        Tag.findById(req.params.tag_id, function(err, tag) {
            if (err)
                res.send(err);

            for (prop in req.body) {
              tag[prop] = req.body[prop];
            }

            // save the tag
            tag.save(function(err) {
                if (err)
                    res.send(err);

              res.json({ message: 'Tag updated!' });
            });

        });
    });

module.exports = router;