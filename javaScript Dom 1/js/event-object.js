let allButton = document.querySelectorAll(".all button");

for (let btn of  allButton){
btn.addEventListener("click",(e)=>{
    num = 0;
    for(i=0; i<=10000000;i++){
        num += i;
    }
    console.log(e.currentTarget.textContent)
})}
