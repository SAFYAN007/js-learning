function textChange(element, color, time) {
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

textChange(el, "red", 1000)
.then(() => textChange(el, "blue", 1000))
.then(()=> textChange)
