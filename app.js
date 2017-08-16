const express = require('express');
const mustache_express = require('mustache-express')
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Create app
const app = express();

app.engine('mustache', mustache_express())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(bodyParser.urlencoded({ extended: false}));

app.use(expressValidator());


app.get('/', function(req, res){
  res.render('index');
});


app.post('/results', function(req, res){
    req.checkBody("name", "You must enter a real Name!").notEmpty();
    req.checkBody("email", "You must enter a real Email!").isEmail();
    req.checkBody("birthday", "You must enter a birthday! when. is your birthday?!").notEmpty();
    req.checkBody("birthday", "You must enter a real birthday! when. is your real birthday?!").notEmpty();
    req.checkBody("birthday", "You must enter a real birthday! when. is your real birthday?!").isAfter();
    req.checkBody("name", "You must enter a real Name!").notEmpty();
    req.checkBody("name", "You must enter a real Name!").notEmpty();
    req.checkBody("name", "You must enter a real Name!").notEmpty();
    req.checkBody("name", "You must enter a real Name!").notEmpty();


      let results = {};
        results.name = req.body.name;
        //result.otherinfo = req.body.otherinfo

      let errors = req.validationErrors();

   if (errors) {
    res.render('index', {errors: errors});
      } else {

     res.render('index', {results: results})
    }
  })

app.listen(3000);
