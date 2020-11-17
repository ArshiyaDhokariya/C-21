 var movingRect ;
var fixedRect ;
var obj1,obj2,obj3

function setup() {
  createCanvas(800,400);
  obj4 = createSprite(600, 200, 50, 100);
  movingRect = createSprite(100,100,60,35);

  obj1 = createSprite(200,200,50,100);
  obj2 = createSprite(300,200,50,100);
  obj3 = createSprite(400,200,50,100);

 movingRect.shapeColor = "green";
 obj4.shapeColor = "green";
 obj1.shapeColor = "green";
 obj2.shapeColor = "green";
 obj3.shapeColor = "green";

 //obj4.debug = true;
 //movingRect.debug = true;
 
 obj1.velocityX = 4;
 obj4.velocityX = -4

}


function draw() {
  background(255,255,255);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  var result = isTouching(movingRect,obj4);
  
  bounceOff(obj1,obj4)

  if(result === true)
  {
    movingRect.shapeColor = "blue";
    obj4.shapeColor = "blue";
  }
  else
  {
    movingRect.shapeColor = "yellow";
    obj4.shapeColor = "yellow";
  }
  
  drawSprites();
}

