let form = document.querySelector("form");
let todoInput = document.querySelector("form input[type=text]");
let ul = document.querySelector(".todo-list")

let data = [
    "Hello",
    "Hello1",
    "Hello2",
    "Hello3",
];

form.addEventListener("submit",function(e){
    data.push(todoInput.value);
    update();
    e.preventDefault();
});
function update(e){
    
    todoInput.value = "";    
    // ul.innerHTML = "";
    for(deta of data){
        let li = document.createElement("li");
        li.append(deta);
        ul.append(li)
    }
}
    update();
    























// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     let NewElement = document.createElement("li");
//     let newList = `        
//     <span>${todoInput.value}</span>
//     <div class="buttons">
//     <button class="Done button">Done</button>
//     <button class="remove button">Remove</button>
//     </div>
//     `;
//     NewElement.innerHTML = newList;
//     console.log(NewElement)
//     ul.append(NewElement);
//     // ul.append(NewElement);
//     todoInput.value = "";

//     ul.addEventListener("click", function(e){
//         if(e.target.classList.contains("done")){
//             let one = e.target.parentNode.previousElementSibling;  
//             one.style.textDecoration = "line-through";
//         }
//         if(e.target.classList.contains("remove")){
//             let remove = e.target.parentNode.parentNode;
//             remove.remove();
//         }
//     })

// });













