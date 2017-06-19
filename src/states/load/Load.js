import Phaser from 'phaser'

class Load extends Phaser.State {
  init () {}

  preload () {
    let loadingLabel = this.add.text(game.world.centerX, 150, 'loading...', { font: '30px Trade Winds', fill: '#ffffff' });
    loadingLabel.anchor.setTo(0.5, 0.5);

    //menu Assets
    this.load.image('logo', 'assets/images/logo.png')
    this.load.image('pnjBackground', 'assets/images/pnjBackground.png')
    this.load.image('fog', 'assets/images/fog2.png')
    this.load.atlas('darkFireball', 'assets/images/darkFireball.png', 'assets/atlas/fireball_atlas.json')
    //menu sounds
    this.load.audio('MainTitle', 'assets/audio/ost/Descent.mp3')
    this.load.audio('InGame', 'assets/audio/ost/inGame.mp3')
    this.load.audio('Secret_Room', 'assets/audio/ost/Secret_Room.mp3')

    //play Assets
    this.load.atlas('enemy', 'assets/images/enemy.png', 'assets/atlas/enemy_atlas.json')
    this.load.atlas('player', 'assets/images/player.png', 'assets/atlas/player_atlas.json')
    this.load.image('hp', 'assets/images/hp.png')
    this.load.tilemap('theWorld', 'assets/atlas/theWorld.json', null, Phaser.Tilemap.TILED_JSON)
    this.load.image('structures', 'assets/images/worldProyect.png')

    //game sounds

  }

  create () {
    this.state.start('Menu')
  }
}

export default Load;
