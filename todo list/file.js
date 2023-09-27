let list = document.getElementById("list");
let todoform = document.getElementById("todoform");
let int = document.getElementById("input");

let data = [];

for (let item of data) {
  list.innerHTML += "<li>" + item + " <button onclick='removeTodo(this)' >&times;</button> </li>";
}

todoform.onclick = function (event) {
  
  event.preventDefault();
  if (input.value == ""){
    alert("Empty!!!")
  }
  else {
    data.push(input.value);
    list.innerHTML +=  "<li>" + input.value + "<button onclick='removeTodo(this)' >&times;</button> </li>";
    int.value = "";
  }
  int.focus();
};

function removeTodo( btn )
{
    // btn.parentElement.remove();
    let li = btn.parentElement;
    li.remove();
}
