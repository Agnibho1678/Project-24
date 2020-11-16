
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, box1, box2, box3, Ground;


function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	ball = new paper(60,400,50);
	Ground = new ground(200, 600, 2500, 20);
	box1 = new box(1105,530,15,90);
	box2 = new box(1295, 530, 15, 90);
	box3 = new Horizontal(1200,580,210,15);


	Engine.run(engine);
  
}


function draw() {
  
  background("green");
 
  ball.display();
  Ground.display();
  box1.display();
  box2.display();
  box3.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-150});
	}
}



