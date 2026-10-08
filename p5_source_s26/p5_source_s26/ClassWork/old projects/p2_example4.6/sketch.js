// This example used the same UFO class with minor additions
// the main diffference is the use of an array to create multiple objects.
// Each object is birthed and stored as an item in the array.
// Also the ufo class itself is contained in its own file "ufo.js"
let ufoArr = new Array(5);

function setup() {
    createCanvas(800, 800);
    noStroke();
    let col;
    for (let i = 0; i < ufoArr.length; i++) {
        col = color(random(50, 100));
        ufoArr[i] = new UFO(col, random(width), height / 2, "Bleep");
    }

}

function draw() {
    background(255);
    for (let i = 0; i < ufoArr.length; i++) {
        ufoArr[i].update();
        ufoArr[i].display();
    }
    crossMarks();

}

function mousePressed() {

    //println("changing");
    for (let i = 0; i < ufoArr.length; i++) {
        ufoArr[i].newDirection();
    }

}


function crossMarks() {
    stroke(0);
    strokeWeight(3);

    push();
    translate(30, 30);
    line(0, 0, 20, 0);
    line(0, 0, 0, 20);
    pop();

    push();
    translate(width - 30, 30);
    rotate(radians(90));
    line(0, 0, 20, 0);
    line(0, 0, 0, 20);
    pop();


    push();
    translate(30, height - 30);
    rotate(radians(-90));
    line(0, 0, 20, 0);
    line(0, 0, 0, 20);
    pop();

    push();
    translate(width - 30, height - 30);
    rotate(radians(-180));
    line(0, 0, 20, 0);
    line(0, 0, 0, 20);
    pop();

}
