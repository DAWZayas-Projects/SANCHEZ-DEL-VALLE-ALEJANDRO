
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
    game.load.image('background', 'assets/images/background.png');
    game.load.image('structures', 'assets/images/structures.png');
    game.load.image('tiles', 'assets/images/structures.png');
    game.load.image('decorations', 'assets/images/decorations2.png');
    game.load.atlas('player', 'assets/images/player.png', 'assets/atlas/player_atlas.json');

    game.load.tilemap('MyTilemap', 'assets/atlas/myMap.json', null, Phaser.Tilemap.TILED_JSON);

  },
create: function() {
  game.state.start('menu'); }
};
