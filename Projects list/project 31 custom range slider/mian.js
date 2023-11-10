let dot = document.querySelector(".dot");
let bar = document.querySelector(".bar");

let mousedown = false;
dot.addEventListener("mousedown", function () {
  mousedown = true;
});

document.addEventListener("mouseup", function(){
    mousedown = false;
});

document.addEventListener("mousemove", function (evt) {
  if (mousedown) {
    let x = evt.clientX;
    let y = evt.clientY;
    let bbx = bar.getBoundingClientRect();

    let diffx = x-bbx.x;

    if(diffx < 0)
    {
        diffx = 0;
    }

    if(diffx+20 > bbx.width)
    {
        diffx = bbx.width-20;
    }

    // diffx = Math.min(diffx-20, bbx.width);
    // diffx = Math.max(diffx, 0);
    dot.style.transform = `translateX(${diffx}px)`;
  }
});
