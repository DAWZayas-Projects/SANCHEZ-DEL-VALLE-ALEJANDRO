
var loadState = {

  preload: function () {
    loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Trade Winds', fill: '#ffffff' });
    loadingLabel.anchor.setTo(0.5, 0.5);

    //menu Assets
    game.load.image('logo', 'assets/images/logo.png');
    game.load.image('menuBackground', 'assets/images/backgroundGame.jpg');
    game.load.image('pnjBackground', 'assets/images/pnjBackground.png');
    game.load.image('fog', 'assets/images/fog2.png');
    game.load.atlas('darkFireball', 'assets/images/darkFireball.png', 'assets/atlas/fireball_atlas.json');

    game.load.audio('MainTitle', 'assets/audio/ost/Descent.mp3');

    //play Assets
    game.load.atlas('enemy', 'assets/images/enemy.png', 'assets/atlas/enemy_atlas.json');
    game.load.atlas('player', 'assets/images/player.png', 'assets/atlas/player_atlas.json');

    game.load.tilemap('theWorld', 'assets/atlas/theWorld.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('structures', 'assets/images/worldProyect.png');

  },
create: function() {
  game.state.start('menu'); }
};
