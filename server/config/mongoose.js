// require mongoose
var mongoose = require('mongoose');
// require the fs module for loading model files
var fs = require('fs');
// require path for getting the models path
var path = require('path');
// connect to mongoose!
mongoose.connect('mongodb://localhost/dayPhrase');

// read all of the files in the models_path and require (run) each of the javascript files
var models_path = __dirname +'/../models'

fs.readdirSync(models_path).forEach(function(file) {

  if(file.indexOf('.js') > 0) {

    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);

  }

});