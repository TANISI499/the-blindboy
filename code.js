var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4c948e0f-f342-4fd4-b237-12ce9a7fea4c","aeeb631e-8a92-4a90-abaa-f81a7675e955","026c9bf1-1748-45c9-a894-9720f0d34ad0"],"propsByKey":{"4c948e0f-f342-4fd4-b237-12ce9a7fea4c":{"name":"blind boy 2","sourceUrl":"assets/api/v1/animation-library/gamelab/t44eFFNKurL6603QnBdIgqQ0CWopoOaC/category_people/grey_shirt2.png","frameSize":{"x":143,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"t44eFFNKurL6603QnBdIgqQ0CWopoOaC","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":143,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/t44eFFNKurL6603QnBdIgqQ0CWopoOaC/category_people/grey_shirt2.png"},"aeeb631e-8a92-4a90-abaa-f81a7675e955":{"name":"bike1 ","sourceUrl":"assets/api/v1/animation-library/gamelab/XhF6XWCD9VXdhJ4xGrFZGvqk9uM_AYNa/category_vehicles/motoside_08.png","frameSize":{"x":284,"y":171},"frameCount":1,"looping":true,"frameDelay":2,"version":"XhF6XWCD9VXdhJ4xGrFZGvqk9uM_AYNa","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":284,"y":171},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XhF6XWCD9VXdhJ4xGrFZGvqk9uM_AYNa/category_vehicles/motoside_08.png"},"026c9bf1-1748-45c9-a894-9720f0d34ad0":{"name":"bike 2","sourceUrl":"assets/api/v1/animation-library/gamelab/OpsmvQ4PReiaNwI45_xkFNM7SEXtmeHJ/category_vehicles/monstertruck_08.png","frameSize":{"x":396,"y":252},"frameCount":1,"looping":true,"frameDelay":2,"version":"OpsmvQ4PReiaNwI45_xkFNM7SEXtmeHJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":252},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OpsmvQ4PReiaNwI45_xkFNM7SEXtmeHJ/category_vehicles/monstertruck_08.png"}}};
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

 
 var boundry1 = createSprite(3,94,1000,3);
 boundry1.shapeColor="black";
 var boundry2 = createSprite(3,291,1000,3);
 boundry2.shapeColor="black";
 var boundry3 = createSprite(60,193,2,200);
 boundry3.shapeColor="black";
 var boundry4 = createSprite(340,193,2,200);
 boundry4.shapeColor="black";
 var sam      = createSprite(24,193,20,20);
 sam.shapeColor= "green";
 sam.setAnimation("blind boy 2");
 sam.scale= 0.1;
 var car1     = createSprite(110,193,20,20);
 car1.shapeColor="blue";
 car1.setAnimation("bike1 ");
 car1.scale= 0.1;
 var car2     = createSprite(164,193,20,20);
 car2.shapeColor="blue";
 car2.setAnimation("bike1 ");
 car2.scale = 0.1;
 var car3     = createSprite(225,193,20,20);
 car3.shapeColor="blue";
 car3.setAnimation("bike1 ");
 car3.scale = 0.1;
 var car4    = createSprite(273,193,20,20);
 car4.shapeColor = "blue";
 car4.setAnimation("bike1 ");
 car4.scale= 0.1;
 var gamestate="serve";
 var lives = 0;
 
function draw()
{
  background("white");
   drawSprites();
  


if(gamestate=="serve")
{
  textSize(20);
  fill("yellow");
text("press space to play",107,120);

}
if(keyDown("space"))
{
car1.velocityY=-4;
  car2.velocityY=4;
  car3.velocityY=-4;
  car4.velocityY=4;
  
  gamestate="play";
}
if(keyDown("right"))
{
  sam.x=sam.x+4;
}
if(keyDown("up"))
{
sam.y=sam.y-4;
}
if(keyDown("down"))
{sam.y=sam.y+4;
}
if(keyDown("left"))
{
  sam.x=sam.x-4;
}


 
if(sam.isTouching(car1))

  {
  car1.x =110;
  car1.y =193;
  car2.x =164;
  car2.y =193;
  car3.x =225;
  car3.y =193;
  car4.x =273;
  car4.y =193;
  sam.x  =24;
  sam.y = 193;
  car1.velocityY = 0;
  car2.velocityY = 0;
  car3.velocityY = 0;
  car4.velocityY = 0;
  lives=lives+1;
  
  gamestate = "serve";
  }
 if(sam.isTouching(car2))

  {
  car1.x =110;
  car1.y =193;
  car2.x =164;
  car2.y =193;
  car3.x =225;
  car3.y =193;
  car4.x =273;
  car4.y =193;
  sam.x  =24;
  sam.y = 193;
  car1.velocityY = 0;
  car2.velocityY = 0;
  car3.velocityY = 0;
  car4.velocityY = 0;
  lives=lives+1;
  
  gamestate = "serve";
  
  } 
 if(sam.isTouching(car3))

  {
  car1.x =110;
  car1.y =193;
  car2.x =164;
  car2.y =193;
  car3.x =225;
  car3.y =193;
  car4.x =273;
  car4.y =193;
  sam.x  =24;
  sam.y = 193;
  car1.velocityY = 0;
  car2.velocityY = 0;
  car3.velocityY = 0;
  car4.velocityY = 0;
  lives=lives+1;
   
  gamestate = "serve";
  } 
  if(sam.isTouching(car4))

  {
  car1.x =110;
  car1.y =193;
  car2.x =164;
  car2.y =193;
  car3.x =225;
  car3.y =193;
  car4.x =273;
  car4.y =193;
  sam.x  =24;
  sam.y = 193;
  car1.velocityY = 0;
  car2.velocityY = 0;
  car3.velocityY = 0;
  car4.velocityY = 0;
  lives=lives+1;
   
  gamestate = "serve";
  }
  if(lives==5)
  {
    textSize(30);
    fill("green");
    text("game over",120,161);
    gamestate="play";
    
  }
  if(sam.isTouching(boundry4))
  {
  textSize(30);
  fill("blue");
  text("you won",130,161);
  gamestate="play";
  }
  if(sam.isTouching(
    car1||
    car2||
    car3||
    car4))
  {
playSound("assets/category_background/synthesize.mp3", true);
    }
       
  
createEdgeSprites();
car1.bounceOff(boundry1);
car1.bounceOff(boundry2);
car2.bounceOff(boundry1);
car2.bounceOff(boundry2);
car3.bounceOff(boundry1);
car3.bounceOff(boundry2);
car4.bounceOff(boundry1);
car4.bounceOff(boundry2);
sam.bounceOff(edges);


  
  
  
  
  
  
  
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
