//cooldown for items
cooldown = 0;

//for throwing items
itemThrow = function() {

	//the actual throwing itself
	if (playState.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {

		//baseball
		if (playState.item === "baseball" && cooldown == 0) {
			if (direct == "RIGHT") {
				var baseball = playState.items.create(playState.player.body.x + 40, playState.player.body.y + 20, "baseball");
				playState.game.physics.enable(baseball, Phaser.Physics.ARCADE);

				baseball.body.immovable = true;
        		baseball.body.allowGravity = false;
				baseball.body.velocity.x = 300;
				baseball.outOfBoundsKill = true;

				playState.player.animations.play("throwRight");

				cooldown = 200;
			} else if (direct == "LEFT" && cooldown == 0) {
				var baseball = playState.items.create(playState.player.body.x, playState.player.body.y + 20, "baseball");
				playState.game.physics.enable(baseball, Phaser.Physics.ARCADE);

				baseball.body.immovable = true;
        		baseball.body.allowGravity = false;
				baseball.body.velocity.x = -300;
				baseball.outOfBoundsKill = true;

				playState.player.animations.play("throwLeft");

				cooldown = 200;
			};
		} else if (playState.item === "bat" && cooldown == 0) {
			if (direct == "RIGHT") {
				var bat = playState.items.create(playState.player.body.x + 40, playState.player.body.y + 20, "bat");
				bat.animations.add("right", [1], 1, false);
				bat.animations.play("right");
				playState.game.physics.enable(bat, Phaser.Physics.ARCADE);

				bat.body.immovable = true;
				bat.body.allowGravity = false;
				bat.body.velocity.x = 350;
				bat.outOfBoundsKill = true;

				playState.player.animations.play("throwRight");

				cooldown = 190;
			} else if (direct == "LEFT") {
				var bat = playState.items.create(playState.player.body.x, playState.player.body.y + 20, "bat");
				bat.animations.add("left", [0], 1, false);
				bat.animations.play("left");
				playState.game.physics.enable(bat, Phaser.Physics.ARCADE);

				bat.body.immovable = true;
				bat.body.allowGravity = false;
				bat.body.velocity.x = -350;
				bat.outOfBoundsKill = true;

				playState.player.animations.play("throwLeft");

				cooldown = 190;
			};
		} else if (playState.item === "knife" && cooldown == 0) {
			if (direct == "RIGHT") {
				var knife = playState.items.create(playState.player.body.x + 40, playState.player.body.y + 20, "knife");
				knife.animations.add("right", [1], 1, false);
				knife.animations.play("right");
				playState.game.physics.enable(knife, Phaser.Physics.ARCADE);

				knife.body.immovable = true;
				knife.body.allowGravity = false;
				knife.body.velocity.x = 360;
				knife.outOfBoundsKill = true;

				playState.player.animations.play("throwRight");

				cooldown = 175;
			} else if (direct == "LEFT") {
				var knife = playState.items.create(playState.player.body.x, playState.player.body.y + 20, "knife");
				knife.animations.add("left", [0], 1, false);
				knife.animations.play("left");
				playState.game.physics.enable(knife, Phaser.Physics.ARCADE);

				knife.body.immovable = true;
				knife.body.allowGravity = false;
				knife.body.velocity.x = -360;
				knife.outOfBoundsKill = true;

				playState.player.animations.play("throwLeft");

				cooldown = 175;
			};
		} else if (playState.item === "axe" && cooldown == 0) {
			if (direct == "RIGHT") {
				var axe = playState.items.create(playState.player.body.x + 40, playState.player.body.y + 20, "axe");
				axe.animations.add("spin", [0, 1, 2, 3], 6, true);
				axe.animations.play("spin");
				playState.game.physics.enable(axe, Phaser.Physics.ARCADE);

				axe.body.immovable = true;
				axe.body.allowGravity = false;
				axe.body.velocity.x = 280;
				axe.outOfBoundsKill = true;

				playState.player.animations.play("throwRight");

				cooldown = 150;
			} else if (direct == "LEFT") {
				var axe = playState.items.create(playState.player.body.x + 40, playState.player.body.y + 20, "axe");
				axe.animations.add("spin", [0, 1, 2, 3], 6, true);
				axe.animations.play("spin");
				playState.game.physics.enable(axe, Phaser.Physics.ARCADE);

				axe.body.immovable = true;
				axe.body.allowGravity = false;
				axe.body.velocity.x = -280;
				axe.outOfBoundsKill = true;

				playState.player.animations.play("throwRight");

				cooldown = 150;
			};
 		};
 	};

	//checking the cooldown
	if (cooldown != 0) {
		cooldown--;
	};
};