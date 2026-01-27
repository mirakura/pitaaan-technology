fetch("/components/footer/index.html")
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
    link.href = "/components/footer/style.css";
    document.head.appendChild(link);
  });
