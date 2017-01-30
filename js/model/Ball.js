
var Ball = function (x, y, height, width, speed) {

	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.speed = speed;
	this.dirx = -1;
	this.diry = -1;
	this.mod = 0;
	this.direction = 1;

	this.blockColision = function(block){
		if(block.status){
			if(this.x + this.width >= block.x ){
				if(this.x <= block.x + block.width){
					if(this.y <= block.y + block.height){
						if(this.y + this.height >= block.y){
							if(this.direction == 1){
								this.diry = 1;
							}else if(this.direction == 2){
									this.dirx = -1;
								}else if(this.direction == 3){
										this.dirx = 1;
									}else{
										this.diry = -1;
								}
						}
					}
				}
			}
		}
	};

	this.moviment = function(player){
		if(this.x + this.width >= player.x && this.x <= player.x + player.width && this.y + this.height >= player.y){
			this.diry = -1;
			this.direction = 1;
		}else if(this.x <= 0){
			this.dirx = 1;
			this.direction = 2;
		}else if(this.x + this.width >= canvas.width){
			this.dirx = -1;
			this.direction = 3;
		}else if(this.y <= 0){
			this.diry = 1;
			this.direction = 4;
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