var express = require('express');
var router = express.Router();

var Topic     = require('../models/topic');

router.route('/topics').get(function(req, res){

  Topic.find(function(err, topics){
    if(err){
      res.send(err);
    }
    res.json(topics);
  });
})
.post(function(req, res){
  var newTopic = new Topic();
  newTopic.name = req.body.name;
  newTopic.description = req.body.description;
  newTopic.save(function(err){
    if(err){
      res.send(err);
    }
    res.json({message: "New Topic Created"});
  });
});

router.route('/topics/:topic_id')

    .get(function(req, res) {
        Topic.findById(req.params.topic_id)
        .populate('field')
        .exec(function(err, topic) {
            if (err)
                res.send(err);
            res.json(topic);
        });
    })
    .put(function(req, res) {

        // use our topic model to find the topic we want
        Topic.findById(req.params.topic_id, function(err, topic) {
            if (err)
                res.send(err);

            for (prop in req.body) {
              topic[prop] = req.body[prop];
            }

            // save the topic
            topic.save(function(err) {
                if (err)
                    res.send(err);

              res.json({ message: 'Topic updated!' });
            });

        });
    });

module.exports = router;