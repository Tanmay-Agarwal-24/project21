var bullet, wall,speed,weight,thickness;



function setup() {
  createCanvas(1700, 400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(23,83);
  bullet =createSprite(50,200,25,2);
  bullet.velocityX=speed
  wall=createSprite(800,200,thickness,height/2)
 
 
   
}

function draw() {
background("black");
if ((hascollided(bullet,wall))){
damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
bullet.velocityX=0;
if (damage>10){
wall.shapeColor=("red")

}
else if (damage<10){
wall.shapeColor=("blue")



}








}

  
  
  
  drawSprites();
  
   
      }

function hascollided (bullet,wall){




  if (wall.x-bullet.x<(bullet.width+wall.width)/2){
return true}
else  {
return false
}


















}

  
  












 


 