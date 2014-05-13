//for keypress
keyPress = function() {
	if (playState.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
		playState.player.body.acceleration.x = -playState.playerAcceleration;
		playState.player.animations.play("left");

		playState.background.autoScroll(10, 0);

		direct = "LEFT";
	} else if (playState.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
		playState.player.body.acceleration.x = playState.playerAcceleration;
		playState.player.animations.play("right");

		playState.background.autoScroll(-10, 0);

		direct = "RIGHT";
	} else if (playState.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
		playState.player.body.velocity.x = 0

		if (direct == "LEFT") {
			playState.player.animations.play("stopLeft");
		} else {
			playState.player.animations.play("stopRight");
		};

	} else {
		playState.player.body.acceleration.x = 0;

		playState.background.autoScroll(0, 0);

		if (direct == "LEFT") {
			playState.player.animations.play("stopLeft");
		} else {
			playState.player.animations.play("stopRight");
		};
	};

	var onGround = playState.player.body.touching.down;

	if (onGround && playState.input.keyboard.justPressed(Phaser.Keyboard.UP)) {
		playState.player.body.velocity.y = -playState.playerSpeed;

			
	};

	//just for animations
	if (playState.input.keyboard.isDown(Phaser.Keyboard.UP)) {
		if (direct == "LEFT") {
			playState.player.animations.play("jumpLeft");
		} else {
			playState.player.animations.play("jumpRight");
		};
	};

	if (playState.input.keyboard.isDown(Phaser.Keyboard.S)) {
		game.state.start("shop");
	};

	//throwing items
	itemThrow();
};