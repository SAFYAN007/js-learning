let boxes = document.querySelectorAll(".box");
let one = document.querySelector(".one");
let dip = document.getElementById("dip");
let dop = document.getElementById("dop");
// console.log(dip)
window.addEventListener("scroll", function () {
  for (box of boxes) {
    let now = box.getBoundingClientRect();
    // console.log(now.height)
    // console.log(now.y, innerHeight,now.height);
    if (now.y >= 5 && now.y < innerHeight - now.height) {
      if (box.classList.contains("box-in-view") == false) {
        
        dip.currentTime = 0;
        dip.play();
        
        
        
        box.classList.add("box-in-view");
      }
    } else {
      if (box.classList.contains("box-in-view") == true) {
        dop.currentTime = 0;
        dop.play();

        box.classList.remove("box-in-view");
      }
      // dip.pause()
    }
  }
});
