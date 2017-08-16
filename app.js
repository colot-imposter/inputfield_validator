const express = require('express');
const mustache = require('mustache')
const mustache_express = require('mustache-express')
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Create app
const app = express();

app.engine('mustache', mustache_express())
app.set('views', './views')
app.set('view engine', 'mustache')

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
//
// app.use(expressValidator());

app.get('/', function(req, res){
  // Set 'action' to '/'

  res.render('index');
});


app.post('/', function(req, res){
    req.checkBody("name", "You must enter a real Name!").notEmpty();


      var errors = req.validationErrors();
   if (errors) {
     // Render validation error messages
     var html = errors;
     res.send(html);
   } else {
     var name = req.body.name;
     var html = '<p>Your user name is: </p>' + name;
     res.send(html);
    }
  });
app.listen(3000);
