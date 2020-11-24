
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var dustbin2;
var dustbin3;
var paper;
var ground;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(width/2,660,width,20);
	
	paper = new Paper(200,450,70);
	//dustbin1 = new Dustbin(600,638,130,20);
	//dustbin2 = new Dustbin(525,570,150,150);
	dustbin3 = new Dustbin(1200,640);
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
 
paper.display();
ground.display();

dustbin3.display();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-275});
	}
  }



