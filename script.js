// ===========================
// 🚀 Swiper自動再生制御
// ===========================

document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper-container", {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",

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
    //スクロールバー表示の設定
    scrollbar: {
      el: ".swiper-scrollbar", //要素の指定
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
// 🚚 ヘッダー・フッター読み込み
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  // ヘッダーを読み込み、挿入する要素を指定
  fetch("components/header/index.html")
    .then(response => response.text()) // レスポンスをテキスト形式で取得
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data; // HTML要素に挿入
    })
    .catch(error => console.error("Error loading header:", error));
});

document.addEventListener("DOMContentLoaded", () => {
  // フッターを読み込み、挿入する要素を指定
  fetch("components/footer/index.html")
    .then(response => response.text()) // レスポンスをテキスト形式で取得
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data; // HTML要素に挿入
    })
    .catch(error => console.error("Error loading header:", error));
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
