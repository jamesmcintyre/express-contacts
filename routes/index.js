var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

// var datapath = path.join(__dirname, '../data/');

/* GET home page. */
router.get('/', function(req, res, next) {

  var contactsArray = [];
    fs.readFile('./data/data.json', function(err, data) {
      if(err) {
        console.log('error on read of data.jason')
        return res.status(400).send('someting wenn wrong mr');
      }
      contactsArray  = JSON.parse(data);
      // console.log('result of data.json read' + arr);
      console.log(contactsArray);
      res.render('index', {contactsArr: contactsArray});
    });





});

module.exports = router;
