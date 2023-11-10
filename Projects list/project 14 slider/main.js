let slides = document.querySelectorAll(".slide");
let btn1 = document.querySelector(".one");
let btn2 = document.querySelector(".two");

let active = 0;
one();
function one (){
    if(active >= slides.length){
        active = 0
    }
    if(active < 0 ){
        active = slides.length-1;
    }
    for(let slide  of slides){
        slide.classList.remove("active");
    }
    slides[active].classList.add("active")
}




btn1.addEventListener("click",function(){
    active --;
    one()
})

btn2.addEventListener("click",function(){
    active ++;
    one()
})
