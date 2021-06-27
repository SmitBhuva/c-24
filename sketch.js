const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var rubber;


function setup(){
    canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    stone = new Stone(600,300);

    //rubber = new Rubber()
    rubber = new Rubber(Math.round(random(30,1200)),100,20)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
  
    


    plane.display();
    hammer.display();
    stone.display();
    rubber.display();

    
 
}