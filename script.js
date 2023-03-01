<<<<<<< Updated upstream
"use strict";
const track = document.getElementById("image-track");

track.dataset.percentage = 0; // set initial value to 0

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 50), -50) || 0;
  
  track.dataset.percentage = nextPercentage;
  
  track.style.transform = `translate(${nextPercentage}%, -50%) translateX(-50%)`;
  
  for(const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${50 + nextPercentage }% center`;
  }
}

window.onmousedown = e => handleOnDown(e);
window.onmouseup = e => handleOnUp(e);
window.onmousemove = e => handleOnMove(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);
window.ontouchend = e => handleOnUp(e.touches[0]);
window.ontouchmove = e => handleOnMove(e.touches[0]);
>>>>>>> Stashed changes
