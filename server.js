const express = require('express')
var router = express.Router();
const bodyParser = require('body-parser')
var http=require('http');
var async=require('async');
var request=require('request');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var users = require('./users.js')
mongoose.connect("mongodb://localhost:27017/student",  function(err) {

    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');

    }
});


const app = express()
const port = 4000
app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin","*"); // restrict it to the required domain
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
	res.header('Server', ' ');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,enctype,authorization');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/v1/users',users);
// catch 404 and forward to error handler
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
