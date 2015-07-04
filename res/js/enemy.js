//for adding enemies and stuff
addMore = function() {
	var x;
	var velX;

	//decides which side the robots will spawn in
	if (Math.random() > 1/2 ) {
		x = playState.game.width - 10;
		velX = -50;
	} else {
		x = 10;
		velX = 50;
	};

	//robots
	var robot = playState.robots.create(x, playState.game.height - 300, "robot");
	playState.game.physics.enable(robot, Phaser.Physics.ARCADE);

    robot.body.velocity.x = velX;
    robot.outOfBoundsKill = true;

    //droids

    //will spawn after 10 kills and will spawn around half of the time
    if (this.kills >= 10 && Math.random() > 1/2) {
    	if (Math.random() > 1/2 ) {
			x = playState.game.width - 10;
			velX = -80;
		} else {
			x = 10;
			velX = 80;
		};


    	var droid = playState.droids.create(x, playState.game.height - 300, "droid");
    	playState.game.physics.enable(droid, Phaser.Physics.ARCADE);

    	droid.body.velocity.x = velX;
    	droid.outOfBoundsKill = true;
    };

    //shields

    //will spawn after 45 kills and will spawn around a quarter of the time
    if (this.kills >= 40 && Math.random() > 3/4) {
    	if (Math.random() > 1/2) {
    		x = playState.game.width - 10;
    		velX = -30;
    		var direction = "left";
    	} else {
    		x = 10;
    		velX = 30;
    		var direction = "right";
    	};

    	var shield = playState.shields.create(x, playState.game.height - 300, "shield");
    	shield.animations.add("left", [0], 1, false);
    	shield.animations.add("right", [1], 1, false);

    	shield.animations.play(direction);

    	shield.HP = 2;

    	playState.game.physics.enable(shield, Phaser.Physics.ARCADE);

    	shield.body.velocity.x = velX;
    	shield.outOfBoundsKill = true;
    };

    //turrets

    //will spawn after 50 kills and will spawn a quarter of the time
    if (this.kills >= 50 && Math.random() > 3/4) {
    	if (Math.random() > 1/2) {
    		x = playState.game.width - 10;
    		var direction = "left";
    	} else {
    		x = 10;
    		var direction = "right";
    	};

        //for shooting 
        shoot = function() {
            if (direction == "right" && turret.alive == true) {
                var lazer = playState.lazers.create(turret.body.x + 20, turret.body.y + 20, "turretLazer");
                playState.game.physics.enable(lazer, Phaser.Physics.ARCADE);

                lazer.body.velocity.x = 140;
                lazer.body.immovable = true;
                lazer.body.allowGravity = false;
                lazer.outOfBoundsKill = true;
            } else if (direction == "left" && turret.alive == true) {
                var lazer = playState.lazers.create(turret.body.x, turret.body.y + 20, "turretLazer");
                playState.game.physics.enable(lazer, Phaser.Physics.ARCADE);

                lazer.body.velocity.x = -140;
                lazer.body.immovable = true;
                lazer.body.allowGravity = false;
                lazer.outOfBoundsKill = true;
            };
        };

    	var turret = playState.turrets.create(x, playState.game.height - 300, "turret");
    	turret.animations.add("left", [0], 1, false);
    	turret.animations.add("right", [1], 1, false);

    	turret.animations.play(direction);

    	playState.game.physics.enable(turret, Phaser.Physics.ARCADE);

    	turret.body.velocity.x = 0;
    	turret.outOfBoundsKill = true;

        var turretShoot = this.game.time.events.loop(5000, shoot, this);
    };
}