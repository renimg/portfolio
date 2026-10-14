
// Example 2.4.4
// Simple OOP1 example with a UFO

// create an object var
let myUfo1;

function setup() {
  createCanvas(400,400);
  textSize(18);

  let col = color(20,180);
    // Parameters go inside the parens when the object is constructed.
  myUfo1 = new UFO(col,width/2,height/2,"Bleep Bloop");
}

function draw() {
  background(255);
  myUfo1.drift();
}

// The class defination is the template in which we can make different
// copies or many objects.
class UFO {
  // class variables that are unique to each instance of a class.
   c;
   xpos;
   ypos;
   orifice;

  // The Constructor is like setup and helps defines the details of the object
  constructor( tempC,  tempXpos,  tempYpos,  oa) {
    // tempC, tempXpos, etc. are the argument vars that pass data to the class vars
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.orifice =  "The UFO says " + oa;

  }

  // functions inside of Classes are called methods
  // This one is designed to go in the draw loop and called repeatly
   drift() {
    
    noStroke();
    fill(this.c);
    ellipse(this.xpos,this.ypos,random(15,20) +10,random(10,15));
    ellipse(this.pos,this.ypos+6,random(4,8) +10,random(2,4));
    text( this.orifice,this.xpos+5,this.ypos -15);
    this.xpos += random(-1,1);
    this.ypos += random(-1,1);
  }

}
