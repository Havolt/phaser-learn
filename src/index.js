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
    this.add.image(400, 300, "sky");
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "Mark Game",
  width: 1080,
  height: 720,
  scene: MyGame,
};

const game = new Phaser.Game(config);
