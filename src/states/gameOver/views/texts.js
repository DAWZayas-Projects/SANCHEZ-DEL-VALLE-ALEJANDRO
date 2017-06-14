
function addGameOverMenu() {
  addGameOverLabel();
  menuGameOverTexts = setGameOverTexts();
  addFog();
  addGameOverLabel();
  setAnchorAndFixedToCamera(menuGameOverTexts);
  return menuGameOverTexts;
}

function startMenuText(){
  addTweenToTexts();
}

function setGameOverTexts() {
  const HALF_CENTER = game.world.centerX / 2;
  const STYLES = { font: '24px Trade Winds', fill: '#ffffff' };
  menuTextArray = [];
  Object.values(getGameOverMenuText()).map( (text, index) => {
    menuTextArray[index] = game.add.text(game.world.right - HALF_CENTER - text.x, game.world.height - text.y, text.title, STYLES);
  });
  return menuTextArray;
}

function setAnchorAndFixedToCamera(textArray) {
  y = 200;
  textArray.map((text) => {
    text.anchor.setTo(0.5, 0.5);
    text.fixedToCamera = true;
    text.cameraOffset.setTo(game.camera.width/2, y);
    y += 50;
  });
}

function addGameOverLabel() {
  const TEXT = 'GAME OVER';
  startLabel = game.add.text(game.world.centerX, game.world.height - 80, TEXT, { font: '30px Trade Winds', fill: '#93051b' });
  startLabel.anchor.setTo(0.5, 0.5);
  startLabel.fixedToCamera = true;
  startLabel.cameraOffset.setTo(game.camera.width/2, 150);
}
