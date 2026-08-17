// このscript.js自身のURLから、現在の公開場所（ローカル / GitHub Pagesのサブパス等）に
// 依存しない基準パスを組み立てる。ページの階層（about/business/ など）が違っても壊れない。
const footerScriptUrl = new URL(document.currentScript.src, document.baseURI);
const footerComponentDir = footerScriptUrl.href.replace(/[^/]*$/, ""); // .../components/footer/
const footerSiteRoot = footerComponentDir.replace(/components\/footer\/$/, ""); // サイトのルート

fetch(footerComponentDir + "index.html")
  .then(response => response.text())
  .then(htmlText => {
    console.log(htmlText);
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");
    const footerContent = doc.querySelector("footer");
    const currentFooter = document.querySelector("footer");
    if (footerContent && currentFooter) {
      currentFooter.innerHTML = footerContent.innerHTML;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = footerComponentDir + "style.css";
    document.head.appendChild(link);

    // フッター内の href="/about/" のようなサイトルート起点のリンクを、
    // 実際の公開パス（例: /pitaaan-technology/about/）に合わせて補正する
    currentFooter.querySelectorAll('a[href^="/"]').forEach(a => {
      a.setAttribute("href", footerSiteRoot + a.getAttribute("href").slice(1));
    });
  });
