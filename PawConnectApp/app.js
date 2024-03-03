// APP.JS file 
// Place app requiremtns/dependencies here
// DB connection and SQL
// Wire up to routes here


// Web App requirements to build app-------------------------
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require("mysql");
const pool = dbConnection();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/loginPage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/loginPage', loginRouter);


// ===============================================================================
// DB SECTION
// ===============================================================================

//------------------Execute Sql----------------------------------
function executeSQL(sql, params) {
  return new Promise(function(resolve, reject) {
    pool.query(sql, params, function(err, rows, fields) {
      if (err) throw err;
      resolve(rows);
    });
  });
}

// ---------------DataBase Connection-------------------------
function dbConnection(){
  const pool = mysql.createPool({
    connectionLimit: 10,
    host: "hngomrlb3vfq3jcr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "r8y141rt6xns3ejq",
    password: "zwv1v6y4c0dffay3",
    database: "bxr2et3njo3yvg0y"
  });

  // Check for connection errors
  pool.getConnection((err, connection) => {
    if (err) {
      console.error(".......Error connecting to the database:", err);
      return;
    }
    console.log("......Connected to the database!");
    connection.release(); // Release the connection
  });
  return pool;
}




// ===============================================================================
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
