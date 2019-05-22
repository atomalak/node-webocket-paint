var socket;

function setup() {
	
	
	
	socket = io.connect("http://localhost:2000");
	
	
	createCanvas(640, 480);
	background(0);
	
	socket.on('mouseDrag', drawReturned );
	
	function drawReturned(data) {
			noStroke();

		ellipse(data.x, data.y, 10, 10);
	}
	
	
	
	
	
}

function mouseDragged() {
	noStroke();
	ellipse(mouseX, mouseY, 10, 10);
	
	var data = {
		x: mouseX,
		y: mouseY
	};
	
	socket.emit('mouseDrag', data);
	
}


function draw() {
	
	
}