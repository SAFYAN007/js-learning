// widget funstions
let btn = document.querySelector(".widget-btn");
let input = document.querySelector(".widget-input");

btn.addEventListener("click", function () {
  input.classList.toggle("active");
  btn.classList.toggle("btn-active");
});
// slider functions
let slides = document.querySelectorAll(".slide");
let btn1 = document.querySelector(".one");
let btn2 = document.querySelector(".two");
let main = document.querySelector(".slider-main");

main.innerHTML = main.innerHTML + slides[0].outerHTML;

main.innerHTML = slides[slides.length - 1].outerHTML + main.innerHTML;

let active = 0;

function activeclass() {
  if (active < 0) {
    setTimeout(() => {
      active = slides.length - 1;
    }, 500);
  }
  if (active > document.querySelectorAll(".slide").length - 1) {
  }
  main.style.transform = `translate(${-active * 100}%)`;
}

btn1.addEventListener("click", function () {
  console.log("--");
  active--;
  activeclass();
});

btn2.addEventListener("click", function () {
  console.log("++");
  active++;
  activeclass();
});

// sticky functions

let navbar = document.querySelector(".navbar");
// console.log(navbar)
window.addEventListener("scroll",function(){
    let x = window.scrollY;
    console.log(x)
    if(x >= 150){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky")
    }
})