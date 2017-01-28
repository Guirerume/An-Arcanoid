

var drawBall = function (ball, color) {
	console.log("chamou");
	ctx.fillStyle = color;
	ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
};