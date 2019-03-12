var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var glob = require('glob');
var sass = require('node-sass');


var app = express();

// view engine setup
app.set('views', path.join(__dirname,'..', 'src', 'pages'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(sass.middleware({ src: __dirname + '/sass', dest: __dirname + '/common/stylesheets', prefix: 'stylesheets', debug: true, }));  
app.use(express.static(path.join(__dirname, '..', 'src', 'common')));


glob.sync(__dirname+'/../src/pages/**/route.js').forEach(page => {
    app.use(require(page));
});


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
  res.render('error/error');
});

module.exports = app;
