'use strict';

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function () {

  var servo = new five.Servo(9);

  servo.sweep([0,180]);

  var reset = function() {
    servo.stop();
    servo.center();
  };

  board.wait(3000, reset);

});