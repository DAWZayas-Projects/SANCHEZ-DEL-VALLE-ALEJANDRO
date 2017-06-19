import Phaser from 'phaser';

class UserInterface {
  constructor ({ state, hearts }) {
    this.state = state;

    //sprite
    this.hearts = this.setGroup();
    this.setsprite(hearts);

  }

  setGroup(){ return game.add.group() }

  setsprite(hearts){
    Object.values(hearts).map( (hpValues) => {
       let heart = this.hearts.create(hpValues.x, hpValues.y, 'hp');
       heart.scale.set(0.036, 0.04);
       heart.fixedToCamera = true;
       heart.cameraOffset.setTo(hpValues.x, hpValues.y);
     });
   }

  hpDown(index){ this.hearts.children[index].kill() }

}

export default UserInterface;
