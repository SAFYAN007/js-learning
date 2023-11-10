let repos = document.querySelector(".repos");
let input = document.querySelector(".input");
let form = document.querySelector(".user-form");
getUser("blendlight");
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let value = input.value;
  input.value = "";
  getUser(value);
});

async function getUser(username) {
  let response = await fetch("https://api.github.com/users/" + username);
  let data = await response.json();
  console.log("userdata", data);

  let sufis = document.querySelectorAll(".sufi");
  for (let sufi of sufis) {
    let from = sufi.getAttribute("data-from");
    let to = sufi.getAttribute("data-to");
    if (!to) {
      to = "innerHTML";
    }
    console.log(sufi, from, to);
    //sufi.innerHTML, sufi.src
    sufi[to] = data[from];
  }
}
