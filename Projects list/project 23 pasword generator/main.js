let lengthInp = document.querySelector("#length");
let upperInp = document.querySelector("#upper");
let lowerInp = document.querySelector("#lower");
let numberInp = document.querySelector("#number");
let password = document.querySelector("#password");
let clipboard = document.querySelector("#clipboard");
let btnCreateInp = document.querySelector("#btn-create");

btnCreateInp.addEventListener("click", generateRandom);

generateRandom();

clipboard.addEventListener("click", function () {
  navigator.clipboard.writeText(password.innerHTML).then(() => {
    alert("Done");
  });
});

function generateRandom() {
  let randomFns = {
    lower: low,
    upper: upp,
    number: num,
  };

  password.innerHTML = "";
  let fnNames = Object.keys(randomFns); //get array of keys from object
  fnNames = fnNames.filter((item) => {
    if (item == "lower" && lowerInp.checked) {
      return true;
    }
    if (item == "upper" && upperInp.checked) {
      return true;
    }

    if (item == "number" && numberInp.checked) {
      return true;
    }

    return false;
  });

  for (let i = 0; i < +lengthInp.value; i++) {
    //get random index
    let index = Math.floor(Math.random() * fnNames.length);
    let fnName = fnNames[index];
    //get function from object
    let selectedFn = randomFns[fnName];
    password.innerHTML += selectedFn();
  }
}

function low() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function upp() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function num() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
