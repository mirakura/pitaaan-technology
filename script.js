// ===========================
// 🚀 Swiper自動再生制御
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    speed: 800,
    loop: true,

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
    on: {
      // 初期化完了時に最初のアクティブスライドのキャプションをアニメーション
      init: function () {
        // 少し遅延させて、確実にアニメーションを開始させる
        setTimeout(() => {
          const activeSlide = this.slides[this.activeIndex];
          const activeCaption = activeSlide.querySelector(".slide-caption");
          if (activeCaption) {
            activeCaption.classList.add("fade-in-active");
          }
        }, 100);
      },
      // スライドが切り替わる前に、すべてのアニメーションクラスをリセット
      slideChange: function () {
        this.slides.forEach(slide => {
          const caption = slide.querySelector(".slide-caption");
          if (caption) {
            caption.classList.remove("fade-in-active");
          }
        });
      },
      // スライド切り替えアニメーションが完了した後に、新しいスライドのキャプションをアニメーション
      transitionEnd: function () {
        const activeSlide = this.slides[this.activeIndex];
        const activeCaption = activeSlide.querySelector(".slide-caption");
        if (activeCaption) {
          activeCaption.classList.add("fade-in-active");
        }
      },
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
