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
var allRoutes = require('./app/routes/routes.js');
var fieldRoutes = require('./app/routes/fields.js');
var subjectRoutes = require('./app/routes/subjects.js');
app.use('/', allRoutes);
app.use('/api', fieldRoutes);
app.use('/api', subjectRoutes);

module.exports = app;
