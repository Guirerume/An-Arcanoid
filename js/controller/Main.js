
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var ball = new Ball(canvas.width / 2 - 15, canvas.height - 60, 20, 20, 1);
var player = new Player(canvas.width /2 - 50, 370, 20, 100, 5);
var blocks = new Array();
var start = false;
var pause = false;

var keyboard = {};
eventKeyboard(keyboard);

var startBall = function(keyboard) {
	if(13 in keyboard){
		if(!start){
			start = true;
		}else if(!pause){
			pause = true;
		}else if(pause){
			pause = false;
		}
	}
};

function generateBlocks(){
	var insertX = 0;
	var x = 380;
	var y = 120;
	var insertY = canvas.height / 2 - y;
	var distance = 45;
	for(var i = 1; i <= 20; i++){		
		insertX += distance;

		if(insertX < 400){		
			blocks.push(new Block(insertX, insertY, 20, 20));								
		}
		else{
			blocks.push(new Block(insertX - x, insertY + 50, 20, 20));
		}
	}
}

generateBlocks();

function play(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);		
	
	if(!start){
		ball.x = player.x + 35;
		var updatePlayer = player.movement(keyboard);
		drawBlock(blocks, "red");
		drawBall(ball, "#00ff00");
		drawPlayer(player, "blue");
		startBall(keyboard);		
		setTimeout(play, 7);
	}else if(!pause){
		var update = ball.moviment(player);
		var updatePlayer = player.movement(keyboard);
		ball.blockColision(blocks);
		drawBall(ball, "#00ff00");
		drawPlayer(player, "blue");
		drawBlock(blocks, "red");
		startBall(keyboard);
		if(!update){
			setTimeout(play, 7);
		}
	}else if(pause){
		drawBall(ball, "#00ff00");
		drawPlayer(player, "blue");
		drawBlock(blocks, "red");
		startBall(keyboard);
		setTimeout(play, 7);		
	}
}
play();



