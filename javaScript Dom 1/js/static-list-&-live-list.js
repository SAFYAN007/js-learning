//Query selectorAll hamy static list dy gi.


// let Lis = document.querySelectorAll(".todo-list li");
// console.log(Lis);
// let addLi = document.createElement("li");
// addLi.textContent = "Todo 6";
// let ul = document.querySelector(".todo-list");
// ul.append(addLi);


//get Elwmentsby Something hmy live list dy gi.
let ul = document.querySelector(".todo-list");
let Lis = ul.getElementsByTagName("li");
let addLi = document.createElement("li");
addLi.textContent = "Todo 6";
ul.append(addLi);
console.log(Lis);

