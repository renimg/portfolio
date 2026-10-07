// sine and additive oscill example 
let counter = 0;
let sincount = 0;
let addcount = 0;
let dir = 0;

function setup() {
 createCanvas(1500,500);
 background(20);
 fill(255);
 
 dir = random(-5,5);

}

function draw() {
 
 push();
 translate(frameCount,sincount);
// rotate ( counter);   0-360
 rect(0,0,20,20);
 console.log( sin(counter) );
 // remember * is scaling and + is offsetting
 sincount = sin(counter) * 50  + 200 + addcount;
 pop();

 counter+=.1;
 addcount += dir;

 if ( addcount < -50 ||  addcount > 50) {
   // background(0,0,random(200),10);
    dir = -dir;
 }
}
