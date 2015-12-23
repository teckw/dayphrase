// require the path module
var path = require("path");
// require express and create the express app
var express = require("express");
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");

//User body parser to send JSON
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./client")));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


// listen on 8000
app.listen(8000, function() {
 console.log("listening on port 8000. dayPhrase is up and running!");
})



