var fobject, mobject;
var car
var wall

function setup() {
  createCanvas(800,400);
  fobject = createSprite(425, 210, 45, 50);
  fobject.shapeColor = "black";
  mobject = createSprite(390,290,20,15);
  mobject.shapeColor = "black";

car = createSprite(100, 350, 80, 50);
car.shapeColor = "red";
car.velocityX = 4;
wall = createSprite(400, 400, 100, 300);
wall.shapeColor = "brown";
wall.velocityX = -4;

}

function draw() {
  background("lightgrey");  

  mobject.x = World.mouseX;
  mobject.y = World.mouseY;
  
if(isTouching(fobject, mobject)){
  fobject.velocityX = 4;

}else{
 fobject.velocityX = 0;
}

bounceOff(car, wall);

  drawSprites();
}

function isTouching(ob1, ob2){

  if(ob1.x-ob2.x <ob1.width/2 + ob2.width/2 &&
    ob2.x-ob1.x <ob1.width/2 + ob2.width/2 &&
    ob1.y-ob2.y <ob1.height/2 + ob2.height/2 &&
    ob2.y-ob1.y <ob1.height/2 + ob1.height/2 ){
      return true 
    } else{
return false
    }

}

function bounceOff(ob1, ob2){

  if(ob1.x-ob2.x <ob1.width/2 + ob2.width/2 &&
    ob2.x-ob1.x <ob1.width/2 + ob2.width/2 ){
      ob1.velocityX = ob1.velocityX * (-1);
      ob2.velocityX = ob2.velocityX * (-1);
    }
   if( ob1.y-ob2.y <ob1.height/2 + ob2.height/2 &&
    ob2.y-ob1.y <ob1.height/2 + ob1.height/2 ){
      ob1.velocityY = ob1.velocityY * (-1);
      ob2.velocityY = ob2.velocityY * (-1);
}
}