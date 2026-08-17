// このscript.js自身のURLから、現在の公開場所（ローカル / GitHub Pagesのサブパス等）に
// 依存しない基準パスを組み立てる。ページの階層（about/business/ など）が違っても壊れない。
const headerScriptUrl = new URL(document.currentScript.src, document.baseURI);
const headerComponentDir = headerScriptUrl.href.replace(/[^/]*$/, ""); // .../components/header/
const siteRoot = headerComponentDir.replace(/components\/header\/$/, ""); // サイトのルート

fetch(headerComponentDir + "index.html")
  .then(response => response.text())
  .then(htmlText => {
    console.log(htmlText);
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");
    const headerContent = doc.querySelector("header");
    const currentHeader = document.querySelector("header");
    if (headerContent && currentHeader) {
      currentHeader.innerHTML = headerContent.innerHTML;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = headerComponentDir + "style.css";
    document.head.appendChild(link);

    // ヘッダー内の href="/about/" のようなサイトルート起点のリンクを、
    // 実際の公開パス（例: /pitaaan-technology/about/）に合わせて補正する
    currentHeader.querySelectorAll('a[href^="/"]').forEach(a => {
      a.setAttribute("href", siteRoot + a.getAttribute("href").slice(1));
    });

    const currentUrl = window.location.href;
    const navButtons = document.querySelectorAll(".nav-item a");
    navButtons.forEach(button => {
      if (button.href === currentUrl) {
        button.classList.add("current-page");
      }
    });

    const menuButton = document.getElementById("menuButton");
    const nav = document.querySelector(".nav");
    menuButton.addEventListener("click", () => {
      menuButton.classList.toggle("active");
      nav.classList.toggle("active");
      
      // メニュー開閉時にbodyのスクロールを制御
      if (nav.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  });
