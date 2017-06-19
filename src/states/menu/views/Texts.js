import Phaser from 'phaser';

class MenuText {
  constructor ({ state, label, texts, style, selected, unselected, defaultValue }) {
    this.state = state;
    //style of the text
    this.style = style;
    this.selected = selected;
    this.unselected = unselected;

    //start label
    this.label = this.addLabel(label);

    //menu text
    this.texts = this.setTexts(texts);
    this.levels = this.setLevel(texts);

    //default
    if (defaultValue)this.default();
  }

  setTexts(texts){
    let phaserTexts = [];
    texts.map( (objectTexts) => {
      let menu = [];
      Object.values(objectTexts).map ( (text, index) => {
        menu[index] = this.state.add.text(text.x, text.y, text.title, this.style);
      });
      phaserTexts = phaserTexts.concat(menu);
    });
    return phaserTexts;
  }

  setLevel(texts){
    let levels = {};
    texts.map((objectTexts, index) => {
      let key = 'level'+index;
      let value = Object.keys(objectTexts).length;
      levels[key] = value;
    });
    return levels;
  }

  setAdditionalStyle(){
    const TRANSPARENT = 0;
    this.texts.map((text) => {
      this.state.world.bringToTop(text);
      text.anchor.setTo(0.5, 0.5);
      text.alpha = TRANSPARENT;
    });
  }

  setPauseStyle(){
    let y = 200;
    this.texts.map((text) => {
      text.alpha = 0;
      text.anchor.setTo(0.5, 0.5);
      text.fixedToCamera = true;
      text.cameraOffset.setTo(game.camera.width/2, y);
      y += 50;
    });
    this.label.alpha = 0;
    this.label.anchor.setTo(0.5, 0.5);
    this.label.fixedToCamera = true;
    this.label.cameraOffset.setTo(game.camera.width/2, 150);
  }

  visible(){
    this.texts.map((text) => {
      text.alpha = 1;
    });
    this.label.alpha = 1;
  }

  invisible(){
    this.texts.map((text) => {
      text.alpha = 0;
    });
    this.label.alpha = 0;
  }

  addLabel(text){ return this.state.add.text(text.x, text.y, text.text, this.style) }

  addAdditionalStyleLabel(){
    this.label.anchor.setTo(0.5, 0.5);
    this.state.add.tween(this.label).to({angle: -2}, 500).to({angle: 2}, 500).loop().start();
  }

  showLevel(filterLevel, destroyLabel, startlevel){
    let levelLength = this.levels[filterLevel]+startlevel;
    this.texts.map((text, index) =>{
      index < levelLength && index >= startlevel ? this.state.add.tween(text).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true) : this.state.add.tween(text).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    });
    if ( destroyLabel ) this.label.destroy();
  }

  callBackMenuText(){ this.showLevel('level0', true, 0) }

  toggleSelected(index){ this.texts[index].fill = this.selected }

  toggleUnselected(index){ this.texts[index].fill = this.unselected }

  default(){
    this.addAdditionalStyleLabel();
    this.setAdditionalStyle();
  }

}

export default MenuText;
