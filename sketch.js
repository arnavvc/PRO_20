var car, wall
var speed, weight

function setup() {
  createCanvas(800,400);
  
  //speed and weight
  speed = random(50,90)
  weight = random(400,1500)

  //create car
  car = createSprite(50, 200, 25, 25);
  car.velocityX = speed;

  //create wall
  wall = createSprite(700,200,25,350)
}


function draw() {
  background("black");  
  
  if(wall.x - car.x < (car.width + wall.width) / 2)
  {
    car.velocityX = 0
    
    var deformation = 0.5 * weight * speed* speed/22509

    if(deformation > 180)
    {
      car.shapeColor = color(255, 0, 0)
    }

    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = color(230, 230, 0)
    }

    if(deformation < 100)
    {
      car.shapeColor = color(0, 255, 0)
    }
  }

  drawSprites();
}
