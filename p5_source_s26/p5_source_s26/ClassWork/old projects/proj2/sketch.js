
// Example 2.1
// Simple Sine exmple




let s1;

function setup() {
  
    createCanvas(500, 500);
    background(20);
    fill(255);
    frameRate(60); // slow down the framerate so everything can be drawn. no hurry.
 
    console.log(frameCount);
    s1 = new sdSine(8,0.0,height,200, color(255));
  
}

function draw() {
  if (frameCount < 120) {
    scale(1.5);
    background(0,20); 
        s1.calcWave();
        s1.renderWave();
  }
    if (frameCount > 120) {
        background(0,60); 
        s1.calcWave();
        s1.renderWave();
    }       
}


class sdSine {

    xspacing; // Distance between each horizontal location
    theta; // Start angle at 0
    amplitude; // Height of wave
    period; // How many pixels before the wave repeats
    w; // Width of entire wave
    dx; // Value for incrementing x
    yvalues; // Using an array to store height values for the wave
    k;
     // s1 = new sdSine(10,0.0,75,200, color(255,0,0) );
     constructor(xs,t,a,p,c) {
      
       this.xspacing = xs ; 
       this.theta = t; 
       this.amplitude = a; 
       this.period = p; 
       this.k = c;
   
       this.w = width + 16;
       this.dx = (TWO_PI / this.period) * this.xspacing;
       this.yvalues = new Array(floor(this.w / this.xspacing));
   
     }
   
      calcWave() {
       // Increment theta (try different values for
       // 'angular velocity' here)
       this.theta += 0.02;
     
       // For every x value, calculate a y value with sine function
       let x = this.theta;
       for (let i = 0; i < this.yvalues.length; i++) {
         this.yvalues[i] = sin(x) * this.amplitude;
         x += this.dx;
       }
     }
     
      renderWave() {
       noStroke();
       fill(this.k);
       // A simple way to draw the wave with an ellipse at each location
       for (let x = 0; x < this.yvalues.length; x++) {
         ellipse(x * this.xspacing, height / 2 + this.yvalues[x], 16, 16);
       }
     }
   
      setColor(c) {
         this.k = c;
      }
   
      setAmp(a) {
       this.amplitude = a;
      }
   
   }