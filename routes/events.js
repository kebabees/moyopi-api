var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  // if(!req.query.name) {
  //   res.sendStatus('NG, parameter "scene" is required')
  // } else {
    var scene = req.query.name;
    var updateSql = "INSERT INTO live (started_at, status, scene) VALUES (now(), 'started', '"+scene+"')";
    console.log('live')
    console.log(scene)
    console.log(updateSql)
    myGlobal.connection.query(updateSql, function (err, rows) {
      if (!err) {
        res.send('OK');
      } else {
        res.send(err);
      }
    });
  // }

  res.send('events!');
});

module.exports = router;
