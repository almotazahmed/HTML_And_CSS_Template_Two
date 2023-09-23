let prevBtn = document.querySelector(".landing .prev-btn");
let nextBtn = document.querySelector(".landing .next-btn");
let landing = document.querySelector(".landing");
let currentImg = 1;
let landingBG = {
  img_1: "images/landing.jpg",
  img_2: "images/landingImages/pexels-anete-lusina-4792717.jpg",
  img_3: "images/landingImages/pexels-anete-lusina-4792729.jpg",
  img_4: "images/landingImages/pexels-damir-18362525.jpg",
  img_5: "images/landingImages/pexels-olia-danilevich-4974911.jpg",
  img_6: "images/landingImages/pexels-sora-shimazaki-5935794.jpg",
};
const ObjectKeys = Object.keys(landingBG);
const sizeOfObject = ObjectKeys.length;

nextBtn.addEventListener("click", (ev) => {
  currentImg++;
  if (currentImg > sizeOfObject) {
    currentImg = 1; // Reset to the first image if it goes beyond the object's size
  }
  landing.style.backgroundImage = `url(${
    landingBG[ObjectKeys[currentImg - 1]]
  })`;
});
prevBtn.addEventListener("click", (ev) => {
  currentImg--;
  if (currentImg < 1) {
    currentImg = sizeOfObject; // Reset to the first image if it goes beyond the object's size
  }
  landing.style.backgroundImage = `url(${
    landingBG[ObjectKeys[currentImg - 1]]
  })`;
});
