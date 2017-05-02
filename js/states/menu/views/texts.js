
function addMenu() {
  dieFog();
  menuTexts = setTexts();
  addFog();
  setAnchorAndAlphaTexts(menuTexts);
  this.menuState.whatMenu = 'main';
  return menuTexts;
}

function startMenuText(){
  addTweenToTexts();
}

function setTexts() {
  const HALF_CENTER = game.world.centerX / 2;
  const STYLES = { font: '24px Trade Winds', fill: '#ffffff' };
  menuTextArray = [];
  Object.values(getMenuText()).map( (text, index) => {
    menuTextArray[index] = game.add.text(game.world.right - HALF_CENTER - text.x, game.world.height - text.y, text.title, STYLES);
  });
  settingsTextArray = [];
  settingsValuesTextArray = [];
  Object.values(getSettingsText()).map((text, index) => {
    if(text.title != "Back")text.values.map((value, index) => {
      settingsValuesTextArray[settingsValuesTextArray.length] = game.add.text(game.world.right - HALF_CENTER + 60 + 32*index, game.world.height - text.y, value, STYLES);
    });
    settingsTextArray[index] = game.add.text(game.world.right - HALF_CENTER - text.x, game.world.height - text.y, text.title, STYLES);
  });
  settingsTextArrayfull = settingsTextArray.concat(settingsValuesTextArray);
  return menuTextArray.concat(settingsTextArrayfull);
}

function setAnchorAndAlphaTexts(textArray) {
  const TRANSPARENT = 0;
  textArray.map((text) => {
    game.world.bringToTop(text);
    text.anchor.setTo(0.5, 0.5);
    text.alpha = TRANSPARENT;
  });
}

function addTweenToTexts() {
   menuState.menuText.map((text) => {
    if(text.text == "New Game" || text.text == "Continue" || text.text == "Settings" || text.text == "Exit") game.add.tween(text).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
  });
    menuState.startLabel.destroy();
}

function addStartLabel() {
  const TEXT = 'press space to start';
  startLabel = game.add.text(game.world.centerX, game.world.height - 80, TEXT, { font: '30px Trade Winds', fill: '#ffffff' });
  startLabel.anchor.setTo(0.5, 0.5);
  game.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 500).loop().start();
  return startLabel;
}
