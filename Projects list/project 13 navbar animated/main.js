let btn = document.querySelector(".btn");
let nav = document.querySelector(".nav");
let li = document.querySelector("li");
let ul = document.querySelector("ul");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");

btn.addEventListener("click",function(){
    nav.classList.toggle("active");
    ul.classList.toggle("active");
    line1.classList.toggle("active");
    line2.classList.toggle("active");
})  
