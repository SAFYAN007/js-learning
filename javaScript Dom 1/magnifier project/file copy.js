const originalImage = document.getElementById('originalImage');
const magnifiedImage = document.getElementById('magnifiedImage');

const imageContainer = document.querySelector('.image-magnifier');

imageContainer.addEventListener('mousemove', (e) => {
    
    //GET IMAGE top and left position on screen
    const containerRect = imageContainer.getBoundingClientRect()
    
    // clientX and clientY is mouse position on screen
    // find x and y position of mouse on image
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;


    //Magnify and reverse position
    let x2 = x*2;
    let y2 = y*2;

    //center image position where mouse is on actual image
    // width/4
    // height/4
    // x2 += 150;
    // y2 += 150;

    //background size
    let min = 600/6;
    let max = 600 - min;

    if(x2 < min)
    {
        x2 = min;
    }

    if(y2 < min)
    {
        y2 = min;
    }

    if(x2 > max)
    {
        x2 = max;
    }

    if(y2 > max)
    {
        y2 = max;
    }

    magnifiedImage.style.backgroundPosition = `${-x2+(min)}px ${-y2+(min)}px`;
    // magnifiedImage.style.borderRadius = '10px';
});


