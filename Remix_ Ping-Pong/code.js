var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["93428433-0c8b-4564-ab43-9bbf7f427914","8efc8091-7d90-456e-802e-9f32211b83d1","12309db0-e5aa-41ae-8140-81b970a82d36"],"propsByKey":{"93428433-0c8b-4564-ab43-9bbf7f427914":{"name":"ball","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"YvJ6hDY8zm_Bmbcsf19L1497hI.JUb4x","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/93428433-0c8b-4564-ab43-9bbf7f427914.png"},"8efc8091-7d90-456e-802e-9f32211b83d1":{"name":"b1","sourceUrl":"assets/api/v1/animation-library/gamelab/xzMc5zjvQAPcTWck00Co5Syx17hULrjo/category_robots/robot_06.png","frameSize":{"x":256,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"xzMc5zjvQAPcTWck00Co5Syx17hULrjo","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xzMc5zjvQAPcTWck00Co5Syx17hULrjo/category_robots/robot_06.png"},"12309db0-e5aa-41ae-8140-81b970a82d36":{"name":"b2","sourceUrl":"assets/api/v1/animation-library/gamelab/JwtCeTHgy85COA5cC0sPa_VIOH2nMlSE/category_robots/robot_02.png","frameSize":{"x":262,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"JwtCeTHgy85COA5cC0sPa_VIOH2nMlSE","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":262,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JwtCeTHgy85COA5cC0sPa_VIOH2nMlSE/category_robots/robot_02.png"}}};
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

var score=0;
var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
var volleyball_1= createSprite(200,200,25,25);
    volleyball_1.shapeColor="yellow";
var linea= createSprite(900,500,600,2000);
    linea.shapeColor="black";
    volleyball_1.setAnimation("ball");
    volleyball_1.scale=0.1;
    playerPaddle.setAnimation("b1");
    playerPaddle.scale=0.25;
    computerPaddle.setAnimation("b2");
    computerPaddle.scale=0.25;

function draw() 
{
  background(220);
  background("black");
 
    if(volleyball_1.isTouching(playerPaddle) || volleyball_1.isTouching(computerPaddle))
    {
    playSound("assets/category_jump/arcade_game_jump_1.mp3");
    }
    if(keyDown("space")) 
    {
    volleyball_1.velocityX=15;
    volleyball_1.velocityY=5;
    }
    if(volleyball_1.isTouching(linea))
    {
    playSound("assets/category_alerts/playful_quirky_negative_game_cue_2.mp3");
    }
    if (keyDown("up")) 
    {
    playerPaddle.y=playerPaddle.y-10;
    } 
    if (keyDown("down"))  
    {
    playerPaddle.y=playerPaddle.y+10;
    }
 
 /*
 if (keyDown("w")) 
    {
    computerPaddle.y=computerPaddle.y-10;
    } 
    if (keyDown("s"))  
    {
    computerPaddle.y=computerPaddle.y+10;
    }
    */
    
  computerPaddle.y=volleyball_1.y;
  createEdgeSprites();  
  volleyball_1.bounceOff(topEdge);
  volleyball_1.bounceOff(bottomEdge);
  volleyball_1.bounceOff(computerPaddle);
  volleyball_1.bounceOff(playerPaddle);
  drawSprites();
  
//createEdgeSprites();
  if(volleyball_1.isTouching(topEdge) || volleyball_1.isTouching(bottomEdge))
  {
    playSound("assets/category_jump/arcade_game_jump_15.mp3");
  }
  
  playerPaddle.bounceOff(topEdge);
  playerPaddle.bounceOff(bottomEdge);
  playerPaddle.bounceOff(computerPaddle);
  playerPaddle.bounceOff(playerPaddle);
  drawSprites(); 

  if( volleyball_1.isTouching(linea))  
  {
  textSize(80);
  background("white");
  stroke("blue");
  text("You lose", 50,200);
  }

drawNet();
}

function drawNet()
{
  for (var num=0; num < 400; num=num+20) 
  {
  stroke("yellow");
  line(200, num, 200,num+10);
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
