let head = document.querySelector("h1");
let input = document.querySelector("input");
// console.log(input);
let text = "We Love Programing"
let idx = 1;
let speed = 500/2
textSpeed();
function textSpeed (){
    head.innerHTML = text.slice(0,idx);
    idx ++;
    if(idx > text.length){
        idx = 0;
    }
    setTimeout(textSpeed,speed)

}
input.addEventListener("input",function(){
    speed = input.value
})
