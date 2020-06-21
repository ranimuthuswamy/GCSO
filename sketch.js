//create variables
var car, wall;
var weight,speed;
function setup() {
  //create the canvas
  createCanvas(1400,400);

  //set the speed and weight for the car
  speed = random(55,90);
  weight = random(400, 1500);

  //create a car and assign speed
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = color(255);
  car.velocityX = speed;

  //create a wall to detect collision
  wall = createSprite(1300,200, 60,height/2 );
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  //set the background to black
  background(0,0,0);  

  //detect collision between the wall and the car
  if(wall.x - car.x < (wall.width+car.width)/2)
  {
    //stop the car when it collides with the wall
    car.velocityX = 0;

    //deformation formula 0.5xweightxspeedxspeed/22500
    var deformation = 0.5*weight*speed*speed/22500;
    //if the deformation is less than 100 change the color of the car to green
    if(deformation < 100)
    {
      car.shapeColor = color(0,255,0);
    }

    //if the deformation is greater than 100 and less than 180 change the color of the car to yellow
    if(deformation >100 && deformation < 180)
    {
      car.shapeColor = color(230,230,0);
    }

    //if the deformation is greater than 180 change the color of the car to red
    if(deformation > 180)
    {
      car.shapeColor = color(255,0,0);
    }
  }

  //draw the sprites
  drawSprites();
}