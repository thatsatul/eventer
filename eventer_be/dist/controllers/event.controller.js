'use strict';

var _mockData = require('../constants/mock-data');

var eventModel = require('../models/event.model');

exports.events = function (req, res) {
  eventModel.getAllEvents(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(_mockData.eventsData);
    }
  });
};

exports.addEvent = function (req, res) {
  eventModel.addEvent(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
};