let colorEl = document.getElementById("color");


let sizeEl = document.getElementById("size");

let canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");



let pressed = false;
//clicked position
let x, y;
canvas.addEventListener("mousedown", function (e) {
  pressed = true;
  x = e.offsetX;
  y = e.offsetY;
  console.log(pressed, x, y);
  // drawLine(x,y)
});
canvas.addEventListener("mousemove", function (e) {
  if (pressed) {
    //moved position
    let x2 = e.offsetX;
    let y2 = e.offsetY;
    drawCircle(x2,y2)
    drawLine(x, y, x2, y2);
    
    //set click position to move postion
    x = x2;
    y = y2;
  }
});

canvas.addEventListener("mouseup", function (e) {
  pressed = false;
  x = undefined;
  y = undefined;
});

let size = 5;
let color = "black";
sizeEl.addEventListener("change",function(){
  size = sizeEl.value;
})

colorEl.addEventListener("change", function(){
    color = colorEl.value;
});


function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(a, b, c, d) {
  ctx.beginPath();
  ctx.moveTo(a, b);
  ctx.lineTo(c, d);
  ctx.strokeStyle = color;
  ctx.lineWidth = size*2;
  ctx.stroke();
}
// drawLine(300,300,300,100);
