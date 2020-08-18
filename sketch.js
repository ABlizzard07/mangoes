const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
 
	tree = new Tree(400,400,50,50);
	ground = new Ground(600,670,1200,100);
	stone = new Stone(220,550,50,50);
	jimmy = new Boy(500,400,20,30);
	mango1 = new Mango(850,450,30);
	mango2 = new Mango(885,390,30);
	mango3 = new Mango(940,445,30);
	mango4 = new Mango(955,375,30);
	mango5 = new Mango(1030,450,30);
	elastic = new Elastic(stone.body,{x:220,y:530});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree.display();
  ground.display();
  stone.display();
  jimmy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  elastic.display();

  textSize(21);
  text("Drag the stone to the mangoes!",500,100);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}

function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	elastic.fly();
	Matter.Body.setStatic(stone.body,false);
  }

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance <= 100){
	   Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Body.setPosition(stone.body,{x:225,y:550});
		elastic.attach(stone.body);
	}
}

