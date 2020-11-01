var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer  = require('multer')
var indexRouter = require('./routes/index');

var app = express();
const bodyParser = require('body-parser');

var cors = require('cors')

 
app.use(cors())


var usersRouter = require('./routes/users');
var itemsRouter=require('./routes/items');
var commentsRouter=require('./routes/comments');
var cartRouter=require('./routes/carts');
var deliveryRouter=require('./routes/delivery');
var imageRouter=require('./routes/image');
var customorderRouter=require('./routes/customorder');

ObjectId = require('mongodb').ObjectId;
const mongoose=require('mongoose');
const url='mongodb+srv://Sanjeet:Sanjeet@cluster0.5n3sn.mongodb.net/bazaree?retryWrites=false&w=majority';

const connect=mongoose.connect(url);
connect.then((db)=>{
  console.log("connected");
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use('/customorder',express.static('public'))
app.use(express.json());
app.use(bodyParser.json());  
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items',itemsRouter);
app.use('/comments',commentsRouter);
app.use('/cart',cartRouter);
app.use('/delivery',deliveryRouter);
app.use('/image',imageRouter);
app.use('/customorder',customorderRouter);

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
