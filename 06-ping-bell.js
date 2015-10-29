'use strict';

var five = require('johnny-five');
var board = new five.Board();
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.bind(1337);

board.on('ready', function() {

  var piezo = new five.Piezo(8);

  server.on("message", function (msg, rinfo) {
    console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);

    piezo.play({
      song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
      beats: 1 / 4,
      tempo: 100
    });

  });

});