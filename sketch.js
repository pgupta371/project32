const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var  slingShot;
var Score = 0;
var bg = "bg.png";
function preload() {
    changeBG();
    }

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(390,280,250,10)
    stand2 = new Ground(700,180,200,10)
    
    block1 = new Box(300,275,30,30)
    block2 = new Box(330,275,30,30)
    block3 = new Box(360,275,30,30)
    block4 = new Box(390,275,30,30)
    block5 = new Box(420,275,30,30)
    block6 = new Box(480,275,30,30)
    block7 = new Box(450,275,30,30)
    block8 = new Box(330,235,30,30)
    block9 = new Box(360,235,30,30)
    block10 = new Box(390,235,30,30)
    block11 = new Box(420,235,30,30)
    block12 = new Box(450,235,30,30)
    block13 = new Box(360,195,30,30)
    block14 = new Box(390,195,30,30)
    block15 = new Box(420,195,30,30)
    block16 = new Box(390,155,30,30)

    blocks1 = new Box(640,175,30,30)
    blocks2 = new Box(670,175,30,30)
    blocks3 = new Box(700,175,30,30)
    blocks4 = new Box(730,175,30,30)
    blocks5 = new Box(760,175,30,30)
    blocks6 = new Box(670,135,30,30)
    blocks7 = new Box(700,135,30,30)
    blocks8 = new Box(730,135,30,30)
    blocks9 = new Box(700,95,30,30)
    
    ball = new Ball(20, 20, 20, 20)

    slingShot = new SlingShot(ball.body,{x:100,y:200});
    

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    blocks6.display();
    blocks7.display();
    blocks8.display();
    blocks9.display();
    ball.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    blocks1.score();
    blocks2.score();
    blocks3.score();
    blocks4.score();
    blocks5.score();
    blocks6.score();
    blocks7.score();
    blocks8.score();
    blocks9.score();

    
    slingShot.display();
    textSize(25);
    fill(0);
    text("See if you can knock down the towers!", 250, 350);
    text("If not, press the Space Bar for a second chance!", 200, 380);
    text("Score: " + Score, 20, 50);
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot = new SlingShot(ball.body,{x:100,y:200} );
    }
}

async function changeBG(){
    var info = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
    var infoJ = await info.json();
    var time = infoJ.datetime;
    var hour = time.slice(11, 13);
    if(hour >= 06 && hour <= 19){
         bg = "bg.png"  
    } else {
         bg = "bg2.jpg"
    }
    backgroundImg = loadImage(bg);


}