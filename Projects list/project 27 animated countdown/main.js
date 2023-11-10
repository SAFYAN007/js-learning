let nums = document.querySelectorAll(".nums span");
let counter = document.querySelector(".counter");
let final = document.querySelector(".final");
let replay = document.querySelector(".replay");
// console.log(nums)

animation();

function reset (){
    counter.classList.remove("hide")
    final.classList.remove("show")
    nums.forEach((num)=>{
        num.classList.value = ""
    })
    nums[0].classList.add("in")
}

function animation (){

    nums.forEach((num,idx)=>{
        let nl = nums.length -1;
        num.addEventListener("animationend",function(e){
            // console.log(v)
            if(e.animationName === "goIn" && idx !== nl){
                num.classList.remove("in")
                num.classList.add("out")
            }else if (e.animationName === "goOut" && num.nextElementSibling){
                num.nextElementSibling.classList.add("in")
            }else{
                counter.classList.add("hide");
                final.classList.add("show")
            }
        })
    })

}
replay.addEventListener("click",function(){
    reset();
    // animation();
})
