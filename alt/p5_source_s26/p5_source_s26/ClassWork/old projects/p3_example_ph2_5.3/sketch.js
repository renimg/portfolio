// example 5.2

// This uses the transformation matrix tools to move,
//rotate and scale things as batch operations
  // 11 x 11
let gridarr1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
    [0, 0, 1, 1, 0, 0, 0, 1, 1, 0,0],
    [0, 0, 3, 1, 0, 0, 0, 3, 1, 0,0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0,0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0,0],
    [0, 0, 0, 0, 1, 2, 1, 0, 0, 0,0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0],
    [0, 0, 2, 2, 2, 2, 2, 2, 2, 0,0],
    [0, 0, 0, 2, 2, 2, 2, 2, 0, 0,0],
    [0, 0, 0, 0, 2, 2, 2, 0, 0, 0,0]
];

let gridarr2 = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0,2],
    [1, 0, 1, 2, 0, 0, 0, 1, 1, 0,2],
    [1, 0, 3, 2, 0, 0, 0, 3, 1, 0,2],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0,2],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0,2],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0,2],
    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0,2],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0,2],
    [1, 0, 2, 1, 2, 2, 2, 1, 2, 0,2],
    [1, 0, 0, 1, 2, 2, 2, 1, 0, 0,2],
    [1, 0, 0, 0, 2, 2, 2, 0, 0, 0,2]
];

    // 11 x 10
    let textarr = [
        ["money","money", "money", "money", "money", "money" , "money",  "money",  "money", "money"],
        ["money","one", "money", "money", "george", "money" , "money",  "money",  "one", "money"], 
        ["money","one", "money", "george", "george", "george" , "money",  "money",  "one", "money"],
        ["money","money", "money", "george", "george",  "george" , "money",  "money",  "money", "money"],
        ["money","money", "money", "george",  "george",  "george",   "money",  "money",  "money", "money"],
        ["money","money", "money", "george",  "george",  "george",   "money",  "money",  "money", "money"],
        ["money","money", "money", "george",  "george",  "george",   "blood",  "money",  "money", "money"],
        ["money","money", "money", "george",  "george",  "george",  "blood",  "blood",  "money", "money"],
        ["money","one", "money", "george", "george", "george",  "blood",  "blood",  "one", "money"],
        ["money","one", "money", "money", "george", "blood",  "money",  "money",  "one", "money"],
        ["money","money", "money", "money", "money", "blood",  "money",  "money",  "money", "money"]
    ];

let font1;
let images =[];

let currentPage = 0;

function preload()  {
       font1 = loadFont('assets/oswald.ttf');
       images[0] = loadImage('assets/pizza.png');
       images[1] = loadImage('assets/pineapple.png');
       images[2] = loadImage('assets/tomato.png');
       images[3] = loadImage('assets/mushroom.png');
}

function setup() {
     createCanvas(1100, 800);
     background(0, 60, 150);
     fill(100);
     textAlign(LEFT);
     textFont(font1);
      
}

function draw() {
    background(40,90);

    if (currentPage == 0) {   // intro and title
      
        push();
        translate(80,100);
        fill(200);
        textSize(40);
        text ("My groups members were Stan R, Linda L, and Every S ",0 ,0, 800 );
        translate(0,130);
        text ("I have 8 different mapped images, using both arrays, then another 2 versions with others arrays .",0 ,0,800 );
        translate(0,150);
        text ("Press 1,2,3 to see 3 different pages.",0 ,0,800 );
        translate(0,100);
        text ("(All images are placeholders and not to be directly copied, \n  make sure you check the technical details for all the reuirements.)",0 ,0,900 );

        
        translate(740,140);
        mapToColorPixels(gridarr1, 0, 0, 0, .85, 255);
        pop();


    } else if (currentPage == 1) {

      //2darr, x,y,rot,scale, alpha
      mapToMonoPixels(gridarr1, 430, 320, 0, 4, 40);
      mapToMonoPixels(gridarr1, 30, 220, -45, 2, 255);
      mapToMonoPixels(gridarr1, 580, 20, 20, 1.25, 100);
      mapToColorText(textarr, 450, 450, -15, 2.45, 175);
      mapToColorText(textarr, 250, 350, -15, 0.45, 200);
      mapToColorPixels(gridarr1, 320, 360, 45, 2.15, 255);

      push();
      translate(100,30);
      fill(200);
      textSize(22);
      let t = "Show your arrays and maps from Phase 1. \n This should be 2 arrays, mapped a total of six different ways or views."
      text(t,0,0,570);  // the 4th argument is the textWidth per line.
      pop();
 

    } else if (currentPage == 2) {

     mapToColorShapes(gridarr2, -30, 0, 0, 9, 8);
     mapToColorPixels(gridarr1, 520, 260, 45, 2.15, 255);
     mapToColorShapes(gridarr2, 120, 480, 0, 0.65, 255);
    //  mapToColorShapes(gridarr2, 270, 180, -25, 1.2, 120);
     mapToColorText(textarr, 10, 350, 10, 1.55, 255); 

     push();
     translate(40,50);
     fill(200);
     textSize(20);
     let t = "Put here two or more mapped views of your own arrays.  With any additional arrays or additional map views, not seen in phase 1."
     text(t,0,0,300);
     pop();

    } else if (currentPage == 3) {

        mapToTintedBitMaps(gridarr2,images, -400, 0, -20, 10.85,7);
        mapToBitMaps(gridarr2,images, 100, 130, -3, 1.55);
        mapToTintedBitMaps(gridarr2,images, 400, 120, 0, 2.85,190);
        push();
        translate(40,50);
        fill(200);
        textSize(20);
        let t = "Get 2 more arrays from class partners, and use your mapping function ideas from previous 2 pages, Then show their arrays.";
        t += "\n";   // this is a command you can put in text to create a line break.
        t += "..and them some.";
        text(t,0,0,400);
        pop();

    } else {  // optional for  4th page

    }



}


function keyPressed() { 

  
    //console.log(key);
     // or 
    if ( key == '1' ) { 
      console.log("Page 1");
      currentPage = 1;

     } else if ( key == '2' ) { 
        console.log("Page 2");
        currentPage = 2;
        
     } else if ( key == '3' ) { 
        console.log("Page 3");
        currentPage = 3;   
     } else {
        currentPage = 0;

     }
  
    }



/*

These map functions are just place holders,  use them , modify and expand on them to make them useful.
Add your own arrays, and other working partners arrays as well.

*/



          //2darr, x,y,rot,scale, alpha
function mapToMonoPixels(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 128, fade);
            rect(j * 12, i * 12, 10, 10);
        }
    }
   pop();

}

         //x,y,rot,scale, alpha
function mapToColorPixels(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(200,70,0, fade);
              } else if ( value == 1 ){
                  fill(0, fade);
              } else if ( value == 2 ) {
                  fill(90,30,90, fade);
              } else {
                 fill(20,220,250, fade); 
        
              }
            rect(j * 12, i * 12, 10, 10);
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

function mapToColorText(arr,lx,ly,rot,sc,fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == "money" ) {
                  fill(20,170,0, fade);
              } else if ( value == "blood" ){
                  fill(200,0,30, fade);
              } else {
                  fill(255, fade);
              }
               text(value, j * 35, i * 10,100);
               //rect( j * 35, i * 10,100,100);
        }
    }
    pop();

}

                            //2darray,images in array ,x,y,rot,scale, alpha
 function mapToBitMaps(arr,imgarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                        nuimg = imgarr[0];
                      } else if ( value == 1 ){
                        nuimg = imgarr[2];
                      } else if ( value == 2 ) {
                        nuimg = imgarr[1];
                      } else {
                        nuimg = imgarr[3];
                      }
                    image(nuimg, j * 12, i * 12, 14, 14);
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
