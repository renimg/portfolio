class Kar {

    lox;
    loy;
    rc;
    acc;
    driver;
    flipper;
    sc;

  // constuctor // it's like setup
  constructor ( dr, sp)  {
    this.lox = int(random(20,500));
    this.loy = int(random(20,820));
    this.rc = color(random(255),random(255),random(255));
    this.acc = sp;
    this.driver = dr;
    this.flipper = random(-50,50);
    this.sc = random(2);
  }

  move() {
    this.lox+=this.acc;
    if (this.lox > width) {
      this.lox = 0;
    }
    this.flipper+=.1;
  }

  wiggle(sa) {
    if (this.loy > height || this.loy < 0 ) {
      this.loy = height/2;
    }
     this.loy+=random(-sa,sa);
  }

   update() {
    push();
    rotate(radians(this.flipper));
    // scale(sc);
    translate(this.lox,this.loy);
    fill(this.rc);
    rect(0,0,70,40,12);
    fill(0);
    text(this.driver,10,20);
    pop();
  }
  
}
