var path = require("path");

var express = require("express");
var app = express();

var morgan = require("morgan");
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
//User body parser to send JSON
var passport = require("passport");
var cookieParser = require("cookie-parser");
var session = require ('express-session');

var flash = require("connect-flash");

require('./server/config/passport')(passport);

app.use(morgan('dev'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: "anystringoftext",
				saveUninitialized: true,
				resave: true}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, "./client")));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app, passport);

// app.use('/', function(req, res){
// 	console.log(req.cookies);
// 	console.log("============");
// 	console.log(req.session);
// });

// listen on 8000
app.listen(8000, function() {
 console.log("listening on port 8000. dayPhrase is up and running!");
})
