class Form{
  constructor(){
  this.input= createInput('Enter your name')
  this.playButton=createButton('Play')
  this.greeting=createElement('h2')
  this.titleimg=createImg("assets/title.png");
  this.resetButton=createButton("Reset")
  
  }
  hideallitems(){
      this.input.hide()
      this.playButton.hide()
      this.greeting.hide()
      this.titleimg.hide()
  
  }
  
  display(){
  
  this.titleimg.position(100,100)
  this.input.position(400,400)
  this.playButton.position(500,500)
  this.resetButton.position(1000,50)
  
  
  this.playButton.mousePressed(()=>{
      this.titleimg.hide()
  this.input.hide();
  this.playButton.hide();
  var name=this.input.value();
  this.greeting.html("HELLO"+name+"Please wait for other players to join")
  playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
    player.addPlayer();//aa
      player.updateCount(playerCount); // BP
     player.getDistance(); //aa
  })
  
  this.resetButton.mousePressed(()=>{
    player.updateCount(0);
    game.update(0)
    database.ref("players").remove()
  })
  
  }
  
  
  
  
  }