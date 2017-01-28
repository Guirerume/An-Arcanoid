

var drawBall = function (ball, color) {
	console.log("chamou");
	ctx.fillStyle = color;
	ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
};

var drawPlayer = function (player, color)
{
	ctx.fillStyle = color;
	ctx.fillRect(player.x, player.y, player.width, player.height);

};