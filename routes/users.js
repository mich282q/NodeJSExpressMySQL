var express = require('express');
var mysql = require('mysql2');

var router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '8305'
});

connection.query('USE michael_trans');

router.get('/', function(req, res){
  connection.query('SELECT * FROM person', function(err, rows){
    
    rows.map((row) => {row.lname;});

    res.render('world', {
      title: 'person in the michael_trans.sql database',
      world : rows,
      raw: JSON.stringify(rows)
    });
  });
});

router.get('/', function(req, res){
  connection.query('SELECT * FROM person', function(err, rows){
    
    rows.map((row) => {row.fname;});

    res.render('world', {
      title: 'person in the michael_trans.sql database',
      world : rows,
      raw: JSON.stringify(rows)
    });
  });
});

router.get('/', function(req, res){
  connection.query('SELECT * FROM person', function(err, rows){
    
    rows.map((row) => {row.age;});

    res.render('world', {
      title: 'person in the michael_trans.sql database',
      world : rows,
      raw: JSON.stringify(rows)
    });
  });
});

router.get('/rest', function(req, res){
  connection.query('SELECT * FROM person', function(err, rows){
    var world = {person: rows} 
    res.send(world);
  });
});

module.exports = router;



