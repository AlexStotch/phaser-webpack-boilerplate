import BaseScene from './BaseScene';

const PIPES_TO_RENDER = 4;

class MenuScene extends BaseScene{
  
  constructor(config) {
    super('PauseScene', config);

    this.menu = [
      {scene: 'PlayScene', text: 'Continue'},
      {scene: 'MenuScene', text: 'Exit'}
    ]
  }
  
  create() {
    super.create(); 
    super.createMenu(this.menu, this.setupMenuEvents.bind(this));
  }

  setupMenuEvents(menuItem) {
    const textGO = menuItem.textGO;
    textGO.setInteractive();
    textGO.on('pointerover', () => {
      textGO.setStyle({fill: '#ff0'})
    });
    
    textGO.on('pointerout', () => {
      textGO.setStyle({fill: '#FFF'})
    });
    
    textGO.on('pointerup', () => {
      if (menuItem.scene && menuItem.text === 'Continue') {
        this.scene.stop();
        this.scene.resume(menuItem.scene);
      } else {
        this.scene.stop('PlayScene');
        this.scene.start(menuItem.scene)
      }
    });
  }
}

export default MenuScene;