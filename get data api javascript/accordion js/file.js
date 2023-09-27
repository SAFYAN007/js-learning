// let titles = document.querySelectorAll(".accordion-title");

// for (let title of titles) {
//   console.log(title);
//   title.onclick = function () {

//     //remove active from all elements
//     for(let title2 of titles)
//     {
//         let parent = title2.parentElement;
//         parent.classList.remove("active");

//     }



//     let parent = title.parentElement;
//     parent.classList.add("active");
//   };
// }


let titles = document.querySelectorAll (".accordion-title");

for(let title of titles){
    title.onclick = function(){
        let parent = title.parentElement;
        // let j
        parent.classList.add("active");
    }
    let parent = title1.parentElement;
    // let j
    parent.classList.remove("active");
}
 
// console.log(title)