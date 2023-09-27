let  button = document.getElementById("btn");
let  list = document.querySelector(".list")


button.addEventListener("click", function(){
    // alert("hello");
    if(list.style.display =="none"){
        list.style.display = "block"
        list.style.transition = "1s"
    }else(
        list.style.display = "none"
    )
})



