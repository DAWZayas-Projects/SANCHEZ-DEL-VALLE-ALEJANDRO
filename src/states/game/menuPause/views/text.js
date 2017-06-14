
function setPauseTexts() {
  const STYLES = { font: '24px Trade Winds', fill: '#ffffff' };
  menuPauseTextArray = [];
  Object.values(getMenuPauseText()).map( (text, index) => {
    menuPauseTextArray[index] = game.add.text(game.world.right - text.x, game.world.height - text.y, text.title, STYLES);
  });
  return menuPauseTextArray;
}

function setAnchorAndCameraTexts(menuPauseTexts) {
  y = 200;
  menuPauseTexts.map((text) => {
    text.anchor.setTo(0.5, 0.5);
    text.fixedToCamera = true;
    text.cameraOffset.setTo(game.camera.width/2, y);
    y += 50;
  });
}

function addPauseLabel() {
  const TEXT = 'Pause';
  pauseLabel = game.add.text(game.world.centerX, game.world.height - 80, TEXT, { font: '30px Trade Winds', fill: '#ffffff' });
  pauseLabel.anchor.setTo(0.5, 0.5);
  pauseLabel.fixedToCamera = true;
  pauseLabel.cameraOffset.setTo(game.camera.width/2, 150);
  return pauseLabel;
}
