
let counter = 0;



function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  angleMode(DEGREES);
}

function draw() {
  background(20);

  toon1(color(20,200,40), 200,200 );

  toon1(color(200,20,20), 100,100 );

  toon1(color(200,20,200), 100,400 );



}


function toon1(k,lx,ly) {
  //console.log("toon1");

 push();
 translate(lx,ly);
 rotate(random(10,20));

  body(k);
  head(k);
  arm(k,-55,10); // left arm
  arm(k,35,10); // right arm
  arm(k,-55,40); // bot left arm
  arm(k,35,40); // bot tight arm
  // tail();
  pop();

}


function body(k){
 //console.log("body");
  fill(k);


  //rotate(45);
  rect(0,0,40,80, 15,15,25,25);

}

function head(c){
//console.log("head");
fill(c);
//rotate(45);
ellipse(20,-15,40,40,);
fill(255);
ellipse(20,-20,10,10,);

}

function arm(c,lx,ly){
//console.log("arms");
fill(c);
//rotate(45);
rect(lx,ly,60,15,10);

}



function tail(){
//console.log("tail");

}
