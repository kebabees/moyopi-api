var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var myGlobal = require('./../common/global');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var outputObj;
  myGlobal.events = myGlobal.events || [];
  console.log("-------------------req query start");
  console.log(">>>get!!!");
  console.log(req.query);
  console.log(myGlobal);
  console.log("-------------------req query end");

  if(req.query.event_id){
    outputObj = myGlobal.events.filter(function(event) {
      if(event.event_id == req.query.event_id){
        return true;
      };
      return false
    })[0];
  } else {
    outputObj = myGlobal.events;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(outputObj));
});

router.post('/', function(req, res, next) {
  var inputObj;
  myGlobal.events = myGlobal.events || [];

  // res.setHeader('Content-Type', 'text/plain');
  console.log("-------------------req body start");
  console.log(">>>post!!!");
  console.log(req.body);
  console.log("-------------------req body end");


  if( req.body.event_name
    && req.body.event_date
    && req.body.event_place
    && req.body.event_capacity
    && req.body.event_fee
    && req.body.created_by
  ){
    inputObj = {
      event_id      : myGlobal.events.length + 1,
      event_name    : req.body.event_name,
      event_date    : req.body.event_date,
      event_place   : req.body.event_place,
      event_capacity: req.body.event_capacity,
      event_fee     : req.body.event_fee,
      created_by    : req.body.created_by
    };

    myGlobal.events.push(inputObj);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(inputObj));
  } else {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({error_id: 1, error_message: "check form data!!"}));
  }
});

module.exports = router;
