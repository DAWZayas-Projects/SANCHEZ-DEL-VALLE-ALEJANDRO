class World {
  constructor ({ state, tilemap, tileset, layers, collision }) {
    this.state = state;

    //map
    this.tilemap = this.setTilemap(tilemap);
    this.addTileset(tileset);
    this.addLayers(layers);

    //physics
    this.collision = this.addCollision(collision);
    this.addGravity();

  }

  setTilemap(tilemap){ return this.state.add.tilemap(tilemap) }

  addTileset(tileset){
    tileset.map( (tile) => {
      this.tilemap.addTilesetImage(tile.name, tile.origin);
    });
  }

  addLayers(layers){
    layers.map( (layer) => {
      let newLayer = this.tilemap.createLayer(layer.name);
      newLayer.resizeWorld();
    });
  }

  addCollision(collision){
    game.physics.p2.setBoundsToWorld(true, true, true, false, true);
    return this.state.physics.p2.convertCollisionObjects(this.tilemap, collision) }


  addGravity(){ this.state.physics.p2.gravity.y = 1400 }


  collisionPlayerWithWorld(){
    let playerMaterial = this.state.physics.p2.createMaterial('playerMaterial', this.state.player.body);
    let collideObject = this.state.physics.p2.createMaterial('collideObject', this.state.collisionObject.body);
    let iterationPlayerWorld = this.state.physics.p2.createContactMaterial(playerMaterial, collideObject);
    iterationPlayerWorld.restitution = 0;
    iterationPlayerWorld.stiffness = 1e10;
  }


}

export default World;
