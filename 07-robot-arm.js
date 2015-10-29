'use strict';

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {

  // Scale to same as servo. 0 - 179.
  var potentiometer = new five.Sensor('A2').scale(0, 179);
  var servo = new five.Servo(9);

  potentiometer.on('change', function() {
    servo.to(potentiometer.value);
  });

});