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
      if(event.eventId == req.query.event_id){
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

  inputObj = {
    eventId      : req.body.event_id,
    eventName    : req.body.event_name,
    eventDate    : req.body.event_date,
    eventPlace   : req.body.event_place,
    eventCapacity: req.body.event_capacity,
    eventFee     : req.body.event_fee,
    createdBy    : req.body.created_by
  };

  myGlobal.events.push(inputObj);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(inputObj));
});

module.exports = router;
