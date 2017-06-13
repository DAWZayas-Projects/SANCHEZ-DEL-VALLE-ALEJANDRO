
function addHp() {
  hp = addSpriteHp();
  return hp;
}

function addSpriteHp(){
  hp = game.add.group();
  addHearts(hp);
  return hp;
}

function addHearts(hp){
  Object.values(getAllHearts()).map( (hpValues) => {
     heart = hp.create(hpValues.x, hpValues.y, 'hp');
     heart.scale.set(0.036, 0.04);
     heart.fixedToCamera = true;
     heart.cameraOffset.setTo(hpValues.x, hpValues.y);
  });
}
