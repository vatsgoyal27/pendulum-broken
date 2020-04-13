const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,bob,ground;

function setup() {
  createCanvas(400,400);
  background("red");
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }
  ground = Bodies.rectangle(200,400,400,20,ground_options)
  World.add(world,ground);

  var holder_options={
    isStatic: true
  }
  holder = Bodies.rectangle(200,100,200,20,holder_options);
  World.add(world,holder);

var bob_options = {
  restitution : 1,
  density: 2
}
  bob = Bodies.circle(100,100,40,bob_options);
  World.add(world,bob);


var line_options = {
  bodyA : bob,
  bodyB : holder,
  stiffness: 0,
  length : 200
}
var string = Constraint.create(line_options);
World.add(world,string);

fill("white");
}


function draw() {
  background("red"); 
  Engine.update(engine);

  fill ("black");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,holder.length,holder.width);

fill("brown");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400, 20);


fill("green");
ellipseMode(RADIUS);
ellipse(bob.position.x,bob.position.y,40);

strokeWeight(2);
stroke("white");
line(bob.position.x,bob.position.y,holder.position.x,holder.position.y)




if(keyCode == 32){
bob.position.y = mouseY;
bob.position.x = mouseX;
}

else if (keyCode == 13){
bob.position.x = 200;

}

}








