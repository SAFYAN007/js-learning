let list = document.getElementById("list");
let todoform = document.getElementById("todoform");
let int = document.getElementById("input");


todoform.onclick = function(event) {
    event.preventDefault();
    if(input.value == "");
    else{
        list.innerHTML = list.innerHTML + "<li>" + input.value + "</li>";
        int.value = "";
    }
    int.focus ();
}
    



