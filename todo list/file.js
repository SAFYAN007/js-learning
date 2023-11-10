let list = document.getElementById("list");
let todoform = document.getElementById("todoform");
let int = document.getElementById("input");

let data = JSON.parse( localStorage.getItem("todos") );

// let data = ["Hello", "Wolrd", "Dont","Mind"]

showTodos();
function showTodos() {
  list.innerHTML = "";

  for (let i=0;i<data.length;i++) {
    let item = data[i];
    list.innerHTML +=
      "<li>" +
      item +
      "<button onclick='removeTodo(this, "+i+")' >&times;</button> </li>";
  }
}

function saveToLocalStorage(){
    localStorage.setItem("todos", JSON.stringify(data));
}

todoform.addEventListener("click", function (event) {
  event.preventDefault();
  if (input.value == "") {
  } else {
    data.push(input.value);
    showTodos();
    int.value = "";
  }
  int.focus();
  saveToLocalStorage();

});

function removeTodo(btn, index) {
  data.splice(index, 1);
  showTodos();
  saveToLocalStorage();
}
