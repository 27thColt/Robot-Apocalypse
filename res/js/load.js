loadState = {
	//loads everything
	preload:function() {
		this.game.stage.backgroundColor = 0x538096;

		textStyle = {
			font: "15px Robot",
			fill: "#000000"
		};

		bigTextStyle = {
			font: "30px Robot",
			fill: "#000000"
		};

		game.load.spritesheet("bike", "assets/img/bikeStandard2x.png", 40, 50, 8);
		game.load.spritesheet("bikeRacing", "assets/img/bikeRacing2x.png", 40, 50, 8);

		game.load.image("ground", "assets/img/ground.png");
		game.load.image("button", "assets/img/btn2x.png");

		game.load.image("robot", "assets/img/enemies/robot2x.png");
		game.load.image("droid", "assets/img/enemies/droid2x.png");
		game.load.spritesheet("shield", "assets/img/enemies/shield2x.png", 24, 30, 2);
		game.load.spritesheet("turret", "assets/img/enemies/turret2x.png", 20, 40, 2);
		game.load.image("turretLazer", "assets/img/enemies/turretLazer.png");

		game.load.image("baseball", "assets/img/items/baseball.png");
		game.load.spritesheet("bat", "assets/img/items/baseballBat.png", 25, 7, 2);
		game.load.spritesheet("knife", "assets/img/items/knife.png", 19, 8, 2);
		game.load.spritesheet("axe", "assets/img/items/axe.png", 23, 23, 4);

		game.load.image("BG", "assets/img/bg.png");
		game.load.image("BG_MENU", "assets/img/menuBG.png");
	},

	create:function() {
		game.state.start("menu")
	}
};