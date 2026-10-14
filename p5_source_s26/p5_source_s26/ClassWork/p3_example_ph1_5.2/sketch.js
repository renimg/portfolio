let images =[];
let font1;

function preload()  {

    font1 = loadFont('assets/Kabisat Demo-ItalicTall.ttf');
    images[0] = loadImage('assets/pattern1.png');
    images[1] = loadImage('assets/pattern2.png');
    images[2] = loadImage('assets/pattern3.png');
    images[3] = loadImage('assets/pattern4.png');
    images[4] = loadImage('assets/pattern5.png');
    images[5] = loadImage('assets/patterntrans.png');

}


function setup() {
let col = [];
col[0] = color(0,0,0,0);
col[1] = color(0,0,0,0);
col[2] = color(0,0,0,255);
col[3] = color(255,255,255,255);
col[4] = color(217,87,99,255);
col[5] = color(215,123,186,255);
col[6] = color(69,40,60,255);
col[7] = color(33,27,32,255);
col[8] = color(118,66,138,255);
col[9] = color(34,30,63,255);
col[10] = color(63,63,116,255);
col[11] = color(48,52,109,255);
col[12] = color(91,110,225,255);
col[13] = color(99,155,255,255);
col[14] = color(48,96,130,255);
col[15] = color(55,148,110,255);
col[16] = color(106,190,48,255);
col[17] = color(75,105,47,255);
col[18] = color(251,242,54,255);
col[19] = color(217,160,102,255);
col[20] = color(238,195,154,255);
col[21] = color(223,113,38,255);
col[22] = color(143,86,59,255);
col[23] = color(129,10,0,255);
col[24] = color(172,50,50,255);

let textarr2 = [
[" "," ","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass"],
[" ","Bass","Grain","Grain","Beat","Beat","Beat","Beat","Beat","Beat","Beat","Beat","Beat","Beat","Grain","Bass"],
[" ","Bass","Grain","Bounce","Sound","Bounce","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bounce","Beat","Bass"],
[" ","Bass","Grain","Bounce","Sound","Bass","Bounce","Bounce","Bounce","Bass","Bounce","Bounce","Bounce","Bass","Beat","Bass"],
[" ","Bass","Grain","Bounce","Sound","Bass","Bounce","Bass","Bounce","Bass","Bounce","Bass","Bounce","Bass","Beat","Bass"],
[" ","Bass","Grain","Bounce","Sound","Bass","Bounce","Bass","Bounce","Bass","Bounce","Bass","Bounce","Bass","Beat","Bass"],
[" ","Bass","Grain","Bounce","Sound","Bass","Bounce","Bounce","Bounce","Bass","Bounce","Bounce","Bounce","Bass","Grain","Bass"],
[" ","Bass","Bounce","Bounce","Beat","Bounce","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bounce","Grain","Bass"],
[" ","Bass","Bass","Bounce","Beat","Beat","Beat","Grain","Grain","Grain","Grain","Grain","Grain","Grain","Grain","Bass"],
[" ","Bass","Grain","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass"," "],
["Bass","Grain","Bounce","Bounce","Grain","Grain","Grain","Grain","Grain","Grain","Grain","Grain","Grain","Grain","Bass"," "],
["Bass","Bounce","Bounce","Grain","Beat","Beat","Beat","Beat","Beat","Beat","Grain","Grain","Grain","Grain","Bass"," "],
["Bass","Bounce","Grain","Beat","Bass","Bounce","Bounce","Bounce","Bounce","Bounce","Bounce","Bass","Bounce","Grain","Bass"," "],
["Bass","Grain","Beat","Bounce","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bounce","Grain","Bass"," "," "],
["Bass","Beat","Grain","Bounce","Bounce","Bounce","Bounce","Bounce","Bounce","Bounce","Bounce","Grain","Bass"," "," "," "],
["Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass","Bass"," "," "," "," "]
];

let gridarr2 = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,23,24,2,2,2,2,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,23,24,2,2,24,23,2,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,23,24,23,2,2,2,23,24,2,2,2],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,23,24,24,2,23,24,23,23,24,24,24,2],
	[2,2,2,2,2,2,2,2,2,2,2,6,6,23,23,23,23,6,2,2,2,2,2,2,2,2,2,23,23,23,24,2,24,24,24,23,23,23,24,24,2],
	[2,11,11,11,24,24,24,24,4,23,23,23,23,6,6,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,23,23,2,24,24,24,2,1],
	[2,11,9,9,9,9,23,23,4,24,24,24,4,4,24,24,3,3,24,24,24,24,23,23,24,23,23,23,24,24,24,24,24,23,2,2,23,23,2,1,1],
	[2,11,9,9,9,9,9,23,4,24,4,4,4,24,24,3,12,12,3,24,24,23,23,24,24,23,23,24,4,24,23,6,20,20,9,2,2,2,1,1,1],
	[2,23,7,7,7,9,9,11,4,24,4,24,24,24,24,3,12,12,3,24,23,23,24,24,24,23,24,4,24,23,2,3,3,9,9,2,1,2,2,2,1],
	[2,23,9,9,9,9,9,11,4,4,4,24,3,3,24,24,3,3,24,24,23,24,4,23,24,24,4,20,3,3,2,6,24,9,11,2,2,23,24,24,2],
	[2,23,7,7,7,9,9,11,4,4,24,3,12,12,3,24,24,24,24,23,23,3,3,23,24,4,4,24,23,2,2,6,20,9,23,24,23,24,24,24,2],
	[2,23,7,7,7,7,9,11,4,4,24,3,12,12,3,24,24,24,24,23,3,12,12,3,4,4,24,23,23,2,2,3,20,23,24,24,23,24,23,2,2],
	[2,23,7,7,7,7,9,11,4,4,24,24,3,3,24,24,24,24,24,23,3,12,12,3,4,24,20,20,3,3,2,6,24,23,24,23,2,23,24,24,2],
	[2,23,7,7,7,7,9,11,4,24,24,24,24,24,24,3,3,3,23,23,24,3,3,4,4,4,24,23,23,2,2,3,20,23,23,2,2,2,24,24,2],
	[2,23,7,7,7,7,9,11,4,24,24,24,24,24,3,3,12,3,3,23,24,4,24,24,4,4,24,24,23,2,2,3,24,23,23,2,1,1,2,2,2],
	[2,23,7,7,7,7,9,11,4,24,24,24,24,24,3,12,12,12,3,23,24,4,24,24,24,4,24,20,3,3,2,6,24,9,11,2,1,1,1,1,1],
	[2,23,7,7,7,7,9,11,4,24,24,24,24,24,3,3,12,3,3,23,24,24,4,24,24,4,20,20,20,2,2,3,20,9,11,2,2,2,2,2,2],
	[2,23,7,7,7,7,9,11,4,24,24,24,24,24,24,3,3,3,24,23,23,24,4,24,24,24,24,23,23,2,2,2,20,23,23,2,2,24,24,24,2],
	[2,23,7,7,7,7,9,11,4,24,24,24,24,24,24,24,24,24,24,24,23,24,24,4,24,24,24,24,3,3,2,2,24,23,23,23,23,23,24,24,2],
	[2,23,7,7,7,9,9,11,4,24,24,24,24,24,24,24,3,3,24,24,24,24,24,24,4,24,24,20,20,2,2,3,20,23,24,24,23,23,23,2,1],
	[2,23,7,7,7,7,7,11,4,23,23,23,3,3,23,3,21,21,3,23,3,3,23,24,24,4,24,24,23,23,2,2,23,9,23,24,23,23,24,24,2],
	[2,23,7,9,9,9,9,11,4,23,23,3,4,4,3,3,21,22,3,3,5,8,3,24,24,24,4,24,24,20,3,3,20,9,11,2,2,2,24,24,2],
	[2,23,7,7,7,9,9,11,4,23,23,3,4,4,3,23,3,3,23,3,8,10,3,23,24,23,23,4,24,2,2,2,4,9,11,2,1,1,2,2,2],
	[2,23,9,9,9,9,9,11,4,23,23,23,3,3,23,23,3,3,23,23,3,3,23,23,3,23,3,23,4,24,3,23,20,9,23,2,2,2,2,1,1],
	[2,23,7,7,7,9,9,23,24,23,23,3,3,23,23,3,13,12,3,23,23,23,23,7,7,7,7,7,23,4,24,3,4,23,23,23,23,24,24,2,1],[
	2,11,9,9,9,9,23,23,24,23,3,18,19,3,23,3,12,14,3,23,3,3,23,3,23,3,23,3,23,23,4,23,4,9,24,23,23,23,24,2,1],
	[2,11,11,11,23,23,23,23,23,23,3,19,21,3,23,23,3,3,23,3,16,15,3,23,23,23,23,23,23,23,24,24,24,23,23,24,23,2,24,2,1],
	[2,2,2,2,2,2,2,2,2,2,2,3,3,23,23,23,6,6,6,3,15,17,3,2,2,2,2,2,6,23,23,23,2,2,2,23,24,23,2,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,2,1,1,1,1,1,2,23,23,2,23,24,24,2,24,24,2,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,6,23,23,23,23,24,2,2,2,2,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,23,23,2,2,24,2,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,23,2,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

let crGridarr1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 0, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 0, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 12, 5, 12, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 12, 5, 12, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 8, 8, 0, 8, 8, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 5, 5, 0, 5, 5, 0, 0, 0, 0, 0]
];
     createCanvas(800, 700);
     background(0, 60, 150);
     fill(100);
           //2darr, x,y,rot,scale, alpha
    textFont(font1);
     //mapToMonoPixels(gridarr1, -20, 20, -3, 6, 50);
     //mapToMonoPixels(gridarr1, 580, 20, 20, 1.25, 255);
    //jsmapToColorPixels(gridarr2, col, 700, 100, -100, -.5);
    jsmapToColorPixels(crGridarr1, col, 100, 100, 0, 1);
    //mapToMonoPixels(gridarr2, 300, -50, -135, -.7, 255);
    //mapToBitMaps(gridarr2,images,col, 380, 150, -100, -1);
    // mapToColorShapes(gridarr1, 120, 460, 30, 0.45, 255);
    // mapToColorShapes(gridarr1, 450, 300, -25, 1.5, 255);
    
     //mapToColorText(textarr2, 600, 350, -22, -0.4,-1, 255);
   
//      mapToBitMaps(gridarr1,images, 300, 100, -3, 1.55);
//      mapToTintedBitMaps(gridarr1,images, 400, 550, -20, 1.85,190);
//      mapToColorTextBitMap(textarr, images, 150, 50, -10, 0.75, 175);
}


          //2darr, x,y,rot,scale, alpha
function mapToMonoPixels(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            if(arr[i][j] == 1) {
            noStroke();
            fill(0, 0, 0, 0);
            } else if (arr[i][j] > 2 && arr[i][j] < 17) {
            fill (arr[i][j] * 15, fade);
            } else {
            fill(arr[i][j] * 10, fade);
            }
            rect(j * 12, i * 12, 10, 10);
        }
    }
   pop();

}


         //x,y,rot,scale, alpha
function jsmapToColorPixels(arr,colarr,lx,ly,rot,sc) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(colarr[0]);
              } else if ( value == 1 ){
                  fill(colarr[1]);
              } else if ( value == 2 ) {
                  fill(colarr[2]);
              } else if ( value == 3 ) {
                  fill(colarr[3]);
              } else if ( value == 4 ) {
                  fill(colarr[4]);
              } else if ( value == 5 ) {
                  fill(colarr[5]);
              } else if ( value == 6 ) {
                  fill(colarr[6]);
              } else if ( value == 7 ) {
                  fill(colarr[7]);
              } else if ( value == 8 ) {
                  fill(colarr[8]);
              } else if ( value == 9 ) {
                  fill(colarr[9]);
              } else if ( value == 10 ) {
                  fill(colarr[10]);
              } else if ( value == 11 ) {
                  fill(colarr[11]);
              } else if ( value == 12 ) {
                  fill(colarr[12]);
              } else if ( value == 13 ) {
                  fill(colarr[13]);
              } else if ( value == 14 ) {
                  fill(colarr[14]);
              } else if ( value == 15 ) {
                  fill(colarr[15]);
              } else if ( value == 16 ) {
                  fill(colarr[16]);
              } else if ( value == 17 ) {
                  fill(colarr[17]);
              } else if ( value == 18 ) {
                  fill(colarr[18]);
              } else if ( value == 19 ) {
                  fill(colarr[19]);
              } else if ( value == 20 ) {
                  fill(colarr[20]);
              } else if ( value == 21 ) {
                  fill(colarr[21]);
              } else if ( value == 22 ) {
                  fill(colarr[22]);
              } else if ( value == 23 ) {
                  fill(colarr[23]);
              } else {
                 fill(colarr[24]); 
              }
              if (value >= 2 && value <= 24){
                rect(j * 12, i * 12, 10, 10);
              }
        }
    }
    pop();

}

function mapToColorShapes(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(200,70,0, fade);
                  ellipse(j * 12, i * 12, 10, 10);
              } else if ( value == 1 ){
                  fill(50,0,30, fade);
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else {
                  fill(0,150,0, fade);
                   ellipse(j * 12, i * 12, 15, 10,5);
              }
        }
    }
    pop();

}

function mapToColorText(arr,lx,ly,rot,sc,sc2,fade) {
    textSize(8);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc,sc2);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == " " ) {
                fill(0,0,0,0);
              } else if ( value == "Bass" ){
                fill(0,0,0, fade);
              } else if ( value == "Grain" ){
                fill(69,40,60, fade);
              } else if ( value == "Beat" ){
                fill(102,57,49, fade);
              } else if ( value == "Bounce" ){
                fill(33,27,32, fade);
              } else if ( value == "Sound" ){
                fill(143,86,56, fade);
              } else {
                fill(255, fade);
              }
               text(value, j * 35, i * 10, 100);
        }
    }
    pop();

}





                            //2darray,images in array ,x,y,rot,scale, alpha
 function mapToBitMaps(arr,imgarr,colarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                     if ( value > 1 && value <= 5 ) {
                        nuimg = imgarr[0];
                      } else if ( value > 5 && value <= 10 ){
                        nuimg = imgarr[1];
                      } else if ( value > 10 && value <= 15 ) {
                        nuimg = imgarr[2];
                      } else if ( value > 15 && value <= 20 ) {
                        nuimg = imgarr[3];
                      } else {
                        nuimg = imgarr[4];
                      }
                if ( value == 0 ) {
                  tint(colarr[0]);
              } else if ( value == 1 ){
                  tint(colarr[1]);
              } else if ( value == 2 ) {
                  tint(colarr[2]);
              } else if ( value == 3 ) {
                  tint(colarr[3]);
              } else if ( value == 4 ) {
                  tint(colarr[4]);
              } else if ( value == 5 ) {
                  tint(colarr[5]);
              } else if ( value == 6 ) {
                  tint(colarr[6]);
              } else if ( value == 7 ) {
                  tint(colarr[7]);
              } else if ( value == 8 ) {
                  tint(colarr[8]);
              } else if ( value == 9 ) {
                  tint(colarr[9]);
              } else if ( value == 10 ) {
                  tint(colarr[10]);
              } else if ( value == 11 ) {
                  tint(colarr[11]);
              } else if ( value == 12 ) {
                  tint(colarr[12]);
              } else if ( value == 13 ) {
                  tint(colarr[13]);
              } else if ( value == 14 ) {
                  tint(colarr[14]);
              } else if ( value == 15 ) {
                  tint(colarr[15]);
              } else if ( value == 16 ) {
                  tint(colarr[16]);
              } else if ( value == 17 ) {
                  tint(colarr[17]);
              } else if ( value == 18 ) {
                  tint(colarr[18]);
              } else if ( value == 19 ) {
                  tint(colarr[19]);
              } else if ( value == 20 ) {
                  tint(colarr[20]);
              } else if ( value == 21 ) {
                  tint(colarr[21]);
              } else if ( value == 22 ) {
                  tint(colarr[22]);
              } else if ( value == 23 ) {
                  tint(colarr[23]);
              } else {
                 tint(colarr[24]); 
              }
                if (value >= 2 && value <= 24){
                image(nuimg, j * 12, i * 12, 14, 14);
              }
                }
            }
            pop();
        
}

    //2darray,images in array ,x,y,rot,scale, alpha
    function mapToTintedBitMaps(arr,imgarr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    let c;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                if ( value == 0 ) {
                nuimg = imgarr[3];
                c = color(255,100,0,fade);
                } else if ( value == 1 ){
                c = color(255,0,255,fade);
                nuimg = imgarr[2];
                } else if ( value == 2 ) {
                nuimg = imgarr[1];
                c = color(20,200,120,fade);
                } else {
                nuimg = imgarr[0];
                c = color(120,0,240,fade);
                }
            
            c = color(255,fade);
            tint(c);
            image(nuimg, j * 9, i * 9, 15, 15);
        }
    }
    pop();

    }

    function mapToColorTextBitMap(arr,imgarr, lx,ly,rot,sc,fade) {
        textSize(15);
        textAlign(CENTER);
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                if ( value == " "  ) {
                nuimg = imgarr[3];
                c = color(255,100,0,fade);
                } else if ( value == "face" ){
                c = color(255,0,255,fade);
                nuimg = imgarr[2];
                } else if ( value == "blood" ) {
                nuimg = imgarr[1];
                c = color(20,200,120,fade);
                } else {
                nuimg = imgarr[0];
                c = color(120,0,240,fade);
                }
                image(nuimg, j * 25, i * 12, 30, 15);
            }
        }
        pop();
    
    }
