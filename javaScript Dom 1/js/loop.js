let link = document.getElementsByClassName("one");

// using for loop

// for(i=0; i<link.length; i++){
//     // console.log(link[i])
//     let chnag = link[i];
//     chnag.style.color = "red";
//     chnag.style.backgroundColor = "blue";
//     chnag.style.padding = "20px";
    
// }


// using for of loop

for(let links of link){
    let chang = links;
    chang.style.color = "red";
    chang.style.fontSize = "40px";
}