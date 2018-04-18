var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var medication = require('./routes/medication');
var generic_name = require('./routes/generic_name');
var interactions = require('./routes/interactions');
var overdose = require('./routes/overdose');
var precautions = require('./routes/precautions');
var side_effects = require('./routes/side_effects');
var warning = require('./routes/warning');
var medication_side_effects = require('./routes/medication_side_effects');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/generic_name', generic_name);
app.use('/interactions', interactions);
app.use('/medication', medication);
app.use('/overdose', overdose);
app.use('/precautions', precautions);
app.use('/side_effects', side_effects);
app.use('/warning', warning);
app.use('/medication_side_effects', medication_side_effects);


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

