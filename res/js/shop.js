shopState = {
	create:function() {

		this.coinText = this.game.add.text(20, 0, "", textStyle);
		this.killText = this.game.add.text(120, 0, "", textStyle);
		this.bikeText = this.game.add.text(220, 0, "", textStyle);

		this.game.add.text(20, this.game.height - 20, "Press S to go back to the game!", textStyle);

		//items

		//baseball
		this.baseballButton = this.game.add.button(20, 20, "button", this.baseball);
		this.game.add.text(20, 20, "Baseball", textStyle);
		this.game.add.text(20, 40, "Price: 25", textStyle);

		//bat
		this.baseballButton = this.game.add.button(178, 20, "button", this.bat);
		this.game.add.text(178, 20, "Bat", textStyle);
		this.game.add.text(178, 40, "Price: 45", textStyle);

		//knife
		this.baseballButton = this.game.add.button(336, 20, "button", this.knife);
		this.game.add.text(336, 20, "Knife", textStyle);
		this.game.add.text(336, 40, "Price: 80", textStyle);

		//axe
		this.axeButton = this.game.add.button(20, 94, "button", this.axe);
		this.game.add.text(20, 94, "Axe", textStyle);
		this.game.add.text(20, 114, "Price: 100", textStyle);

		//upgrade ride
		this.rideButton = this.game.add.button(20, 500, "button", this.upgrade);
		this.rideTitle = this.game.add.text(20, 500, "", textStyle);
		this.ridePrice = this.game.add.text(20, 520, "", textStyle); 
	},

	update:function() {
		this.coinText.setText("Coins:" + playState.coins);
		this.killText.setText("Kills:" + playState.kills);
		this.bikeText.setText("Ride: " + playState.ride);


		if (this.input.keyboard.isDown(Phaser.Keyboard.S)) {
			game.state.start("play");
		};

		//for updating the text on the upgrade button
		if (playState.ride == "Standard Bike") {
			this.rideTitle.setText("Racing Bike");
			this.ridePrice.setText("Price: 65");
		};
	},

	//upgrading the ride
	upgrade:function() {
		if (playState.ride == "Standard Bike" && playState.coins >= 65) {
			playState.coins -= 65;
			playState.ride = "Racing Bike";
		};
	},

	//for buying stuff

	//baseball
	baseball:function() {
		if (playState.item != "baseball" && playState.coins >= 25) {
			playState.coins -= 25;
			playState.item = "baseball";
		};
	},

	//bat
	bat:function() {
		if (playState.item != "bat" && playState.coins >= 45) {
			playState.coins -= 45;
			playState.item = "bat"
		};
	},

	//knife
	knife:function() {
		if (playState.item != "knife" && playState.coins >= 80) {
			playState.coins -= 80;
			playState.item = "knife"
		};
	},

	//axe
	axe:function() {
		if (playState.item != "axe" && playState.coins >= 100) {
			playState.coins -= 100;
			playState.item = "axe"
		};
	}
};