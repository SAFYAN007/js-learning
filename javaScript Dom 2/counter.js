let counter = document.querySelector(".counter");

let start = 0;
let counts = setInterval(update);
function update() {
  if (start < 800) {
    // start += 1;
  } else {
    // start += 0.5;
  }

  start += 10 / (start + 1);
  
  counter.innerHTML = Math.round(start);
  if (start == 1000) {
    clearInterval(counts);
    //    setInterval(1000)
  }
}
