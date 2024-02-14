const pictures = document.querySelectorAll('.photo-container');
var previousTouch = undefined;
// Image Stack Reset
const resetImage = document.getElementById('reset-stack');


// Image Filter
let filterImageOne = document.getElementById('img-one');
let filterImageTwo = document.getElementById('img-two');
let filterImageThree = document.getElementById('img-three');
let filterImageFour = document.getElementById('img-four');
let filterImageFive = document.getElementById('img-five');
let filterImageSix = document.getElementById('img-six');
let filterOn = false;

// PRESET ONE CONTRAST - FILTER BUTTON
const invertButton = document.getElementById('invert-btn');
invertButton.addEventListener('click', () => {
  filterOn = !filterOn;
    filterImageOne.style.filter = 'invert(100%)';
		filterImageTwo.style.filter = 'invert(100%)';
		filterImageThree.style.filter = 'invert(100%)';
		filterImageFour.style.filter = 'invert(100%)';
		filterImageFive.style.filter = 'invert(100%)';
		filterImageSix.style.filter = 'invert(100%)';
});

// PRESET TWO BRIGHTNESS - FILTER BUTTON
const brightButton = document.getElementById('bright-btn');
brightButton.addEventListener('click', () => {
  filterOn = !filterOn;
    filterImageOne.style.filter = 'brightness(1.5)';
		filterImageTwo.style.filter = 'brightness(1.5)';
		filterImageThree.style.filter = 'brightness(1.5)';
		filterImageFour.style.filter = 'brightness(1.5)';
		filterImageFive.style.filter = 'brightness(1.5)';
		filterImageSix.style.filter = 'brightness(1.5)';
});

// PRESET THREE CONTRAST - FILTER BUTTON
const contrastButton = document.getElementById('contrast-btn');
contrastButton.addEventListener('click', () => {
  filterOn = !filterOn;
    filterImageOne.style.filter = 'contrast(1.5)';
		filterImageTwo.style.filter = 'contrast(1.5)';
		filterImageThree.style.filter = 'contrast(1.5)';
		filterImageFour.style.filter = 'contrast(1.5)';
		filterImageFive.style.filter = 'contrast(1.5)';
		filterImageSix.style.filter = 'contrast(1.5)';
});

// PRESET FOUR BLUR - FILTER BUTTON
const blurButton = document.getElementById('blur-btn');
blurButton.addEventListener('click', () => {
  filterOn = !filterOn;
    filterImageOne.style.filter = 'blur(2px)';
		filterImageTwo.style.filter = 'blur(2px)';
		filterImageThree.style.filter = 'blur(2px)';
		filterImageFour.style.filter = 'blur(2px)';
		filterImageFive.style.filter = 'blur(2px)';
		filterImageSix.style.filter = 'blur(2px)';
});

// RESET ALL FILTERS
const resetButton = document.getElementById('reset-filter');
resetButton.addEventListener('click', () => {
  filterOn = !filterOn;
		filterImageOne.style.filter = 'none';
		filterImageTwo.style.filter = 'none';
		filterImageThree.style.filter = 'none';
		filterImageFour.style.filter = 'none';
		filterImageFive.style.filter = 'none';
		filterImageSix.style.filter = 'none';
});



function updateElementPosition(element, event) {
  var movementX, movementY;

  if (event.type === 'touchmove') {
    const touch = event.touches[0];
    movementX = previousTouch ? touch.clientX - previousTouch.clientX : 0;
    movementY = previousTouch ? touch.clientY - previousTouch.clientY : 0;
    previousTouch = touch;
  } else {
    movementX = event.movementX;
    movementY = event.movementY;
  }
  
  const elementY = parseInt(element.style.top || 0) + movementY;
  const elementX = parseInt(element.style.left|| 0) + movementX;

  element.style.top = elementY + "px";
  element.style.left = elementX + "px";
}

//START DRAGGING PHOTOS
function startDrag(element, event) {
  const updateFunction = (event) => updateElementPosition(element, event);
  const stopFunction = () => stopDrag({update: updateFunction, stop: stopFunction});
  document.addEventListener("mousemove", updateFunction);
  document.addEventListener("touchmove", updateFunction);
  document.addEventListener("mouseup", stopFunction);
  document.addEventListener("touchend", stopFunction);
}

// STOP DRAGGIN PHOTOS
function stopDrag(functions) {
  previousTouch = undefined;
  document.removeEventListener("mousemove", functions.update);
  document.removeEventListener("touchmove", functions.update);
  document.removeEventListener("mouseup", functions.stop);
  document.removeEventListener("touchend", functions.stop);
}

pictures.forEach(picture => {
  const range = 80;
  const randomX = Math.random() * (range * 2) - range;
  const randomY = Math.random() * (range * 2) - range;
  const randomRotate = Math.random() * (range / 2) - range / 4;
  const startFunction = (event) => startDrag(picture, event);
  picture.style.top = `${randomY}px`;
  picture.style.left = `${randomX}px`;
  picture.style.transform = `translate(-50%, -50%) rotate(${randomRotate}deg)`;
  picture.addEventListener("mousedown", startFunction);
  picture.addEventListener("touchstart", startFunction);
});

// RESET IMAGE STACK
function resetStack() {
	pictures.forEach(picture => {
		const range = 80;
		const randomX = Math.random() * (range * 2) - range;
		const randomY = Math.random() * (range * 2) - range;
		const randomRotate = Math.random() * (range / 2) - range / 4;
		const startFunction = (event) => startDrag(picture, event);
		picture.style.top = `${randomY}px`;
		picture.style.left = `${randomX}px`;
		picture.style.transform = `translate(-50%, -50%) rotate(${randomRotate}deg)`;
		picture.addEventListener("mousedown", startFunction);
		picture.addEventListener("touchstart", startFunction);
	});
}