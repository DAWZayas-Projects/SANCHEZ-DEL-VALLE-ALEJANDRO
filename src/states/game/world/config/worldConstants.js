
function getTileSet(){
  return {
    structures: { name: 'worldProyect', origin: 'structures' },
  };
}

function getLayers(){
  return {
    structures: { name: 'structures' }
  };
}

function addGravity(){
  game.physics.p2.gravity.y = 1400;
}
