const originalImage = document.getElementById("originalImage");
const magnifiedImage = document.getElementById("magnifiedImage");
const imageContainer = document.querySelector(".image-magnifier");
const inner = document.querySelector(".inner");

imageContainer.addEventListener("mousemove", (e) => {
  //GET IMAGE top and left position on screen
  const containerRect = imageContainer.getBoundingClientRect();

  // clientX and clientY is mouse position on screen
  // find x and y position of mouse on image
  const x = e.clientX - containerRect.left;
  const y = e.clientY - containerRect.top;

  //find position of mouse on image in percent
  let xp = (x / containerRect.width) * 100;
  let yp = (y / containerRect.height) * 100;

  //limit percent
  /* 
  if(xp < 25)
  {
    xp = 25;
  }

  if(xp > 75)
  {
    xp = 75;
  }

  if(yp < 25)
  {
    yp = 25;
  }

  if(yp > 75)
  {
    yp = 75;
  }
   */

  /*
  xp = Math.min(xp, 75);
   xp = Math.max(xp, 25);
   */
  xp = Math.max(25, Math.min(xp, 75));
  /*
  yp = Math.min(yp, 75);
   yp = Math.max(yp, 25);
   */
  yp = Math.max(25, Math.min(yp, 75));

  //inner box
  inner.style.left = xp + "%";
  inner.style.top = yp + "%";

  //move background to center of mouse
  let dx50 = xp - 50;
  let dy50 = yp - 50;

  xp += dx50;
  yp += dy50;

  magnifiedImage.style.backgroundPosition = `${xp}% ${yp}%`;
});
//
