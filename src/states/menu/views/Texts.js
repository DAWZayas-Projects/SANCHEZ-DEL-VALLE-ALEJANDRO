import Phaser from 'phaser';

class MenuText {
  constructor ({ game, label, texts, style, defaultValue }) {
    this.state = game;
    //style of the text
    this.style = style;

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

  setAdditionalStyle(texts){
    const TRANSPARENT = 0;
    this.texts.map((text) => {
      this.state.world.bringToTop(text);
      text.anchor.setTo(0.5, 0.5);
      text.alpha = TRANSPARENT;
    });
  }

  addLabel(text){ return this.state.add.text(text.x, text.y, text.text, this.style) }

  addAdditionalStyleLabel(){
    this.label.anchor.setTo(0.5, 0.5);
    this.state.add.tween(this.label).to({angle: -2}, 500).to({angle: 2}, 500).loop().start();
  }

  ShowLevel(filterLevel){
    levelLength = this.levels[filterLevel];
    this.texts.map((text, index) =>{
      if( index <= levelLength ) this.state.add.tween(text).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
    });
    //destruir el label
  }

  callBackMenuText(){ ShowLevel(level0) }

  default(){
    this.addAdditionalStyleLabel();
    this.setAdditionalStyle();
  }

}

export default MenuText;
