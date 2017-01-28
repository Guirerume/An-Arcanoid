
var Ball = function (x, y, height, width, speed) {

	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.speed = speed;
	this.dirx = -1;
	this.diry = -1;
	this.mod = 0;

	this.moviment = function(player){
		if(this.x + this.width >= player.x && this.x <= player.x + player.width && this.y >= player.y){
			this.diry = -1;
		}else if(this.x <= 0){
			this.dirx = 1;
		}else if(this.x + this.width >= canvas.width){
			this.dirx = -1;
		}else if(this.y <= 0){
			this.diry = 1;
		}

		this.x += (this.speed + this.mod) * this.dirx;
		this.y += (this.speed + this.mod) * this.diry;

		return this.exceedUser();
	};

	this.exceedUser = function(){
		if(this.y + this.height - (this.height / 2) >= canvas.height){
			return true;
		}
		return false;
	};
};


function movebola(){
	if(bola.y + bola.altura >= esquerda.y && bola.y <= esquerda.y + esquerda.altura && bola.x <= esquerda.x + esquerda.largura){
		bola.dirx = 1;
		bola.mod += 0.2;

	}else if(bola.y + bola.altura >= direita.y && bola.y <= direita.y + direita.altura && bola.x + bola.largura >= direita.x){
		bola.dirx = -1;
		bola.mod += 0.2;
	}

	if(bola.y <= 0){
		bola.diry = 1;
	}else if(bola.y + bola.altura >= canvas.height){
		bola.diry = -1;
	}

	bola.x += (bola.speed + bola.mod) * bola.dirx;
	bola.y += (bola.speed + bola.mod) * bola.diry;

	if(bola.x < esquerda.x + esquerda.largura -15){
		newgame("player 2");
	}else if(bola.x + bola.largura > direita.x + 15){
		newgame("player 1");
	}
}

function newgame(winner){
	if(winner == "player 1"){
		esquerda.score++;
	}else{
		direita.score ++;
	}

	esquerda.y = canvas.height / 2 - esquerda.altura / 2;
	direita.y = esquerda.y;
	bola.y = canvas.height / 2 - bola.altura / 2;
	bola.x = canvas.width / 2 - bola.largura/ 2;
	bola.mod = 0;
};