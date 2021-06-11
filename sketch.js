var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var score = 0;
var gameState = "play";
var count = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  textSize(20) 
  fill("white") 
  text("Score:"+ score,10,40); 

  textSize(20) 
  fill("cyan") 
  text("500",20,550); 
  
  textSize(20)
   fill("cyan") 
   text("500",95,550); 
   
   textSize(20) 
   fill("cyan") 
   text("500",170,550); 
   
   textSize(20) 
   fill("cyan") 
   text("500",245,550); 
   
   textSize(20) 
   fill("cyan")
    text("100",320,550); 
    
    textSize(20) 
    fill("cyan") 
    text("100",395,550); 
    
    textSize(20) 
    fill("cyan") 
    text("100",470,550); 
    
    textSize(20) 
    fill("cyan") 
    text("200",545,550); 
    
    textSize(20) 
    fill("cyan") 
    text("200",620,550); 
    
    textSize(20) 
    fill("cyan") 
    text("200",695,550);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(particle != null){
     particle.display()
     if(particle.body.position.y > 760){
       if(particle.body.position.x < 300){
         score = score+500;
         particle = null;
         if(count>=6){
           gameState = "End";
         } 
         }
         else if(particle.body.position.x<500  &&particle.body.position.x > 301){
           score = score+100;
           particle = null;
           if(count>=6){
            gameState = "End";
          } 
         }
         else if(particle.body.position.x< 750 && particle.body.position.x> 501){
           score = score+200
           particle = null;
           if(count>=6){
            gameState = "End";
           }
         }
       }
     

   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }
   if(count>=6){
     textSize(50);
     fill("yellow");
     text("Game Over", 210, 250);
     gameState = "End";
   }


   
}

function mousePressed(){
  if(gameState!= "End"){
    count++
    particle = new Particle(mouseX, 10, 10, 10);
  }

}
