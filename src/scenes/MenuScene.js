import BaseScene from './BaseScene';

const PIPES_TO_RENDER = 4;

class MenuScene extends BaseScene{
  
  constructor(config) {
    super('MenuScene', config);

    this.menu = [
      {scene: 'PlayScene', text: 'Play'},
      {scene: 'ScoreScene', text: 'Score'},
      {scene: null, text: 'Exit'}
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
      menuItem.scene && this.scene.start(menuItem.scene);
      if (menuItem.text === 'Exit') {
        this.game.destroy(true);
      }
    });
  }
}

export default MenuScene;