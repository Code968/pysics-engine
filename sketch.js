const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object; ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        restitution:1

    
    }
    var ground_options={
    isStatic: true
    }

   object= Bodies.circle(200,100,20,object_options);
    World.add(world,object);
    
    ground=Bodies.rectangle(0,390,1000,10,ground_options);
    World.add(world,ground);


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipse(object.position.x,object.position.y,20,20);
    rect(ground.position.x,ground.position.y,1000,10);
}
