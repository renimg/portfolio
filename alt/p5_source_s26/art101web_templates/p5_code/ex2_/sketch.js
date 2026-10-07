let gSize = 50;
let pizza;
let pineapple;

function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
  // Load in 2 different images of your own and name them below
  // Images must be in the same directory as your .js file to load correctly
  pizza = loadImage("images/pizza.jpg");
  // #435830495823045989
  pineapple = loadImage("images/pineapple.jpg");

}

function draw() {

  if (!mouseIsPressed) {
    noTint();
    image(pizza, 0, 0,width/2, height/2);
    image(pineapple, width/2, height/2, width/2, height/2);
  } else {
    // tint(255, 126); // Apply transparency without changing color
    let checkCounter = 0;

    for ( let i = 0; i < height; i+= gSize) {

      // add extra count to make it offset in the next row
      checkCounter++;

      for ( let j = 0; j < width; j+=(gSize) ) {

           // mod operator  %
        if ( (checkCounter % 2) == 0 ) {
          image(pizza, j, i, gSize, gSize);


      } else if ( (checkCounter % 5)  == 1 ) {

          image(pineapple, j, i, gSize, gSize);
      } else {
          fill(255,255,0);
          rect(j, i, gSize-6, gSize-6);
      }



        checkCounter++;
      }
    }
  }
}
