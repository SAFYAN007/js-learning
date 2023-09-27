let btn = document.querySelector(".btn");
let Njoke = document.querySelector(".joke");
// console.log(joke)

helo();
function helo() {
  btn.disabled = true;
  fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      btn.disabled = false;
      Njoke.innerHTML = data.joke;
    }).catch(error => {
        console.log(error);
        btn.disabled = false;
    })
}
btn.addEventListener("click", function () {
  helo();
});