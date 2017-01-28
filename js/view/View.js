

var drawBall = function (ball, color) {
	ctx.fillStyle = color;
	ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
};

var drawPlayer = function (player, color)
{
	ctx.fillStyle = color;
	ctx.fillRect(player.x, player.y, player.width, player.height);

};

var drawBlock = function (block, color)
{
	ctx.fillStyle = color;
	ctx.fillRect(block.x, block.y, block.width, block.height);
}
