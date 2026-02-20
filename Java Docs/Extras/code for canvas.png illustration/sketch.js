function setup() 
{
    createCanvas(600, 600);
}

function draw()
{
    background(240);
    translate(100, 100);

    noFill(); 
    strokeWeight(2);
    stroke(170);
    rect(0, 0, 400, 400);

    stroke(0);
    line(0,0,0,400);

    line(0,0,400,0);

    fill(0);
    triangle(0, 400, -5, 390, 5, 390);
    triangle(400,0, 390, -5, 390, 5);

    strokeWeight(1);
    textAlign(CENTER, CENTER);
    text("x", 410, 0);
    text("y", 0, 410);

    text("(25, 25)", 440, 405);
    text("(0,0)", -25, -5);

    textSize(16)
    text("width = 25", 200, -15);

    rotate(-HALF_PI);
    text("height = 25", -200, -15)
    rotate(HALF_PI);

    strokeWeight(0.5);
    for(let y = 0; y < 25; y++) {
        line(0, y*16, 400, y*16);
    }
    for(let x = 0; x < 25; x++) {
        line(x*16, 0, x*16, 400);
    }

    circle(400,400,7);

    circle(0,0,7);

}
