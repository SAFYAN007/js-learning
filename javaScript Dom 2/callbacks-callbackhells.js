                                       //CallBack-hells

let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let heading3 = document.querySelector(".heading3");

setTimeout(() => {
    heading1.textContent = "Hello";
    heading1.style.backgroundColor = "purple";
    heading1.style.color = "white";
    setTimeout(() => {
        heading2.textContent = "Hello";
        heading2.style.backgroundColor = "red";
        heading2.style.color = "white";
        setTimeout(() => {
            heading3.textContent = "Hello";
            heading3.style.backgroundColor = "black";
            heading3.style.color = "white";        
        }, 1000);
    
    }, 1000);

}, 1000);
