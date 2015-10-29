'use strict';

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var button = new five.Button(5);
  var led = new five.Led(9);

  var turnOnLight = function() {
    if(led.isOn === true) {
      led.off();
    } else {
      led.on();
    }
  };

  button.on('press', turnOnLight);

});