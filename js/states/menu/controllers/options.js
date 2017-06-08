
function startPlayState() {
  menuState.startLabel.destroy();
  menuState.menuText.map((text) => {
    text.destroy();
  });
  game.state.start('play');
}

function settingsOption(menu){
  menu.whatMenu = 'settings';
  menu.menuText.map( (text) =>{
    if(text.text != "FullScreen" && text.text != "Sound" && text.text != "Back") game.add.tween(text).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
    else game.add.tween(text).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
  });
}

function MainMenu(menu){
  menu.whatMenu = 'main';
  menu.menuText.map( (text) =>{
    if(text.text == "New Game" || text.text == "Continue" || text.text == "Settings" || text.text == "Exit" ) game.add.tween(text).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
    else game.add.tween(text).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
  });
}

function startfullScreenOn() {
  menu.setFullScreen = "Yes"
  game.scale.startFullScreen();
  FullScreenOption(menu);
}

function startfullScreenOff() {
  menu.setFullScreen = "No"
  game.scale.stopFullScreen();
  FullScreenOption(menu);
}

function toggleSoundUp() {
  if(menu.soundLevel < 10) {
    menu.soundLevel ++;
    game.sound.volume += 0.1;
  }
  soundOption(menu)
 }

 function toggleSoundDown() {
   if(menu.soundLevel > 0) {
     menu.soundLevel --;
     game.sound.volume -=0.1;
   }
   soundOption(menu)
 }


 function FullScreenOption(menu){
   menu.menuText.map( (text) =>{
     if(text.text == "Yes" || text.text == "/" || text.text == "No"){
       text.alpha = 1;
       if(text.text == menu.setFullScreen)text.fill = styleSettingsValues(true);
       else text.fill = styleSettingsValues(false);
     }
     if(text.text == menu.soundLevel){
       text.alpha = 0;
     }
   });
   menu.cursors.right.onDown.remove(toggleSoundUp, this);
   menu.cursors.left.onDown.remove(toggleSoundDown, this);
   menu.cursors.right.onDown.addOnce(startfullScreenOn, this);
   menu.cursors.left.onDown.addOnce(startfullScreenOff, this);
 }


 function soundOption(menu){
   console.log(game.sound.volume);
   menu.menuText.map( (text, index) =>{
     if(text.text == "Yes" || text.text == "/" || text.text == "No") text.alpha = 0;
     if(text.text == menu.soundLevel){
       text.alpha = 1;
       text.x = 1050;
     }else if (text.text == menu.soundLevel+1 || text.text == menu.soundLevel-1)text.alpha = 0;
   });
   menu.cursors.right.onDown.remove(startfullScreenOn, this);
   menu.cursors.left.onDown.remove(startfullScreenOff, this);
   menu.cursors.right.onDown.add(toggleSoundUp, this);
   menu.cursors.left.onDown.add(toggleSoundDown, this);
 }
