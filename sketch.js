const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, ground, box1, polygon, slingshot;

var score = 0;

var bg, backgroundImg;

function preload() {
  getBG();
}

function setup() {

  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground(400, 395, 800, 10);
  stand = new Ground(500, 300, 400, 10);

  box1 = new Box(500, 250, 50, 50);
  box2 = new Box(450, 250, 50, 50);
  box3 = new Box(550, 250, 50, 50);
  box4 = new Box(475, 200, 50, 50);
  box5 = new Box(525, 200, 50, 50);
  box6 = new Box(500, 150, 50, 50);

  polygon = Bodies.circle(100, 200, 50);
  World.add(world, polygon);

  slingshot = new SlingShot(this.polygon,{x:100, y:200});
  
}

function draw() {

  if(backgroundImg) {

  background(backgroundImg);

  Engine.update(engine);

  ground.display();
  stand.display();

  box1.display();
  box2.display();
  box3.display();
 
  box4.display();
  box5.display();
  box6.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  
  fill(255,255,0);
  ellipse(this.polygon.position.x,this.polygon.position.y,50,50)
  
  slingshot.display();

  drawSprites();

  textSize(25);
  var Text = text("Score: " + score, 600, 100);
  }

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
      slingshot.attach(this.polygon);
  }
}

async function getBG() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
  var responseJSON = await response.json()
  var datetime = responseJSON.datetime
  var hour = datetime.slice(11, 13)
  if(hour>=06 && hour<=19) {
      bg = "Orange.PNG"
  } else {
      bg = "Blue.PNG"
  }
  backgroundImg = loadImage(bg)
}

