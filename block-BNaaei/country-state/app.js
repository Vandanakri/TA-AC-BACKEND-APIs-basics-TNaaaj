var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//requiring the routes
var v1IndexRouter = require('./routes/index1');
var v1CountriesRouter = require('./routes/countries1');
var v1StatesRouter = require('./routes/states1');

//connected to database
mongoose.connect('mongodb://localhost/country-satate',(err) => {
  console.log(err ? err: "connected to database")
})

// Instantiating the application
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

//middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Using Routers
app.use('/api', v1IndexRouter);
app.use('/api/v1/countries', v1CountriesRouter);
app.use('/api/v1/states', v1StatesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
