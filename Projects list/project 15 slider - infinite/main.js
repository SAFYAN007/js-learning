let slides = document.querySelectorAll(".slide");
let btn1 = document.querySelector(".one");
let btn2 = document.querySelector(".two");
let main = document.querySelector(".main");


main.innerHTML = main.innerHTML + slides[0].outerHTML;

main.innerHTML =  slides[slides.length-1].outerHTML + main.innerHTML;


let active = 0;

function activeclass() {
  if(active < 0)
  {
      setTimeout(()=>{
        active = slides.length-1;
      }, 500);
  }
  if (active > document.querySelectorAll(".slide").length - 1) {
    // active = 0;
    // main.innerHTML += mainCopy;
    // setTimeout(() => {
    //   main.innerHTML = mainCopy;
    //   active = 0;
    //   main.style.transform = `translate(0px)`;
    //   main.style.transition = "all 0s";
    //   setTimeout(() => {
    //     main.style.transition = "all linear .5s";
    //   }, 10);
    // }, 500);
  }
  main.style.transform = `translate(${-active * 1000}px)`;
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
