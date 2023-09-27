function textChange (element,text,color,time,onSuccesCallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
        element.textContent = text;
        element.style.color = color;
        if(onSuccesCallback){
            onSuccesCallback();}
        }else{
            if(onFailureCallback){
                onFailureCallback()
            }
        }
    },time);
}


let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let heading3 = document.querySelector(".heading3");
let heading4 = document.querySelector(".heading4");
let heading5 = document.querySelector(".heading5");
let heading6 = document.querySelector(".heading6");
let heading7 = document.querySelector(".heading7");
let heading8 = document.querySelector(".heading8");
let heading9 = document.querySelector(".heading9");
let heading10 = document.querySelector(".heading10");

textChange(heading1,"one","red","1000",()=>{
    textChange(heading2,"two","green","1000",()=>{
        textChange(heading3,"three","blue","1000",()=>{
            textChange(heading4,"four","cyan","1000",()=>{
                textChange(heading5,"five","brown","1000",()=>{
                    textChange(heading6,"six","purple","1000",()=>{
                        textChange(heading7,"seven","grey","1000",()=>{
                            textChange(heading8,"eight","black","1000",()=>{
                                textChange(heading9,"nine","orange","1000",()=>{
                                    textChange(heading10,"ten","silver","1000",()=>{},
                                    ()=>{console.log("heading1 does not exist")})
                                },()=>{console.log("heading1 does not exist") })
                            },()=>{console.log("heading1 does not exist")})},
                            ()=>{console.log("heading1 does not exist")})
                    },()=>{ console.log("heading1 does not exist") })
                },()=>{console.log("heading1 does not exist") })
            },()=>{console.log("heading1 does not exist")})
        },()=>{console.log("heading1 does not exist")})
    },()=>{console.log("heading1 does not exist")})
},()=>{console.log("heading1 does not exist")})