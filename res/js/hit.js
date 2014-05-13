//when a player hits the enemies

//robots
hitRobot = function(player, robot) {
	if (this.input.keyboard.isDown(Phaser.Keyboard.UP) || this.input.keyboard.justPressed(Phaser.Keyboard.UP)) {
		robot.kill();
		this.kills++;
		this.coins++;
	} else {
		game.state.start("menu");
	};
};

//droids
hitDroid = function(player, droid) {
	if (this.input.keyboard.isDown(Phaser.Keyboard.UP) || this.input.keyboard.justPressed(Phaser.Keyboard.UP)) {
		droid.kill();
		this.kills++;
		this.coins += 2;
	} else {
		game.state.start("menu");
	};
};

//shields
hitShield = function(player, shield) {
	if (this.input.keyboard.isDown(Phaser.Keyboard.UP) || this.input.keyboard.justPressed(Phaser.Keyboard.UP)) {
		shield.kill();
		this.kills++;
		this.coins += 3;
	} else {
		game.state.start("menu");
	};
};

//turrets
hitTurret = function(player, turret) {
	if (this.input.keyboard.isDown(Phaser.Keyboard.UP) || this.input.keyboard.justPressed(Phaser.Keyboard.UP)) {
		turret.kill();
		this.kills++;
		this.coins += 4;
	} else {
		game.state.start("menu");
	};
};




//when something hits the enemies

//robots
projectileRobot = function(item, robot) {
	item.kill();

	robot.kill();
	this.kills++;

	this.coins++;
};

//droids
projectileDroid = function(item, droid) {
	item.kill();
	droid.kill();

	this.kills++;
	this.coins += 2;
};

//shields
projectileShield = function(item, shield) {
	shield.HP--;

	item.kill();
	if (shield.HP == 0) {
		shield.kill();

		this.coins += 3;
	};
};

//turrets
projectileTurret = function(item, turret) {
	turret.kill();

	item.kill();

	this.kills++;
	this.coins += 4;
};

//lazer and people
lazerPerson = function(person, lazer) {
	game.state.start("menu");
	lazer.kill();
};