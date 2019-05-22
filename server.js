var express = require('express');

var app = express();

console.log("hello world");


var server = app.listen(2000);

app.use(express.static('public'));

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	
	console.log("new connection created: " + socket.id);
	
	
		socket.on('mouseDrag', mouseMsg);
		
		function mouseMsg(data) {
			
			console.log("x: "+ data.x + " y: " + data.y);
			
			socket.broadcast.emit('mouseDrag', data);

			
		}
		

	
	
}


