
/* 
Make sure to check out the project 1 example on custom functions first.
namely being able to make a custom function with aruguements.
 */

let currentkey = '1';
let bgc ;
let gkcount;
let k;
let hue=0;

function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
    myPicker = createColorPicker('black');
    myPicker.position(0,0);
    myPicker.hide();
    let button1 = createButton("1");
    button1.position(0,40);
    let button2 = createButton("2");
    button2.position(30,40);
    let button3 = createButton("3");
    button3.position(60,40);
    let button4 = createButton("4");
    button4.position(90,40);
    let button5 = createButton("5");
    button5.position(120,40);
    let button6 = createButton("6");
    button6.position(150,40);
    let button7 = createButton("7");
    button7.position(180,40);
    let button8 = createButton("8");
    button8.position(210,40);
    let button9 = createButton("9");
    button9.position(240,40);
    let buttonclear = createButton("Clear");
    buttonclear.position(90,5);
    let buttonprint = createButton("Print");
    buttonprint.position(160,5);
    button1.mousePressed(() => key = '1');
    button2.mousePressed(() => key = '2');
    button3.mousePressed(() => key = '3');
    button4.mousePressed(() => key = '4');
    button5.mousePressed(() => key = '5');
    button6.mousePressed(() => key = '6');
    button7.mousePressed(() => key = '7');
    button8.mousePressed(() => key = '8');
    button9.mousePressed(() => key = '9');
    buttonclear.mousePressed(() => key = 'x');
    buttonprint.mousePressed(() => key = 'p');
}


function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
     hue = hue+1;
    if (hue > 360) {
    hue = 0;
} else {
    hue = hue+1;
}
    }
    // if(currentkey == '7')
    // {
    //   myPicker = createColorPicker('deeppink');
    //   myPicker.position(0,0);
    // }
}


 // wrapper function ( no parameters or arguments )
function drawChoice() {

  /*
   the key mapping if statements that you can change to do anything you want.
   just make sure each key option has the a stroke or fill and then what type of 
   graphic function. The 'key' global property contains whatever key was last pressed
  */


  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line

 // let k = color(0);
 colorMode(RGB);
  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  myPicker.hide();
  break;
case '2':
  console.log("2");  // red line
  colorMode(RGB);
  drawline(color(255,0,0), mouseX, mouseY, pmouseX, pmouseY);
  myPicker.hide();
  break;
case '3':
  console.log("3");  // green line
  colorMode(RGB);
  drawline(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  myPicker.hide();
  break;
case '4':
  console.log("4");  // fat teal line
  colorMode(RGB);
  drawFatLine(color(0,255,255), mouseX, mouseY, pmouseX, pmouseY);
  myPicker.hide();
  break;
case '5':
  console.log("5");  // erase with bg color
  colorMode(RGB);
  eraser(bgc,mouseX, mouseY,25);
  myPicker.hide();
   break;
case '6':
    console.log("6");  // erase with bg color
    colorMode(RGB);
    steveRanBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);
    myPicker.hide();

    if (gkcount > 50 ) {
        // resetting the size
        gkcount = 1;
    } else {
       // making bigger
        gkcount+= .5;
    }
 break;
 case '7':
    console.log("7");  // make your first brush here!!
    myPicker.show();
    k = myPicker.color();
    jordanRandspreadbrush(k,random(-10,10),random(-10,10),mouseX,mouseY,pmouseX,pmouseY);
 break;
  case '8':
    console.log("8");
     colorMode(HSL,360);
    myPicker.hide();
    jordanRainbowBrush(mouseX,mouseY,pmouseX,pmouseY);
 break;
  case '9':
    console.log("9");  
    colorMode(HSL,360);
    myPicker.hide();
    jordanRandomSpreadRainbowBrush(random(30,-30),random(30,-30),mouseX,mouseY,(pmouseX+mouseX),(pmouseY+mouseY));
 break;
 case 'x':
  console.log("x");  // clear background
  colorMode(RGB);
  background(255);
  break;
 case 'p':
  console.log("p");  // save image
  saveFrames('image-0', 'png', 1, 1);
  key = '';  // resets the key so it does not make more than one image.
  break;
default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function drawline( k,  lx, ly,  px, py) {
  
  strokeWeight(1);
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

  //strokeWeight(random(1,35));
  strokeWeight(kcount);
  stroke(0,kcount*3,0);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}

function jordanRandspreadbrush(k,randx,randy,lx,ly,px,py)
{
  strokeWeight(4+random(-7,+7));
  stroke(k);
  line(lx+randx, ly+randy, px+randx, py+randy);
}

function jordanRainbowBrush(lx,ly,px,py)
{
  colorMode(HSL,360);
  strokeWeight(20*noise((lx*px, ly*py)));
  stroke(hue,200,150);
  //fill(hue,200,200);
  line(lx, ly, px, py);
}

function jordanRandomSpreadRainbowBrush(randx,randy,lx,ly,px,py)
{
  colorMode(HSL,360);
  strokeWeight(20*noise((lx*randx, ly*randy)));
  stroke(hue,200,200);
  line(lx+randx, ly+randy, px+randx, py+randy);
}

function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

