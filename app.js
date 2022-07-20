var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
// var passport = require('./middleware/passport');

var app = express();

// Use for sass
app.use(sassMiddleware({
  src: path.join(__dirname, '/sass'),
  dest: path.join(__dirname, '/public/stylesheets'),
  prefix:  '/stylesheets',
  indentedSyntax: false, //false 代表 SCSS true 代表 SASS
  debug: true,
  sourceMap: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.bodyParser());
// app.use(express.session({ secret: 'keyboard cat' }));


// 💡 passport
// app.use(passport.initialize());
// app.use(passport.session());


// Serve static files from public
app.use(express.static(path.join(__dirname + "/public")));

// Router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

app.use(indexRouter);
app.use(usersRouter);
app.use(loginRouter);

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

// Listen on port 3000
const port = process.env.PORT || 3000;
    app.listen(port, () =>
      console.log("Express app listening on port " + port)
);

module.exports = app;
