
var eventKeyboard = function (keyboard) {
	document.addEventListener("keydown", function(e){
		keyboard[e.keyCode] = true;
	}, false);

	document.addEventListener("keyup", function(e){
		delete keyboard[e.keyCode];	
	}, false);
};

var generateBlocks = function(blocks){
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
};

var startBall = function(keyboard) {
	if(32 in keyboard && !start){
		console.log("start");
		start = true;
	}
};

var init = function(){
	drawBlock(blocks, "red");
	drawBall(ball, "#00ff00");
	drawPlayer(player, "blue");
	ball.x = player.x + 40;
	player.movement(keyboard);
};