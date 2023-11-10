let textarea = document.querySelector(".textarea");
let tags = document.querySelector(".tags");
/* 
abc, 123, jkl, mnop, olalal, osama, sufi
*/
textarea.addEventListener("keydown", function (evt) {
  if (evt.key == "Enter") {
    textarea.value = "";
    evt.preventDefault();
    let btns = document.querySelectorAll(".tags button");
    // for (let i = 0; i < 20; i++) {
    //   setTimeout(() => {
    //     for (let btn of btns) {
    //       console.log(btn);
    //       btn.classList.remove("active");
    //     }
    //     let rindex = Math.floor(Math.random() * btns.length);
    //     btns[rindex].classList.add("active");
    //   }, i * 100);
    // }

    let count = 0;
    let interval = setInterval(function () {
      if (count >= 50) {
        clearInterval(interval);
      }
      //
      for (let btn of btns) {
        // console.log(btn);
        btn.classList.remove("active");
      }
      let rindex = Math.floor(Math.random() * btns.length);
      btns[rindex].classList.add("active");
      count++;
    }, 200);

    return;
  }

  tags.innerHTML = "";
  let value = textarea.value;
  let parts = value.split(",");
  for (let part of parts) {
    part = part.trim();
    if (!part) {
      continue;
    }
    let create = document.createElement("button");
    create.innerText = part;
    tags.append(create);
  }
});
