var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

// var datapath = path.join(__dirname, '../data/');

/* GET contacts listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/add', function(req, res, next) {
  res.render('addcontact');
});

router.post('/add', function(req, res, next){
  console.log(req.body);
  fs.readFile('./data/data.json', function(err, data) {
    if(err) return res.status(400).send(err);
    var arr = (JSON.parse(data) || []);
    var newContact = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      phone: req.body.phone,
      dateid: req.body.dateid
  };
  arr.push(newContact);
  fs.writeFile('./data/data.json', JSON.stringify(arr), function(err) {
    if(err) return res.status(400).send(err);
    res.send(newContact.dateid);
  });
});
});

router.get('/view/:contactKey', function(req, res, next){

  var arr = [];
  var retrievalKey = req.params.contactKey;
  console.log('the key from url: '+retrievalKey);
  var retrievedContact = {};

  console.log(req.body);

  fs.readFile('./data/data.json', function(err, data) {
    if(err){
      return res.status(400).send(err);
    }
    arr = (JSON.parse(data) || []);


  // var retrievalKey = req.body.key;
  console.log('retrieval key is: '+retrievalKey);
  console.log('arr is:'+arr);

  // var retrievedContact = arr.filter(function( obj ) {
  // return obj.dateid === retrievalKey;})[0];

  for (var i=0; i<arr.length; i++) {
    if (arr[i].dateid === retrievalKey){
      retrievedContact = arr[i];
    }
  }


  console.log(retrievedContact);

  console.log('retrieved contact:  '+JSON.stringify(retrievedContact));
  res.render('view', {retrievedContact: retrievedContact});
  });

});




module.exports = router;
