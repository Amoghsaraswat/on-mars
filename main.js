canvas = document.getElementById("three");
ctx = canvas.getContext("2d");
rw = 100;
rh = 90;
bi = "mars.jpg";
ri = "rover.png";
rx = 10;
ry = 10;

function Add() {
    bit = new Image();
    bit.onload = ub;
    bit.src = bi;
    rit = new Image();
    rit.onload = ur;
    rit.src = ri;
}

function ub() {
    ctx.drawImage(bit, 0, 0, 800, 600);
}

function ur() {
    ctx.drawImage(rit, rx, ry, rw, rh);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (ry >= 0) {
        ry = ry - 10;
        console.log("When up arrow is pressed, x = " + rx + " | y = " + ry);
       ub();
        ur();
    }
}

function down() {
    if (ry <= 500) {
        ry = ry + 10;
        console.log("When down arrow is pressed, x = " + rx + " | y = " + ry);
        ub();
        ur();
    }
}

function left() {
    if (rx >= 0) {
        rx = rx - 10;
        console.log("When left arrow is pressed, x = " + rx + " | y = " + ry);
        ub();
        ur();
    }
}

function right() {
    if (rx <= 700) {
        rx = rx + 10;
        console.log("When right arrow is pressed, x = " + rx + " | y = " + ry);
        ub();
        ur();
    }
}
