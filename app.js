var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const hbs = require('hbs');

var about = require('./app_server/routes/about');
var contact = require('./app_server/routes/contact');
var index = require('./app_server/routes/index');
var meals = require('./app_server/routes/meals');
var news = require('./app_server/routes/news');
var rooms = require('./app_server/routes/rooms');
var users = require('./app_server/routes/users');
var travel = require('./app_server/routes/travel');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));

// register handlebars partials (https://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'));

app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/about', about);
app.use('/contact', contact);
app.use('/index', index);
app.use('/meals', meals);
app.use('/news', news);
app.use('/rooms', rooms);
app.use('/users', users);
app.use('/travel', travel);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
