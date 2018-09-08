var express = require('express');
var app = express();

app.set('view engine','ejs');
app.set('views', __dirname + '/views');
var path = require('path');
app.use(express.static(path.resolve('./public')));
var routes=require('./routes');
app.get('/',routes.home);
var routes=require('./routes');
app.get('/',routes.home);
var db = require('./model/data');
app.get('/front', function(req, res) {
	
	    if (err)  	throw err;
		   
		    var list=result;
		    console.log('success');
		    res.render('index.ejs',{list:list});
		    console.log(fields);
		  });
		});

app.get('/productHolder', function(req, res) {
	
	
	
	res.write("Successfully connected");
	var ProductName = req.query.productname;
	var ProductCode = req.query.productCode;
	var ProductPrice = req.query.productprice;
	var ProductType = req.query.producttype;
	var ProductTax = req.query.producttax;
	
  var values = [

		[ ProductName, ProductCode, ProductPrice, ProductType,
				ProductTax ]

		];
		var data = "insert into supermarket values ?";
		db.query(data, [ values ], function(err) {

			if (err) {
				console.log(err);
			} else {
				console.log([values]);
				res.write("Data inserted successfully");
				res.end();
			}
			});
		


});
app.listen(5897, function () {
	   
	  console.log("running successfully");

	});



/*var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
*/