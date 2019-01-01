var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false});
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req,res,next) {
  console.log('Request Url: ' + req.url);
  next();
});

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/person/:id', function(req, res) {
  res.render('person', { ID: req.params.id, Qstr: req.query.qstr});
});

app.post('/person', urlencodedParser, function(req, res) {
  res.send('Thank You');
  console.log(req.body.firstName);
  console.log(req.body.lastName);
});

app.get('/api/person/:id', function(req,res) {
  // get that data from database
  res.json({ firstName: 'John', lastName:'Doe'});
});

app.post('/api/person', jsonParser, function(req, rest) {
  // save to the database

});

app.delete('/api/person/:id', function(req, res) {
  // delete from the database
  
});

app.listen(port);