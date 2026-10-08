//Example 2.4.1
// Intro to Arrays
// 0,1,2,3 is always the way an array list is counted.
let xlist = [30, 140, 240, 300];             
let ylist = [150, 170, 190, 240];
let foods = ["pizza", "pinepple","passionfruit","potato"];

function setup() {
    createCanvas(700, 500);
    background(50);
    textSize(20);
    fill(255);
    // getting the first or '0' item 
    text(xlist[0] +  " is the first item in the xlist array" , 50, 50);
    // setting or updating the '0' item
    xlist[0] = 60; 
    text(xlist[0] +  " is NOW the first item in the xlist array" , 50, 80);
    // getting the '3' item 

    text(ylist[3] +  " is the last item in the ylist array" , 50, 110);
  

     // length is the number of items in an array
    for (let i = 0; i < xlist.length; i++) { 
        fill(255,0,0);
        rect(xlist[i],ylist[i],10,10);    
    }

    for (let i = 0; i < foods.length; i++) {   
        fill(210,100,200);
        text(foods[i] +  " is now being served." , xlist[i],ylist[i] + 150);    
    }

}


