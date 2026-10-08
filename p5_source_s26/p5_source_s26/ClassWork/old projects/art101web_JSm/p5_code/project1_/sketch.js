

let currentkey = '1';

let bgc ;

let gkcount;


function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
}

function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
    clear_print();
}
// triggering the newkeychoice
if(mouseIsPressed) {
  drawChoice();
}


}


function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function


 // key global variable contains whatever key was last pressed
 let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
 // let k = color(0);

  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // red line
  drawline(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // green line
  drawline(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // fat purple line
  drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;
case '6':
    console.log("6");  // erase with bg color
    steveRanBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 255 ) {

        gkcount = 30;
    } else {
        gkcount+=3;
    }


    break;


default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function drawline( k,  lx, ly,  px, py) {
 // strokeWeight(1);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}

function steveRanBrush(kcount, lx, ly,  px, py) {

  strokeWeight(random(1,35));
  stroke(0,kcount,0);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}



function eraser( k, lx, ly, sz) {
  stroke(k);
  ellipse(lx, ly, sz,sz);
}


function clear_print() {

// these 2 options let you choose between clearing the background
// and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
     background(255);
  } else if (key == 'p' || key == 'P') {
    // saveFrames('paintImage', 'png', 1, 25, data => {
    // print(data);
  //});
     //this will save the name as the intials and a random counting number.
     // it will always be larger in value then the last one.
     //delay(100);
  }


}



//
// >20
// >>30
// 35
// 30
// 20
// 10
// 30
// 80
// 100
// 120
// 80
