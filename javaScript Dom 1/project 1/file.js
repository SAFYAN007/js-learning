let button = document.querySelector("button");
// console.log(button)
let body = document.body;
// console.log(body)
let rgb = document.querySelector(".rgba")


function colorGenerate(){
    let red = Math.floor(Math.random() *256);
    let green =Math.floor( Math.random() *256);
    let blue =Math.floor( Math.random() *256);
    let randomColor = `rgba(${red},${green},${blue})`;
    return randomColor;
}

button.addEventListener("click", function(){
    let result = colorGenerate();
    // console.log(colorGenerate)
    body.style.backgroundColor = result;
    rgb.textContent = result;

})