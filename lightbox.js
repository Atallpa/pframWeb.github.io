//LIGHTBOX CODE

// JavaScript for the lightbox/floating window
const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const startButton = document.querySelector('#start-button');

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

// Function to handle mouse down event
const handleMouseDown = (event) => {
  if (event.target === lightboxContent) {
    initialX = event.clientX - xOffset;
    initialY = event.clientY - yOffset;
    isDragging = true;
  }
};

// Function to handle mouse move event
const handleMouseMove = (event) => {
  if (isDragging) {
    event.preventDefault();

    currentX = event.clientX - initialX;
    currentY = event.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, lightboxContent);
  }
};

// Function to handle mouse up event
const handleMouseUp = () => {
  isDragging = false;
};

// Function to translate the lightbox content
const setTranslate = (xPos, yPos, el) => {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
};

startButton.addEventListener('click', () => {
  // Hide the lightbox when the start button is clicked
  lightbox.style.display = 'none';
    window.scrollTo({
    top: 0,
    /*behavior: 'smooth'*/
  });
});

// Show the lightbox when the page loads
window.addEventListener('load', () => {
  lightbox.style.display = 'flex';
});

// Event listeners for drag and drop functionality
lightboxContent.addEventListener('mousedown', handleMouseDown);
lightboxContent.addEventListener('mousemove', handleMouseMove);
lightboxContent.addEventListener('mouseup', handleMouseUp);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* BOTON MENU *///

function toggleMenu() {
  var menu = document.getElementById("menuToggle");
  menu.classList.toggle("open");
}

