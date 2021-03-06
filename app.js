const express = require('express');
const mongoose = require('mongoose');

const session =  require('express-session');
const FileStore = require('session-file-store')(session);

const passport = require('passport');
const authenticate = require('./scripts/authenticate');

const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/usersRouter');
const ebooksRouter = require('./routes/ebooksRouter');
const pagesRouter = require('./routes/pagesRouter');

const auth = require('./scripts/auth');


const url = 'mongodb://localhost:27017/ebookDB';
const connect = mongoose.connect(url,{useNewUrlParser: true});

connect.then(db => {
  console.log("Connected on to DB");
  
}, err => console.log(err))

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(session(
  {
    name:"book-api",
    secret:"8OU22UGQQU3Q",
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
  }
));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(auth());

app.use('/books',ebooksRouter);
app.use('/pages',pagesRouter);

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
