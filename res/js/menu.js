//THE MENU STATE
menuState = {
	create:function() {
		var bg = game.add.sprite(200, 200, "BG_MENU");

		this.game.add.text(20, 0, "Robot Apocalypse", bigTextStyle);

		this.playButton = this.game.add.button(20, 50, "button", this.playBtn);
		this.game.add.text(20, 50, "Play", textStyle);

		playState.kills = 0;
		playState.coins = 0;
		playState.item = "axe";
		playState.ride = "Standard Bike";

		this.controlsButton = this.game.add.button(20, 150, "button", this.ctrlBtn);
		this.game.add.text(20, 150, "Help", textStyle);
	},

	update:function() {

	},

	//play button
	playBtn:function() {
		game.state.start("play");
	},

	//for help
	ctrlBtn:function() {
		game.state.start("help")
	}

};

//THE HELP STATE
helpState = {
	create:function() {
		var bg = game.add.sprite(200, 200, "BG_MENU");
		this.game.add.text(20, 0, "Robot Apocalypse", bigTextStyle);

		this.game.add.text(20, 50, "WASD - Move and jump", textStyle);
		this.game.add.text(20, 70, "SPACEBAR - Shoot your item", textStyle);
		this.game.add.text(20, 90, "S - Enter and exit the shop", textStyle);
		this.game.add.text(20, 110, "Hold jump (W) to kill enemies or shoot your item to kill them.", textStyle);
		this.game.add.text(20, 130, "Each item has a cool down before you can use it", textStyle);
		this.game.add.text(20, 150, "so you can't spam spacebar all the time.", textStyle);
		this.game.add.text(20, 170, "The more kills you get, more enemies will appear.", textStyle);

		this.controlsButton = this.game.add.button(20, 190, "button", this.menuBtn);
		this.game.add.text(20, 190, "Menu", textStyle);
	}, 

	update:function() {

	},

	//for going back to the menu
	menuBtn:function() {
		game.state.start("menu");
	}
};