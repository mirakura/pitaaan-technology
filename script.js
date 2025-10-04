// シンプルなスライダー制御
const slides = document.querySelectorAll(".work-item");
const dots = document.querySelectorAll(".dot");
let current = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
  dots[current].classList.add("active");
});

document.getElementById("prevBtn").addEventListener("click", () => {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add("active");
  dots[current].classList.add("active");
});
