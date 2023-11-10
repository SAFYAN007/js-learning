let container = document.querySelector(".container");
for (let i = 1; i <= 500; i++) {
  let div = document.createElement("div");
  div.classList.add("same");
  container.appendChild(div);

  div.addEventListener("click", function () {
    markAll();
  });
  div.addEventListener("mouseover", function () {
    div.style.background = genColor();
    div.style.transitionDuration = "0s";
  });

  div.addEventListener("mouseleave", function () {
    div.style.background = "";
    div.style.transitionDuration = "1s";
  });
}

function markAll() {
  let divs = container.querySelectorAll(".same");
  for (let div of divs) {
    div.style.transitionDuration = "0s";
    div.style.background = genColor();
    setTimeout(() => {
      div.style.background = "";
      div.style.transitionDuration = 1 + "s";
    }, 50);
  }
}

function genColor() {
  let code = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += code[Math.floor(Math.random() * 16)];
  }
  return color;
}
