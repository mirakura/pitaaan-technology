// シンプルなスライダー制御
const track = document.querySelector(".works-slider-track");
const slides = document.querySelectorAll(".work-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentIndex);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlider();
  });
});

updateSlider();

// ===========================
// 🍔 ハンバーガーメニュー開閉制御
// ===========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
