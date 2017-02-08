var testLevel = 15;

var eventKeyboard = function (keyboard) {
	document.addEventListener("keydown", function(e){
		keyboard[e.keyCode] = true;
	}, false);

	document.addEventListener("keyup", function(e){
		delete keyboard[e.keyCode];	
	}, false);
};

var generateBlocks = function(blocks){
	var insertX = 20;
	var qty = testLevel * 10;
	var insertY = canvas.height / 2;
	var distance = 30;
	var max = 580;
	var tipsLines = 0;

	blocks.push(new Block(insertX, insertY, 15, 25));	
	for(var count = 1; count < qty; count ++)
	{					
		insertX += distance;
		if(insertX >= max)
		{
			insertY -= 20;
			insertX = 20;
			tipsLines += 20;
			insertX += tipsLines;
			max -= 20;
			blocks.push(new Block(insertX, insertY, 15, 25));
		}				
    	else
    	{
			blocks.push(new Block(insertX, insertY, 15, 25));			
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