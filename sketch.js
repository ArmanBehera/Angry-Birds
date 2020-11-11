
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground1;
var box1, box2, box3, box4, box5;
var pig1, pig2, bird1, log1, log2, log3, log4;

function setup() {
  createCanvas(1200,400);
  
  engine = Engine.create();
  world = engine.world;
 
  box1 = new Box(500, 350, 70, 70);
  box2 = new Box(700, 350, 70, 70);

  log1 = new Log(600, 300, 270, PI / 2);

  box3 = new Box(500, 250, 70, 70);
  box4 = new Box(700, 250, 70, 70);

  log2 = new Log(600, 200, 270, PI / 2);

  box5 = new Box(600, 150, 70, 70);
  log3 = new Log(530, 120, 150, PI / 4);
  log4 = new Log(670, 120, 150, -PI / 4);

  pig1 = new Pig(600, 350);
  pig2 = new Pig(600, 250);
  bird1 = new Bird(200, 100);

  ground1 = new ground(600, height, 1200, 20);
}

function draw() {
  background(0);
  Engine.update(engine);

  box1.display();
  box2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  box3.display();
  box4.display();
  box5.display();

  pig1.display();
  pig2.display();
  bird1.display();

  ground1.display();
 
}
