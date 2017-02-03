
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var ball = new Ball(canvas.width / 2 - 15, canvas.height - 60, 20, 20, 1);
var player = new Player(canvas.width /2 - 50, 370, 20, 100, 5);
var blocks = new Array();
var start = false;
var pause = false;
var testLevel = 1;

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
	var insertX = canvas.width / 2;
	var qty = testLevel * 8;
	var insertY = canvas.height / 2;
	var distance = 35;
	var toLeft = false;

	if(qty > 56){
		insertY = 10;
	}
	else
	{
		insertY = 150;
	}

	blocks.push(new Block(insertX, insertY, 15, 25));	
	for(var count = 1; count < qty; count ++)
	{					
		console.log("entrei");
		if(count == blocks.length)
		{
			insertX += distance - 3;
			blocks.push(new Block(insertX, insertY, 15, 25));
			console.log("delete me");
		}	
		else if(blocks[count].x != blocks[count-1].x && blocks[count].y == blocks[count-1].y)
		{
			blocks.push(new Block(insertX, insertY, 15, 25));
			console.log("Diferente");
			console.log(blocks[count].x);
			console.log(blocks[i].x);
		}				
	    else{
			insertX += distance - 3;					
			console.log("eae");
	   	}
		console.log(blocks[count-1].x);
		console.log(blocks[count].x);
	}	
		

		/*if(insertX <= 550){		
			blocks.push(new Block(insertX, insertY, 15, 25));						
		}
		else{
			insertX = 0 + distance;
			insertY += 25;
			blocks.push(new Block(insertX, insertY, 15, 25));
		}*/
	
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



