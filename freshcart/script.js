// JavaScript Code for Auto Image Changer with Sliding Animation
const images = [
    "Main2.jpg",
    "main.jpg",
    "Main2.jpg",
    "main.jpg"
  ];

let b = 0;
let isAnimating = false;

function image(index, direction) {
  const a = document.getElementById("current-image");
  const container = document.getElementById("image-container");

  if (isAnimating) return; // Prevent animation overlap

  // Add sliding animation
  isAnimating = true;
  container.classList.add(direction === "next" ? "slide-out-left" : "slide-out-right");

  setTimeout(() => {
    a.src = images[index];
    container.classList.remove("slide-out-left", "slide-out-right");
    container.classList.add(direction === "next" ? "slide-in-right" : "slide-in-left");

    setTimeout(() => {
      container.classList.remove("slide-in-right", "slide-in-left");
      isAnimating = false;
    }, 500); // Match animation duration in CSS
  }, 500); // Match animation duration in CSS
}

function nextImage() {
  b = (b + 1) % images.length;
  image(b, "next");
}

function prevImage() {
  b = (b - 1 + images.length) % images.length;
  image(b, "prev");
}

// Auto image changer functionality
function startAutoChange(interval = 3000) {
  setInterval(() => {
    nextImage();
  }, interval);
}

// Start the auto image changer when the page loads
window.onload = () => {
  startAutoChange();
};