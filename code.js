var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1=createSprite(200,100,200,10);
var wall2=createSprite(100,125,10,50);
var wall3=createSprite(300,125,10,50);
var wall4=createSprite(75,150,50,10);
var wall5=createSprite(350,150,100,10);
var wall6=createSprite(50,200,10,100);
var wall7=createSprite(395,200,10,100);
var wall8=createSprite(75,250,50,10);
var wall9=createSprite(350,250,100,10);
var wall10=createSprite(100,275,10,50);
var wall11=createSprite(300,275,10,50);
var wall12=createSprite(200,300,200,10);

var ball1=createSprite(125,200,15,15);
ball1.shapeColor="red";

var ball2=createSprite(175,200,15,15);
ball2.shapeColor="red";

var ball3=createSprite(225,200,15,15);
ball3.shapeColor="red";

var ball4=createSprite(275,200,15,15);
ball4.shapeColor="red";

var level=1;
var x=0;





var goal=createSprite(330,200,8,100);
goal.shapeColor="yellow";

var goal2=createSprite(350,200,8,100);
goal2.shapeColor="yellow";

var goal3=createSprite(370,200,8,100);
goal3.shapeColor="yellow";


var player=createSprite(75,200,25,25);
player.shapeColor="green";


  

function draw()
{
  background("skyblue");
  
  textSize(25);
  fill("black");
  
  if(keyDown("right"))
  {
    player.x=player.x+5;
  }
  if(keyDown("left"))
  {
    player.x=player.x-5;
  }
  
  if(level===1){
    text("Level 1",155,350);
    if(x===0){
    ball1.setVelocity(0,3);
    ball2.setVelocity(0,-3);
    ball3.setVelocity(0,3);
    ball4.setVelocity(0,-3);
    }
    
  if(player.isTouching(goal))
  {
    player.x=75;
    player.y=200;
    level=2;
  }

  }
  
  if(level===2){
    text("Level 1 cleared",130,50);
    text("Level 2",155,350);
    if(x===0){
    ball1.setVelocity(0,6);
    ball2.setVelocity(0,-6);
    ball3.setVelocity(0,6);
    ball4.setVelocity(0,-6);
    }
    
  if(player.isTouching(goal2))
  {
    player.x=75;
    player.y=200;
    level=3;
  }

  }
  
  
  if(level===3){
    text("Level 2 cleared",130,50);
    text("Level 3",155,350);
    if(x===0){
    ball1.setVelocity(0,10);
    ball2.setVelocity(0,-10);
    ball3.setVelocity(0,10);
    ball4.setVelocity(0,-10);
    }
    
  if(player.isTouching(goal3))
  {
    ball1.velocityY=0;
    ball2.velocityY=0;
    ball3.velocityY=0;
    ball4.velocityY=0;
    level=4;
    
  }

  }
  
  if(level===4){
    text("You Win!!",170,50);
  }
 
  
  bounceBack();
 
  
  if(player.isTouching(ball1)||player.isTouching(ball2)||player.isTouching(ball3)||player.isTouching(ball4)){
    player.x=75;
    player.y=200;
  }
  
  
  
  drawSprites();
}

function bounceBack(){
  if(ball1.isTouching(wall1)||ball1.isTouching(wall12))
   {
    ball1.velocityY=ball1.velocityY*(-1);
    if(x===0){
      x=1;
    }
    else
    x=0;
  }
  
  if(ball2.isTouching(wall1)||ball2.isTouching(wall12))
   {
    ball2.velocityY=ball1.velocityY*(-1);
  }
  
  if(ball3.isTouching(wall1)||ball3.isTouching(wall12))
   {
    ball3.velocityY=ball3.velocityY*(-1);
  }
  
  if(ball4.isTouching(wall1)||ball4.isTouching(wall12))
  {
    ball4.velocityY=ball4.velocityY*(-1);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
