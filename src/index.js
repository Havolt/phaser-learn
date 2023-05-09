import Phaser from "phaser";
import skyImg from "./assets/sky.png";
import groundImg from "./assets/platform.png";
import starImg from "./assets/star.png";
import bombImg from "./assets/bomb.png";
import dudeImg from "./assets/dude.png";

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image("sky", skyImg);
    this.load.image("ground", groundImg);
    this.load.image("star", starImg);
    this.load.image("bomb", bombImg);
    this.load.spritesheet("dude", dudeImg, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    // Create sky
    this.add.image(400, 300, "sky");

    // Create platforms
    const platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, "ground").setScale(2).refreshBody();

    platforms.create(600, 400, "ground");
    platforms.create(50, 250, "ground");
    platforms.create(750, 220, "ground");

    // Player Creation
    const player = this.physics.add.sprite(100, 450, "dude");

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    // Add physics collision
    this.physics.add.collider(player, platforms);
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "Mark Game",
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: MyGame,
};

const game = new Phaser.Game(config);
