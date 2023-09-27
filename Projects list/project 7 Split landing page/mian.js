let left = document.querySelector(".left");
let right = document.querySelector(".right");
// console.log(left)
 left.addEventListener("mouseenter",function(){
    left.style.width = "75%";
    right.style.width = "25%";
 })
 right.addEventListener("mouseenter",function(){
    right.style.width = "75%";
    left.style.width = "25%";
 })