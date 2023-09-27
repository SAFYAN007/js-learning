let btn  = document.querySelector(".bton");

// MouseOver Event

btn.addEventListener("mouseover",function(){
    console.log("Mouse Over !!!!")
    btn.style.color = "red"
    btn.style.fontSize = "20px";
    btn.style.cursor = "pointer";
})

//MouseLeave Event

btn.addEventListener("mouseleave",function(){
    btn.style.color = "blue"
    btn.style.fontSize = "10px"
    console.log("Mouse leave !!!!");

})