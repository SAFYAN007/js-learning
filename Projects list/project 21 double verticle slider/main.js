let slideC = document.querySelector(".slide");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let btnDown = document.querySelector(".btn-down");
let btnUp = document.querySelector(".btn-up");
let slideLength = document.querySelectorAll(".right div").length;
// console.log(slideLength)
let activeIndex = 0;

btnUp.addEventListener("click", () => changeSlide("up"));
btnDown.addEventListener("click", () => changeSlide("down"));

let changeSlide = (direction) => {
  let slideHeigth = slideC.clientHeight;
  if (direction === "up") {
    activeIndex++;
    if (activeIndex > slideLength - 1) {
      activeIndex = 0;
    }
  } else if (direction === "down") {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = slideLength - 1;
    }
  }
  right.style.transform = `translateY(-${activeIndex * slideHeigth}px)`;
  left.style.transform = `translateY(${activeIndex * slideHeigth}px)`;
};
