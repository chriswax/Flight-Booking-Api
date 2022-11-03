//const express = require('express');
//const router = express.Router();
const router  = require('express').Router();

const controller = require('../controllers/flightController');

router
.get('/', controller.getFlights)        //get all Flights
.post("/", controller.createFlight)  //post flight
.get("/:id", controller.getFlight) //gets specific flight
.put("/:id", controller.updateFlight)  //update specific flight
.delete("/:id", controller.deleteFlight);  //delete a flight

module.exports = router;

