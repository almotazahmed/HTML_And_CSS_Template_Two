// Select elements
const prevBtn = document.querySelector(".landing .prev-btn");
const nextBtn = document.querySelector(".landing .next-btn");
const landing = document.querySelector(".landing");
const circles = landing.querySelector(".circles");
const images = landing.querySelectorAll("img");

// Initialize variables
let currentImg = 0;
const imagesSize = images.length;
const intervalDuration = 8000;
let touchStartX = 0;
let touchEndX = 0;

// Create navigation circles
for (let i = 0; i < imagesSize; i++) {
  const spanCircle = document.createElement("span");
  spanCircle.setAttribute("circle-number", i + 1);
  spanCircle.addEventListener("click", (ev) => {
    removeActive();
    currentImg = ev.target.getAttribute("circle-number") - 1;
    setActive();
  });
  circles.appendChild(spanCircle);
}

// Store the circle elements in an array
const spanList = Array.from(circles.childNodes);

// Add class active to the first image and circle
images[currentImg].classList.add("active");
spanList[currentImg].classList.add("active");

// Function to remove active class
function removeActive() {
  images[currentImg].classList.remove("active");
  spanList[currentImg].classList.remove("active");
}
// Function to add active class
function setActive() {
  images[currentImg].classList.add("active");
  spanList[currentImg].classList.add("active");
}

// Function to handle next button click
function nextImage() {
  removeActive();
  currentImg = (currentImg + 1) % imagesSize;
  setActive();
}

// Function to handle previous button click
function prevImage() {
  removeActive();
  currentImg = (currentImg - 1 + imagesSize) % imagesSize;
  setActive();
}

// Set an interval for automatic image change
let intervalId = setInterval(nextImage, intervalDuration);

// Event listeners for next and previous buttons (click and touch)
nextBtn.addEventListener("click", nextImage);
nextBtn.addEventListener("touchstart", nextImage);

prevBtn.addEventListener("click", prevImage);
prevBtn.addEventListener("touchstart", prevImage);

// Touch events for swipe gesture on the landing container
landing.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

landing.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX) {
    // Swiped left (next)
    nextImage();
  } else if (touchEndX > touchStartX) {
    // Swiped right (previous)
    prevImage();
  }
});
