function textChange(element, text, color, time) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject();
      }
    }, time);
  });

  return promise;
}

let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let heading3 = document.querySelector(".heading3");
let heading4 = document.querySelector(".heading4");
let heading5 = document.querySelector(".heading5");
let heading6 = document.querySelector(".heading6");
let heading7 = document.querySelector(".heading7");
let heading8 = document.querySelector(".heading8");
let heading9 = document.querySelector(".heading9");
let heading10 = document.querySelector(".heading10");


async function changeAllText() {
  await textChange(heading1, "one", "red", 1000);
  await textChange(heading2, "two", "green", 1000);
  await textChange(heading3, "three", "blue", 1000);
  await textChange(heading4, "four", "grey", 1000);
  await textChange(heading5, "five", "yellow", 1000);
  await textChange(heading6, "six", "orange", 1000);
  await textChange(heading7, "seven", "cyan", 1000);
  await textChange(heading8, "eight", "purple", 1000);
  await textChange(heading9, "nine", "skyblue", 1000);
  await textChange(heading10, "ten", "red", 1000);
}
