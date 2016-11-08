function setup() {
    createCanvas(800, 600)
    angleMode(DEGREES)
    rectMode(CENTER);
    textFont("Courier");
}

function draw() {
    background(0)
    translate(width / 2, height / 2);
    var h = hour();
    var m = minute();
    var s = second();

    clock(s, 60, 100, 270, 50);
    clock(m, 60, 100, 180, 75);
    clock(h, 12, 100, 90, 100);


    fill(255);
    textAlign(CENTER);
    textSize(32);
    if (s >= 0 && s <= 9) {
        text(":" +"0" + s, 40, 10);
    }else{
        text( ":" +s, 40, 10);
    }
    if (m >= 0 && m <= 9) {
        text(":" +"0" + m, -20, 10);
    }else{
        text(":" +m, -20, 10);
    }
    if (h >= 0 && h <= 9) {
        text("0" + h, -70, 10);
    }else{
        text(h, -70, 10);
    }


    for (var i = 1; i <= 12; i++) {
        push();
        stroke(240);
        strokeWeight(6);
        rotate(i * 30);
        line(140, 0, 180, 0);
        pop();
    }
}

function clock(timeValue, range, size, radius, col) {
    push()
    var angle = map(timeValue, 0, range, -90, 270)
    fill(col)
    stroke(col)
    rect(radius * cos(angle), radius * sin(angle), radius / sin(angle), radius / cos(angle));
    pop()
}
