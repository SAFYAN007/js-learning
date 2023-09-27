let body = document.body;
let button = document.querySelector("button")


let one = setInterval(function(){
    let red = Math.floor(Math.random()*105);
    let green = Math.floor(Math.random()*105);
    let blue = Math.floor(Math.random()*105);
    let rgb = `rgb(${red},${green},${blue})`;
    // console.log(rgb)
    body.style.background = rgb;
},1000);

button.addEventListener("click",function(){
    button.textContent= body.style.background + "continued";
    clearInterval(one);
})
button.addEventListener("click",function(){
    // button.textContent= body.style.background;
    setInterval(one)
})
