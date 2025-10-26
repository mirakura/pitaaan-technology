const playButton = document.querySelector(".swiper-play");
const stopButton = document.querySelector(".swiper-stop");

playButton.addEventListener("click", () => {
  swiper.autoplay.start();
});

stopButton.addEventListener("click", () => {
  swiper.autoplay.stop();
});

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pegination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// ===========================
// 🍔 ハンバーガーメニュー開閉制御
// ===========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
