var movingRect, fixedRect;
var o1;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  fixedRect= createSprite(500,200,50,50);
  fixedRect.shapeColor= "yellow";
  o1=createSprite(650,330,50,50);
  o1.shapeColor="aqua";
}

function draw() {
  background(0, 0, 0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //collision (to detect collision)
  if(isTouching(movingRect, o1))
  {
    movingRect.shapeColor = "white";
    o1.shapeColor= "white";
  }
  else
  {
    movingRect.shapeColor = "green";
    o1.shapeColor= "yellow";
  }

  drawSprites();
}

