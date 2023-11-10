let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minute");
let seconds = document.querySelector(".second");
let digital = document.querySelector("p")
console.log(digital);

function setTime() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  hr_rotation = 30 * hour + minute / 2;
  min_rotation = 6 * minute;
  sec_rotation = 6 * second;

  hours.style.transform = `translate(-50%, -100%) rotate(${hr_rotation}deg)`;
  minutes.style.transform = `translate(-50%, -100%) rotate(${min_rotation}deg)`;
  seconds.style.transform = `translate(-50%, -100%) rotate(${sec_rotation}deg)`;

  digital.innerHTML  = `${hour}:${minute}:${second}`
}
setTime();
setInterval(setTime, 1000);
