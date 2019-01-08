var express = require('express');
var router = express.Router();
var eventController=require('../controllers/event.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is restapi path');
});

router.get('/events', eventController.events);

module.exports = router;
