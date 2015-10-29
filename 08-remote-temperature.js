'use strict';

var five = require('johnny-five');
var board = five.Board();
var dnode = require('dnode');

board.on('ready', function() {

  var tempInC = 'Sensor off';

  var tempSensor = new five.Sensor('A0');

  // Convert from voltage to C using TMP36 temperature sensor. Source: https://github.com/rwaldron/johnny-five/blob/f554993735d1bc6eb01f46501f72c71360cf840a/docs/sensor-temperature-tmp36.md
  var convertVoltageToC = function(voltage) {
    return ((voltage * 0.004882814) - 0.5) * 100;
  };

  tempSensor.on('ready', function() {
    tempInC = convertVoltageToC(tempSensor.value);
  });

  tempSensor.on('change', function() {
    tempInC = convertVoltageToC(tempSensor.value);
  });

  var server = dnode({
    getTemperature : function (cb) {
      cb(tempInC)
    }
  });
  server.listen(1337);

});


