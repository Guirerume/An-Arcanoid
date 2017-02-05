
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var ball = new Ball(canvas.width / 2 - 10, canvas.height - 50, 20, 20, 1);
var player = new Player(canvas.width /2 - 50,canvas.height - 30, 20, 100, 5);
var blocks = new Array();
var start = false;

var keyboard = {};
eventKeyboard(keyboard);

generateBlocks(blocks);

function play(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);		
	
	if(!start){
		init();
		startBall(keyboard);
	}
	else{
		var update = ball.moviment(player);
		var updatePlayer = player.moviment(keyboard);
		ball.blockColission(blocks);
		drawBall(ball, "#00ff00");
		drawPlayer(player, "blue");
		drawBlock(blocks, "red");
	}
}
setInterval(play, 10);



