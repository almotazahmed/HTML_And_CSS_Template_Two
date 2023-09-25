let prevBtn = document.querySelector(".landing .prev-btn");
let nextBtn = document.querySelector(".landing .next-btn");
let landing = document.querySelector(".landing");
let circles = landing.querySelector(".circles");
let images = landing.querySelectorAll("img");
console.log(images);
console.log(circles);
let currentImg = 0;
let imagesSize = images.length;

for (let i = 0; i < imagesSize; i++) {
  let spanCircle = document.createElement("span");
  circles.appendChild(spanCircle);
}

let spanList = circles.childNodes;
spanList[currentImg].classList.add("active");

setInterval(function () {
  images[currentImg].classList.remove("active");
  spanList[currentImg].classList.remove("active");
  currentImg++;
  currentImg = currentImg % imagesSize;
  images[currentImg].classList.add("active");
  spanList[currentImg].classList.add("active");
}, 4000);

nextBtn.addEventListener("click", (ev) => {
  images[currentImg].classList.remove("active");
  spanList[currentImg].classList.remove("active");
  currentImg++;
  currentImg = currentImg % imagesSize;
  images[currentImg].classList.add("active");
  spanList[currentImg].classList.add("active");
});

prevBtn.addEventListener("click", (ev) => {
  images[currentImg].classList.remove("active");
  spanList[currentImg].classList.remove("active");
  currentImg--;
  if (currentImg < 0) {
    currentImg = imagesSize - 1;
  }
  images[currentImg].classList.add("active");
  spanList[currentImg].classList.add("active");
});
