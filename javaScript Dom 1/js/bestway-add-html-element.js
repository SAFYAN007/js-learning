let newElement = document.createElement("li");
let addElement = document.createElement("li");
console.log(newElement)
newElement.textContent = "new todo";

// use append
let todo = document.querySelector(".todo-list");
todo.append(newElement);

// use prepend
// addElement.textContent = "start"
// todo.prepend(addElement);


// uses after 
// and
// before
                                   
                        // after
// let createElement = document.createElement("li");
// createElement.textContent = "todo 2";
// let todo = document.querySelector(".todo-list");
// todo.after(createElement);

                        // before
// let createElement = document.createElement("li");
// createElement.textContent = "todo 2";
// let todo = document.querySelector(".todo-list");
// todo.before(createElement);



 


  