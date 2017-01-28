
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var ball = new Ball(canvas.width / 2 - 15, canvas.height - 60, 30, 30, 1);
var player = new Player(canvas.width /2 - 50, 370, 20, 100, 10);



drawBall(ball, "#00ff00");
drawPlayer(player, "blue");