var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',
  function(err){
    if(!err){
      console.log('connected to MongoDB');
    } else {
      throw err;
    }
  });

var Subject     = require('./app/models/subject');
var Field     = require('./app/models/field');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();

app.use('/api', router);

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
    Field.findById(req.params.field_id, function(err, field){
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
        Subject.findById(req.params.subject_id, function(err, subject) {
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


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;
