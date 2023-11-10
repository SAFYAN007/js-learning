let fill = document.querySelector(".fill");
let empties = document.querySelectorAll(".empty");

let dragElement = null;

fill.addEventListener("dragstart", function (evt) {
  dragElement = this;
});
fill.addEventListener("dragend", function () {
  dragElement = null;
});

for (let empty of empties) {
  empty.addEventListener("dragover", function (evt) {
    evt.preventDefault();
  });

  empty.addEventListener("dragleave", function () {
    empty.style.border = "1px dotted black";
  });

  empty.addEventListener("drop", function (evt) {
    if (dragElement) {
      this.append(dragElement);
    }
  });
}
