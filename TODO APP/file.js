let frm = document.getElementById("frm");
let inpt = document.getElementById("inpt");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

// console.log(frm)

list.innerHTML += "<li>hello</li>";
// console.log(list)

btn.onclick = function (event) {
  event.preventDefault();
  alert("Hello");
};
