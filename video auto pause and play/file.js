let body = document.body;
let autoplayVideo = document.querySelector("#autoplayVideo");
let test = document.querySelector("#test");

window.addEventListener("scroll", withPosition);

function withPosition() {
  let sy = window.scrollY;
  let vHeight = getHeight(autoplayVideo);
  let a = getTop(autoplayVideo);
  let b = a + vHeight;
  console.log({sy, a, vHeight, b, })


  if (sy >=a && sy <= b) {
    test.style.background = "green";
    autoplayVideo.play();
    test.style.transition = "1s";
    test.style.width = "50%";
    if(sy>=1900){
      test.style.width = "100%";
    }
  }
   else {
    test.style.background = "red";
    autoplayVideo.pause();
    test.style.width = "300px"

  }
}


function withBbx() {
  let bbx = autoplayVideo.getBoundingClientRect();
  let top = bbx.y;
  // console.log(top)
  let wHeight = window.innerHeight;
  console.log(wHeight)

  if (top  >= 0 && top <= wHeight) {
    autoplayVideo.play();
    autoplayVideo.setAttribute("controls", "loop");
    autoplayVideo.setAttribute("loop", "loop");
    autoplayVideo.setAttribute("autoplay", "muted");
    // test.style.background = "green";

  } else {
    autoplayVideo.pause();
  }
}

function getHeight(el) {
    return el.getBoundingClientRect().height;
  }
  
  function getTop(el) {
    return el.getBoundingClientRect().y + scrollY;
  }



