let form = document.querySelector("form");
let todoInput = document.querySelector("form input[type=text]");
let ul = document.querySelector(".todo-list")
form.addEventListener("submit",function(e){
    e.preventDefault();
    let NewElement = document.createElement("li");
    let newList = `        
    <span>${todoInput.value}</span>
    <div class="buttons">
    <button class="Done button">Done</button>
    <button class="remove button">Remove</button>
    `;
    NewElement.innerHTML = newList;
    console.log(NewElement)
    ul.append(NewElement);
    // ul.append(NewElement);
    todoInput.value = "";

    ul.addEventListener("click", function(e){
        if(e.target.classList.contains("done")){
            let one = e.target.parentNode.parentNode;  
            one.style.textDecoration = "line-through";
        }
        if(e.target.classList.contains("remove")){
            let remove = e.target.parentNode.parentNode;
            remove.remove();
        }
    })

});













