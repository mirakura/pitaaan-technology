## swiper

- https://jito-site.com/swiper-autoheight/
- https://jito-site.com/swiper-outside/
- https://junpei-sugiyama.com/swiper-arrow-pagination-outside/
- https://b-risk.jp/blog/2022/04/swiper/

## SWIPER 自動再生

- https://jito-site.com/swiper-loop/
- https://blog.knis.jp/swiper_pause/

## Swiper

- https://make-web.jp/blog/about-swiper/
- https://roronto.jp/business-efficiency/it/swiper/

- https://naeco.jp/js-swiper
- https://junpei-sugiyama.com/category/web-production/slider/slick/

- https://junpei-sugiyama.com/category/web-production/slider/swiper/
- https://junpei-sugiyama.com/swiper-option/
- https://junpei-sugiyama.com/swiper-pagination/

## Swiper フェードイン

- https://into-the-program.com/swiper-slide-text-fadein/
- https://junpei-sugiyama.com/swiper-fadein-text/

### 【Swiper】スライダーページネーションの左右にボタンを配置する方法

- https://masa-traveller.site/swiper-pagination-prev-next-button/

## DUB DESIGN

- https://dubdesign.net/

## iframe 要素を使ってヘッダー、フッターを共通管理する

- https://wand.witchserver.jp/archives/46

## [a]アンカーをボタンにする

- https://webparts.cman.jp/button/a/

## レスポンシブ対応

/_ ===========================
📱 スマホ対応
=========================== _/
@media screen and (max-width: 768px) {
/_ 全体調整 _/
body {
font-size: 14px;
}

/_ セクション共通 _/
.section {
padding: 40px 10px;
}

.section h2 {
font-size: 1.3rem;
margin-bottom: 20px;
}

/_ 会社概要 _/
.about-container {
/_ background-color: aqua; _/
flex-direction: column;
align-items: center;
}

.about-photo {
width: 90%;
height: 180px;
}

.about-text {
width: 90%;
text-align: center;
}

/_ 事業内容 _/
.service-container {
flex-direction: column;
align-items: center;
}

.service-item {
width: 90%;
}

/_ お問い合わせ _/
.contact p {
margin: 0 0 10px;
}

.contact-btn {
width: 90%;
}
}

/_ スマホ時のメニュー非表示・開閉動作 _/
@media screen and (max-width: 768px) {
@keyframes fadeIn {
from {
opacity: 0;
transform: translateY(-10px);
}
to {
opacity: 1;
transform: translateY(0);
}
}
}
