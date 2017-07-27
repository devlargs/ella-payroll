var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var variables = require('../variables');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Z1x2c3V42015',
  database : 'esl'
});

connection.connect();

console.log(variables)

router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM users', function(err, response){
    res.send({
        response: response
    })
  })
});


module.exports = router;