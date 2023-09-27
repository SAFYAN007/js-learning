const time = document.getElementById("time");

setInterval(function () {
  let date = new Date();
  let hourse = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "AM";

  if (hourse > 12) {
    hourse = hourse - 12;
    day_night = "PM";
  }
  if (hourse < 10) {
    hourse = "0" + hourse;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  time.innerHTML = hourse + ":" + minutes + ":" + seconds + " " + day_night;
});
