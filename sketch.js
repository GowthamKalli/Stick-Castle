const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var block1, ground1,triangle1,circle1;

//function preload(){
//bg = loadImage("p5.play-boilerplate-master/rg.png");
//}

function setup(){
    var canvas = createCanvas(window.innerWidth,window.innerHeight);
    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(window.innerWidth/2,window.innerHeight ,window.innerWidth,50);
    
    block1 = new Block(100,100,200,300);
    block2 = new Block(1260,100,200,300);
    block3 = new Block(300,383,100,500,true);
    block4 = new Block(1060,383,100,500,true);
    block5 = new Block(520,483,100,300,true);
    block6 = new Block(840,483,100,300,true);
    block7 = new Block(680,70,420,50);
    block8 = new Block(680,350,200,280);

    triangle1 = new Triangle(97,0,3,125,PI/2);
    triangle2 = new Triangle(1260,0,3,125,PI/2);
    triangle3 = new Triangle(680,10,3,140,PI/2);
    triangle4 = new Triangle(300,1,3,60,PI/2);
    triangle5 = new Triangle(1060,1,3,60,PI/2);

    circle1 = new Circle(420,600,50);
    circle2 = new Circle(420,400,50);
    circle3 = new Circle(420,100,50);
    circle4 = new Circle(950,600,50);
    circle5 = new Circle(950,400,50);
    circle6 = new Circle(950,100,50);
   
}

    function draw(){

      background(0,255,255);

      ground1.display();

      block1.display();
      block2.display();
      block3.display(); 
      block4.display();
      block5.display();
      block6.display(); 
      block7.display();
      block8.display();

      circle1.display();
      circle2.display();
      circle3.display();
      circle4.display();
      circle5.display();
      circle6.display();

      triangle1.display();
      triangle2.display();
      triangle3.display();
      triangle4.display();
      triangle5.display();


      Engine.update(engine)
    }