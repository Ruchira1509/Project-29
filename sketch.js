const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var ground1;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;

var ground2;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;

var hexagon;

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 390, 1200, 20);

    hexagon = new Hexagon(66, 72, 89);
    ground1 = new Ground(300, 268, 200, 20);
    box1 = new Square1(300, 150,40,50);//top yellow
    box2 = new Square2(315, 180,40,50);//2nd layer blue to the right
    box3 = new Square2(285, 180,40,50);//2nd layer blue to the left
    box4 = new Square3(330, 210,40,50);//3rd layer pink to the right
    box5 = new Square3(300, 210,40,50);//3rd layer pink middle
    box6 = new Square3(270, 210,40,50);//3rd layer pink to the left
    box7 = new Square4(285, 240,40,50);//4th layer orange middle right
    box8 = new Square4(315, 240,40,50);//4th layer orange further right
    box9 = new Square4(345, 240,40,50);//4th layer orange further left
    box10 = new Square4(255, 240,40,50);//4th layer orange middle left


    ground2 = new Ground(700, 218, 200, 20);
    box11 = new Square1(700, 100,40,50);//top yellow
    box12 = new Square2(715, 130,40,50);//2nd layer blue to the right
    box13 = new Square2(685, 130,40,50);//2nd layer blue to the left
    box14 = new Square3(730, 160,40,50);//3rd layer pink to the right
    box15 = new Square3(700, 160,40,50);//3rd layer pink middle
    box16 = new Square3(670, 160,40,50);//3rd layer pink to the left
    box17 = new Square4(685, 190,40,50);//4th layer orange middle right
    box18 = new Square4(715, 190,40,50);//4th layer orange further right
    box19 = new Square4(745, 190,40,50);//4th layer orange further left
    box20 = new Square4(655, 190,40,50);//4th layer orange middle left

    
}

function draw(){
    background("lightblue");
    Engine.update(engine);

    ground.display();

    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    ground2.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    hexagon.display();

    
    
}
