
function createWorld() {
  map = game.add.tilemap('theWorld');
  addTileSet(map);
  addLayers(map)
  return map;
}


function addTileSet(map){
  Object.values(getTileSet()).map( (tile) => {
    map.addTilesetImage(tile.name, tile.origin);
  });
}

function addLayers(map){
  Object.values(getLayers()).map( (layer) => {
    newLayer = map.createLayer(layer.name);
    if(layer.name == 'structures')resize(newLayer);
  });
}

function resize(background){
  background.resizeWorld();
}

function addCollision(){
 return   game.physics.p2.convertCollisionObjects(playState.world,"collision");
}
