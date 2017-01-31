

var drawBall = function (ball, color) {
	ctx.fillStyle = color;
	ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
};

var drawPlayer = function (player, color)
{
	ctx.fillStyle = color;
	ctx.fillRect(player.x, player.y, player.width, player.height);

};

var drawBlock = function (block_Array, color)
{	
	for(var i in block_array){
		if(i.status)
		{
			ctx.fillStyle = color;
			ctx.fillRect(block.x, block.y, block.width, block.height);
		}
	}
	
}
