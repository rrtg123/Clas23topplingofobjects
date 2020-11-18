const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var Box1;
var Box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  
Box1 = new box(200,300,50,50);
Box2= new box(180,100,50,100);
ground= new Ground(200,390,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    

 Box1.display();
 Box2.display();
 ground.display();
}