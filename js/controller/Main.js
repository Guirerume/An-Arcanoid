
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var keyboard = {}
var ball = new Ball(canvas.width / 2 - 15, canvas.height - 60, 30, 30, 1);
var player = new Player(canvas.width /2 - 50, 370, 20, 100, 5);

document.addEventListener("keydown", function(e)
{
	keyboard[e.keyCode] = true;
}, false);

document.addEventListener("keyup", function(e)
{
	delete keyboard[e.keyCode];	
}, false);

function play() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	var update = ball.moviment(player);
	var updatePlayer = player.movement(keyboard);
	drawBall(ball, "#00ff00");
	drawPlayer(player, "blue");	

	if(!update){

		setTimeout(play, 7);
	}	
}

play();



