import Phaser from "phaser";

const PIPES_TO_RENDER = 4;

class PreloadScene extends Phaser.Scene{
	
	constructor() {
		super('PreloadScene');
	}

  preload() {
    this.load.image('sky', 'assets/sky.png');
		this.load.spritesheet('bird', 'assets/birdSprite.png',{
			frameWidth: 16,
			frameHeight: 16
		});
		this.load.image('pipe', 'assets/pipe.png');
		this.load.image('pause', 'assets/pause.png');
		this.load.image('back', 'assets/pause.png');
  }
  
  create() {
    this.scene.start('MenuScene');
  }
}

export default PreloadScene;