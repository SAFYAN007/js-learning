let btn1 = document.querySelector(".btn-1");
let nav = document.getElementsByClassName(".nav");
let noteNumber = 1;
btn1.addEventListener("click", function () {
  boxCreate();
});

let data = JSON.parse(localStorage.getItem("notes"));
if(!data  || data.length==0)
{
  data = [];
  boxCreate();
}
for (let d of data) {
  boxCreate(d.body, d.title);
}

function boxCreate(text = "", title = null) {
  let note = document.createElement("div");
  note.classList.add("note");
  if (title == null) {
    title = `note ${noteNumber++}`;
  }
  note.innerHTML = `<div class="box-1">
    <div class="nav">
      <input class="title-input" style="display: none;" value='${title}' />
      <h1 class="title">${title}</h1>
      <div class="icon">
        <button class="btn-undo">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn-del"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
    <div class="one" ${text ? "" : "hidden"}></div>
      <textarea
        name=""
        id=""
        cols="20"
        rows="10"
        class="input ${text ? "hidden" : ""}"
      >${text}</textarea>
  </div>`;

  ///moin
  let titleInput = note.querySelector(".title-input");
  let titleElement = note.querySelector(".title");



  titleElement.addEventListener("dblclick", function () {
    titleInput.style.display = "block";

    //set cursor position
    //find end position
    let end = titleInput.value.length;
    titleInput.setSelectionRange(end, end);

    titleInput.focus();

    titleElement.style.display = "none";
  });

  titleInput.addEventListener("focusout", function () {
    titleInput.style.display = "none";
    titleElement.innerHTML = titleInput.value;
    titleElement.style.display = "block";
    saveToLocalStorage();
  });

  ///moin

  //   nav.
  let container = document.querySelector(".container");
  let box1 = document.querySelector(".box-1");
  //   let btnDel = note.querySelector(".btn-del");
  let btnDel = note.querySelector(".btn-del");
  let input = note.querySelector(".input");
  let btnUndo = document.querySelector(".btn-undo");

  input.addEventListener("change", function(){
    saveToLocalStorage();
  });

  btnDel.addEventListener("click", function () {
    note.remove();
    saveToLocalStorage();
  });
  // btnUndo.addEventListener("click",function(){
  //     note.remove();
  //   })
  let notes = document.querySelector(".notes");
  notes.append(note);
}

function saveToLocalStorage() {
  let notes = [];
  let notesEl = document.querySelectorAll(".note");
  for (let noteEl of notesEl) {
    let title = noteEl.querySelector(".title").innerText;
    let body = noteEl.querySelector(".input").value;
    notes.push({ title, body });
  }

  let json = JSON.stringify(notes);
  localStorage.setItem("notes", json);
  console.log("saved", json);
}
