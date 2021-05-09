import Phaser from "phaser";

const PIPES_TO_RENDER = 4;

class BaseScene extends Phaser.Scene{
	
	constructor(key, config) {
		super(key);
		this.config = config;
		this.sceneCenter = [config.width / 2, config.height / 2];
		this.baseStyle = {fontSize: '32px', fill: '#FFF'};
	}

  create() {
    this.add.image(0, 0, 'sky').setOrigin(0);

		if (this.config.canGoBack) {
			const backButton = this.add.image(this.config.width - 10, this.config.height - 10, 'back')
				.setOrigin(1)
				.setScale(2)
				.setInteractive();

			backButton.on('pointerout', () => {
				this.scene.start('MenuScene');
			});	
		}
  }

	createMenu(menu, setupMenuEvents) {
		let lastMenuPositionY = 0;

		menu.forEach(menuItem => {
			const menuPosition = [this.sceneCenter[0], this.sceneCenter[1] + lastMenuPositionY];
			menuItem.textGO = this.add.text(...menuPosition, menuItem.text, this.baseStyle).setOrigin(0.5, 1)
			lastMenuPositionY += 42;
			setupMenuEvents(menuItem);
		});
	}
}

export default BaseScene;