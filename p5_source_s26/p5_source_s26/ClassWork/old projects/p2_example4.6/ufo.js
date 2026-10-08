
// The class defination is the template in which we can make different
// copies or many objects.
class UFO {
  // class variables that are unique to each instance of a class.
  // c;
  // xpos;
  // ypos;
  // orifice;
  // xspeed;
  // yspeed;


  // The Constructor is like setup and helps defines the details of the object
  constructor( tempC,  tempXpos,  tempYpos,  oa) {
    // tempC, tempXpos, etc. are the argument vars that pass data to the class vars
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.orifice =  "The UFO says" + oa;
    this.xspeed = random(-.1,.1);
    this.yspeed = random(-.1,.1);

  }

  // functions inside of Classes are called methods
  // This one is designed to go in the draw loop and called repeatly
   display() {
    noStroke();
    fill(this.c);
    rectMode(CENTER);
    ellipse(this.xpos,this.ypos,random(15,20) +10,random(10,15));
    ellipse(this.xpos,this.ypos+6,random(4,8) +10,random(2,4));
    text( this.orifice,this.xpos+5,this.ypos -15);

   }


   update() {

    this.xpos += this.xspeed;
    this.ypos += this.yspeed;
    this.xpos += random(-1,1);
    this.ypos += random(-1,1);

    if (this.xpos > width) {
      this.xpos = 0;
    }

    if (this.xpos < 0) {
      this.xpos = width;
    }

    if (this.ypos > height) {
      this.ypos = 0;
    }

    if (this.ypos < 0) {
      this.ypos = height;
    }
  }

   newDirection() {
    this.xspeed = random(-3,3);
    this.yspeed = random(-3,3);
    this.c = color(255,0,0);
  }

}
