const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');

const indexRouter = require('./routes/web');
const adminRouter = require('./routes/admin');
const usersRouter = require('./routes/admin/users');

const app = express();

app.use(cors()); // 处理跨域
require('./plugins/db')(app); // 连接数据库

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/uploads', express.static(path.join(__dirname, 'public/uploads'))); // 上传静态资源

// 路由
app.use('/api/', indexRouter());
app.use('/', adminRouter());
app.use('/users', usersRouter());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  return res.status(err.statusCode || 500).send({
    message: err.message
  });
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  next();
});

module.exports = app;
