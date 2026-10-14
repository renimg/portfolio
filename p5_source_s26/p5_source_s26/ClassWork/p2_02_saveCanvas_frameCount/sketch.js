let recMode = false;

let can;  // create a canvas reference
let s1; // create some sdSine references
let angle

function setup() {
    can = createCanvas(1920, 1080); // assign the canvas to the reference
    background(20);
    fill(255);
    frameRate(30); // slow down the framerate so everything can be drawn. no hurry.
    noLoop();
    // 30 frames   times 10
    console.log(frameCount);
    s1 = new sdSine(3,0.0,height,64, color(255,0,0) );
    s2 = new sdSine(3,0.0,height,16, color(0,255,0) );
    s3 = new sdSine(5,0.0,960,64, color(0,0,255) );
    s4 = new sdSine(5,0.0,960,64, color(255,255,0) );
}

function draw() {
    //  start as true until 99
    // if ladder
    background(0,16);
    // push();
    // translate(width/2, height/2); //origin point
    // //ellipse(0,0,100,100); //visual for origin point
    // angleMode(DEGREES);
    // rotate(90);
    // translate(-width/2,-height/2);
    // s4.calcWave();
    // s4.renderWave();
    // pop();

        // push();
        // translate(0, 0 + (frameCount*10));
        // s1.calcWave();
        // s1.renderWave();
        // pop();

    if (frameCount < 150) {
        console.log("the first act");
        push();
        translate(width/2, height/2); //origin point
        //ellipse(0,0,100,100); //visual for origin point
        //rotate(frameCount*0.02);
        rotate(45);
        translate(-width/2,-height/2);
        s1.calcWave();
        s1.renderWave();
        pop();
        //true between 100 and 199
    } else if (frameCount < 300) {
       console.log("the second act");
       push();
        translate(width/2, height/2); //origin point
        //ellipse(0,0,100,100); //visual for origin point
        //rotate(frameCount*0.04);
        translate(-width/2,-height/2);
        s2.calcWave();
        s2.renderWave();
       pop();
        //true once it reaches frame 300
   } else if (frameCount < 450) {
       console.log("the third act");
       s3.calcWave();
       s3.renderWave();
        //true once it reaches frame 450
    } else if (frameCount < 600) {
       console.log("the fourth act");
        push();
        translate(width/2, height/2); //origin point
        //ellipse(0,0,100,100); //visual for origin point
        angleMode(DEGREES);
        rotate(90);
        translate(-width/2,-height/2);
        s4.calcWave();
        s4.renderWave();
        pop();
    } else if (frameCount < 630) {
        console.log("the final act");
        background(0,16);
    } else {
        console.log("the end");
        noLoop();
    }

    //recordit();

}


/////////////////////// use both keyPressed and recordit ///////////

function keyPressed() {

    if (keyIsPressed === true) {
        let k = key;
        console.log("k is " + k);

        if (k == 's' || k == 'S') {
            console.log("Stopped Recording");
            recMode = false;
            noLoop();
        }

        if (k == ' ') {
            console.log("Start Recording");
            if(frameCount > 600){
                frameCount = 0;
            }
            recMode = true;
            loop();
        }
    }
}

function recordit() {  // new version
    if (recMode == true) {
        let ext = nf(frameCount, 4); //0001
        saveCanvas(can, 'frame-' + ext, 'jpg');
        console.log("rec " + ext);
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
   
       this.w = width+16;
       this.dx = (TWO_PI / this.period) * this.xspacing;
       this.yvalues = new Array(floor(this.w / this.xspacing));
   
     }
   
      calcWave() {
        angleMode(RADIANS);
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

   // Add a new boid into the System
function mouseDragged() {
  flock.addBoid(new Boid(mouseX, mouseY));
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Flock object
// Does very little, simply manages the array of all the boids

function Flock() {
  // An array for all the boids
  this.boids = []; // Initialize the array
}

Flock.prototype.run = function() {
  for (let i = 0; i < this.boids.length; i++) {
    this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
  }
}

Flock.prototype.addBoid = function(b) {
  this.boids.push(b);
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Boid class
// Methods for Separation, Cohesion, Alignment added

function Boid(x, y) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.position = createVector(x, y);
  this.r = 3.0;
  this.maxspeed = 3;    // Maximum speed
  this.maxforce = 0.05; // Maximum steering force
}

Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  this.borders();
  this.render();
}

Boid.prototype.applyForce = function(force) {
  // We could add mass here if we want A = F / M
  this.acceleration.add(force);
}

// We accumulate a new acceleration each time based on three rules
Boid.prototype.flock = function(boids) {
  let sep = this.separate(boids);   // Separation
  let ali = this.align(boids);      // Alignment
  let coh = this.cohesion(boids);   // Cohesion
  // Arbitrarily weight these forces
  sep.mult(1.5);
  ali.mult(1.0);
  coh.mult(1.0);
  // Add the force vectors to acceleration
  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
}

// Method to update location
Boid.prototype.update = function() {
  // Update velocity
  this.velocity.add(this.acceleration);
  // Limit speed
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  // Reset accelertion to 0 each cycle
  this.acceleration.mult(0);
}

// A method that calculates and applies a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function(target) {
  let desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  desired.normalize();
  desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  let steer = p5.Vector.sub(desired,this.velocity);
  steer.limit(this.maxforce);  // Limit to maximum steering force
  return steer;
}

Boid.prototype.render = function() {
  // Draw a triangle rotated in the direction of velocity
  let theta = this.velocity.heading() + radians(90);
  fill(127);
  stroke(200);
  push();
  translate(this.position.x, this.position.y);
  rotate(theta);
  beginShape();
  vertex(0, -this.r * 2);
  vertex(-this.r, this.r * 2);
  vertex(this.r, this.r * 2);
  endShape(CLOSE);
  pop();
}

// Wraparound
Boid.prototype.borders = function() {
  if (this.position.x < -this.r)  this.position.x = width + this.r;
  if (this.position.y < -this.r)  this.position.y = height + this.r;
  if (this.position.x > width + this.r) this.position.x = -this.r;
  if (this.position.y > height + this.r) this.position.y = -this.r;
}

// Separation
// Method checks for nearby boids and steers away
Boid.prototype.separate = function(boids) {
  let desiredseparation = 25.0;
  let steer = createVector(0, 0);
  let count = 0;
  // For every boid in the system, check if it's too close
  for (let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position,boids[i].position);
    // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
    if ((d > 0) && (d < desiredseparation)) {
      // Calculate vector pointing away from neighbor
      let diff = p5.Vector.sub(this.position, boids[i].position);
      diff.normalize();
      diff.div(d);        // Weight by distance
      steer.add(diff);
      count++;            // Keep track of how many
    }
  }
  // Average -- divide by how many
  if (count > 0) {
    steer.div(count);
  }

  // As long as the vector is greater than 0
  if (steer.mag() > 0) {
    // Implement Reynolds: Steering = Desired - Velocity
    steer.normalize();
    steer.mult(this.maxspeed);
    steer.sub(this.velocity);
    steer.limit(this.maxforce);
  }
  return steer;
}

// Alignment
// For every nearby boid in the system, calculate the average velocity
Boid.prototype.align = function(boids) {
  let neighbordist = 50;
  let sum = createVector(0,0);
  let count = 0;
  for (let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].velocity);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    let steer = p5.Vector.sub(sum, this.velocity);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}

// Cohesion
// For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
Boid.prototype.cohesion = function(boids) {
  let neighbordist = 50;
  let sum = createVector(0, 0);   // Start with empty vector to accumulate all locations
  let count = 0;
  for (let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position); // Add location
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum);  // Steer towards the location
  } else {
    return createVector(0, 0);
  }
}