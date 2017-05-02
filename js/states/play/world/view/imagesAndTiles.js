

function createWorld() {
  map = game.add.tilemap('MyTilemap');
  addTileSet(map);
  addLayers(map)
  addCollision();
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
    if(layer.name == 'background')resize(newLayer);
  });
}

function resize(background){
  background.resizeWorld();
}

function addCollision(){
  game.physics.p2.convertCollisionObjects(map, "collisionObject");
}
