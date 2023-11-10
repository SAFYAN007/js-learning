let container = document.querySelector(".container");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let imgs = document.querySelectorAll("img");
// console.log(imgs)

let idx = 0;
let interval = setInterval(slide, 2000);

function slide ( ){
    run();
    idx ++;
}

function run(){
    for(let img of imgs){
        console.log(img)
        if(idx > imgs.length -1){
            idx = 0;
        }else if(idx < 0){
            idx = imgs.length -1
        }
        img.style.transform = `translateX(${-idx * 500}px)`
    }
}



next.addEventListener("click",function(){
    idx ++;
    if(idx > imgs.length -1){
        idx = 0;
    }else if(idx < 0){
        idx = imgs.length -1
    }
    for(let img of imgs){
    img.style.transform = `translateX(${-idx * 500}px)`

    }
})

prev.addEventListener("click",function(){
    idx --;
    if(idx > imgs.length -1){
        idx = 0;
    }else if(idx < 0){
        idx = imgs.length -1
    }
    for(let img of imgs){
        img.style.transform = `translateX(${-idx * 500}px)`
        }
})
