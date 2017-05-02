
function getTileSet(){
  return {
    background: { name: 'background', origin: 'background' },
    structures: { name: 'structures', origin: 'tiles' },
    decorations: { name: 'decorations2', origin: 'decorations' }
  };
}

function getLayers(){
  return {
    background: { name: 'background' },
    structures: { name: 'structures' },
    structures2: { name: 'structures2' },
    structures3: { name: 'structures3' },
    decorations: { name: 'decorations' }
  };
}

function addGravity(){
  game.physics.p2.gravity.y = 1400;
}
