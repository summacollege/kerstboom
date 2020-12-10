// Code by Bas(after 3 weeks of working with html / css / php / javascript)

let Count = 10;
let ScaleX =0.4;
let ScaleY =0.8;
let Size = 40
let offsetper = 0;
let offsetAdd = -13;
let Pcount = 0;
let InitP = 50;
let MaxP = 250;
let TrunkW = 50;
let TrunkH = 100;
let snowParticlesA=[];

function setup() {
  createCanvas(600, 800);
  frameRate(30)
  

  
 Boom();
}

function draw() {
  //offsetAdd-=0.1
  background(10,10,100);
  Boom();
  
  if(random(0,100)> 20 && Pcount < InitP){

      append(snowParticlesA, new SnowParticle());
    Pcount++
     }
  
  
  for(i =0;i < Pcount;i++){
    snowParticlesA[i].Move();
    snowParticlesA[i].Display();
  }
}

function Boom(){ 
  
  let osi = offsetper;
    var i = 1
  let TmpX = 1;
  let TmpY = 1;
  for(i = 1; i <= Count;i++){
   fill(0,120,0)
    stroke(0,0,0,0)
     TmpY += (ScaleY)
    
    triangle(width/2, (Size)-offsetper,width/2-Size*(TmpX),Size*(ScaleY)+Size*TmpY-offsetper,width/2+Size*(TmpX),Size*(ScaleY)+Size*TmpY-offsetper)
   // triangle(100,10,10,20,30,30)
    TmpX += (ScaleX);
offsetper+=(offsetAdd);
  fill(120,60,12)
    rect(width/2-(TrunkW/2), (Size*TmpY)-offsetper+(TrunkH/2),(TrunkW),TrunkH)
    
    
    
  }
  
  
  offsetper=osi
}

class SnowParticle{
  
 constructor() {
   
    if(random(0,100) > 50){
     this.x = random(0);
     this.y = random(height);
     }else{
       this.x = random(width);
     this.y = random(0);
     }
    this.diameter = random(2,4);
    this.speed = 6;
    //this.Time = random(0,1000);
  }
 Move(){
   
   if(this.speed != 0){
   let i = random(0,100);
   if(i <98){
     this.y+=this.speed;
     this.x+=this.speed*1.21;
   }else{
     let c = get(this.x, this.y);
     if(green(c) == 120) {
      // snowParticlesA.push();
       
       append(snowParticlesA, new SnowParticle());
       Pcount++
       this.speed = 0;
       if(Pcount > MaxP){
         Pcount--
         snowParticlesA.splice(0,1);
       }
       
       
     }
   }
   if(this.y > height || this.x > width){
     this.speed = random(0.5,1.5);
     if(random(0,100) > 50){
     this.x = random(0);
     this.y = random(height);
     }else{
       this.x = random(width);
     this.y = random(0);
     }
     
   }

   
 }
 }
  Display(){
       fill(255)
    ellipse(this.x,this.y,this.diameter)
  }
  
  

  
  
  
  
  
}