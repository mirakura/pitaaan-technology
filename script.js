// ===========================
// 🚀 Swiper自動再生制御
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper-container", {
    loop: true,
    spacebetween: 10,
    slidesPerView: 1,
    speed: 800,

    // centeredSlides: true,
    // slidesPerView: "auto",

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const autoplayToggleButton = document.getElementById("autoplay-toggle");
  let isAutoplayPlaying = true;

  autoplayToggleButton.addEventListener("click", () => {
    if (isAutoplayPlaying) {
      mySwiper.autoplay.stop();
      autoplayToggleButton.textContent = "▶";
    } else {
      mySwiper.autoplay.start();
      autoplayToggleButton.textContent = "⏸";
    }
    isAutoplayPlaying = !isAutoplayPlaying;
  });
});

// ===========================
// 🚀 swiper-slide-text-fadein
// ===========================
/*
var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  speed: 2000,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
*/
