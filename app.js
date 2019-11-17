var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var  cors = require('cors');
var bodyParser=require('body-parser');

var apiRouter = require('./routes/book');
var api = require('./routes/users');
var company = require('./routes/company');
var companies = require('./routes/companies');
var user = require('./routes/user');
var sysUser = require('./routes/sysUserRoles');
var subCompUser = require('./routes/subCompUserRole');
var CompanyTemplate = require('./routes/companyTemplates');

var app = express();


app.use(bodyParser.json());
app.use(cors({
  origin:['http://localhost:4200','http://127.0.0.1:4200'],
  credentials:true
}));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-angular6', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));


// cross domain origin
app.use((req, res, next) => {
 // res.append('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  //res.append('Access-Control-Allow-Credentials', true);
  next();
});
  
//passport
var passport = require('passport');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  name:'user_sid',
  resave:false,
  saveUninitialized:false,
  secret:'secret',
  cookie:{
    maxAge:36000000,
    httpOnly:false,
    secure:false
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./bin/passport-config.js');
app.use(passport.initialize());
app.use(passport.session());



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/api', apiRouter);
app.use('/users', api);
app.use('/company', company);
app.use('/companyTemplate', CompanyTemplate);
app.use('/SysUser',sysUser);
app.use('/SubCompUser',subCompUser);

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
  res.send(err.status);
});




module.exports = app;