playState = {

	//creates everything
	create:function() {
		this.background = game.add.tileSprite(0, 0, 600, 540, "BG");

		switch (this.ride) {
			case "Standard Bike":
				this.player = game.add.sprite(this.game.width / 2, this.game.width - 60 - 100, "bike");
				break;
			case "Racing Bike":
				this.player = game.add.sprite(this.game.width / 2, this.game.width - 60 - 100, "bikeRacing");
				break;
		};
		
		this.ground = game.add.sprite(0, this.game.height - 60, "ground");

		//groups
		this.robots = this.game.add.group();
		this.droids = this.game.add.group();
		this.shields = this.game.add.group();
		this.turrets = this.game.add.group();
		this.lazers = this.game.add.group();

		this.items = this.game.add.group();

		//player animations
		this.player.animations.add("left", [0, 1], 5, true);
		this.player.animations.add("right", [7, 6], 5, true);
		this.player.animations.add("jumpLeft", [2], 1, false);
		this.player.animations.add("jumpRight", [5], 1, false);
		this.player.animations.add("throwLeft", [3], 1, false);
		this.player.animations.add("throwRight", [4], 1, false);
		this.player.animations.add("stopLeft", [1], 1, false);
		this.player.animations.add("stopRight", [6], 1, false);

		//physics
		this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.game.physics.enable(this.ground, Phaser.Physics.ARCADE);

		//player physics
		this.player.body.immovable = false;
        this.player.body.allowGravity = true;
        this.player.body.collideWorldBounds = true;

        //movement variables for player
        switch (this.ride) {
        	case "Standard Bike":
        		this.playerSpeed = 200;
        		this.playerAcceleration = 100;
        		this.playerDrag = 100;
        		this.gravity = 800;
        		break;
        	case "Racing Bike":
        		this.playerSpeed = 240;
       			this.playerAcceleration = 130;
        		this.playerDrag = 120;
        		this.gravity = 725;
        		break
        };
        

        this.player.body.drag.setTo(this.playerDrag, 0);
        this.player.body.maxVelocity.setTo(this.playerSpeed, this.playerSpeed);

        //ground physics
		this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        //checks which direction the player is facing
        direct = "RIGHT";

        //gravity
        game.physics.arcade.gravity.y = this.gravity;

        //timer
        this.timer = this.game.time.events.loop(2000, addMore, this); 

        //key capturing
		this.game.input.keyboard.addKeyCapture([
			Phaser.Keyboard.UP,
			Phaser.Keyboard.DOWN,
			Phaser.Keyboard.LEFT,
			Phaser.Keyboard.RIGHT,
			Phaser.Keyboard.SPACEBAR]);


		//text

		//kills text
		this.killText = this.game.add.text(20, 20, "", textStyle);

		//item text
		this.itemText = this.game.add.text(20, 40, "", textStyle);

		//coins text
		this.coinText = this.game.add.text(20, 60, "", textStyle);

		//bike text
		this.bikeText = this.game.add.text(20, 80, "", textStyle);

		//shop text
		this.game.add.text(100, 20, "Press S to go to the shop!", textStyle);
	},

	//updates the game
	update:function() {
		//updates text 
		this.killText.setText("Kills: " + this.kills);
		this.itemText.setText("Item: " + this.item);
		this.coinText.setText("Coins:" + this.coins);
		this.bikeText.setText("Ride: " + this.ride);

		//collisions
    	this.game.physics.arcade.collide(this.player, this.ground);

    	this.game.physics.arcade.collide(this.robots, this.ground);
    	this.game.physics.arcade.collide(this.droids, this.ground);
    	this.game.physics.arcade.collide(this.shields, this.ground);
    	this.game.physics.arcade.collide(this.turrets, this.ground);

    	keyPress();

    	//overlaps
    	game.physics.arcade.overlap(this.player, this.robots, hitRobot, null, this);
    	game.physics.arcade.overlap(this.player, this.droids, hitDroid, null, this);
    	game.physics.arcade.overlap(this.player, this.shields, hitShield, null, this);
    	game.physics.arcade.overlap(this.player, this.turrets, hitTurret, null, this);
    	game.physics.arcade.overlap(this.player, this.lazers, lazerPerson, null, this);

    	game.physics.arcade.overlap(this.items, this.robots, projectileRobot, null, this);
    	game.physics.arcade.overlap(this.items, this.droids, projectileDroid, null, this);
    	game.physics.arcade.overlap(this.items, this.shields, projectileShield, null, this);
    	game.physics.arcade.overlap(this.items, this.turrets, projectileTurret, null, this);
	}
};