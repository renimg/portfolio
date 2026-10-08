let tailwag;
let loy;
let wagspeed;
let speedy;

function setup() {
  createCanvas(500,500);
  background(100);
  fill(255);
  tailwag = 10;
  wagspeed = 4;
}

function draw() {
  background(40);

 if ( tailwag < -90 || tailwag > 20) {

    wagspeed = -wagspeed;
 }

  tailwag += wagspeed;


katz(100,100,0,1,tailwag);

evil_katz(100,300,0,1,tailwag);



}


function katz(lx,ly,rot,sc,tw){

  push();  // start T
  translate(lx,ly);
  rotate( radians(rot) ); 
  scale(sc); 
 
  let c = color(255,100,0);  
  catbody(0,0,0,1,c);
  catface(0,0,0,.75,c);
  cattail(165,0,tw,1,c);

  pop(); // end T
}



function evil_katz(lx,ly,rot,sc,tw){

  push();  // start T
  translate(lx,ly);
  rotate( radians(rot) );  // rotate read in radians
  scale(sc);  // multiples or perectages
 
  // fill("white");
  // rect(0,0,30,60,5); // anchor
  let c = color(70); // kat color black
  catbody(0,0,0,1,c);
  catface(0,0,tw/4,1.2,c);
  cattail(165,0,-40,1,c);
  // feet
  // tail
   

  pop(); // end T
}


function catbody(lx,ly,rot,sc,k){
  push();  
  translate(lx,ly);
  rotate( radians(rot) );  
  scale(sc);  
  fill(k);
  rect(0,0,180,70,25); 
  pop(); 
}


function catface(lx,ly,rot,sc,k){
  push();  
  translate(lx,ly);
  rotate( radians(rot) );  
  scale(sc);  
 
  fill(k);
  ellipse(0,0,100,100);
  // eyes
  fill(0);
  ellipse(-20,-10,20);
  ellipse(20,-10,20);

  // triangles for ears

  pop(); // end T
}


function cattail(lx,ly,rot,sc,k){

  push();  // start T
  translate(lx,ly);
  rotate( radians(rot) );  
  scale(sc);  

  fill(k);
  rect(0,0,69,15,6); // anchor
  pop(); // end T
}


function transformTemp(lx,ly,rot,sc){

  push();  // start T
  translate(lx,ly);
  rotate( radians(rot) ); 
  scale(sc);  
  fill("white");
  rect(0,0,30,60,5); // anchor
  pop(); // end T
}