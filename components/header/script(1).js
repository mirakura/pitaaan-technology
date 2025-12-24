fetch("/components/header/index.html")
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
    link.href = "/components/header/style.css";
    document.head.appendChild(link);

    const currentUrl = window.location.href;
    const navButtons = document.querySelectorAll(".nav-item a");
    navButtons.forEach(button => {
      if (button.href === currentUrl) {
        button.classList.add("current-page");
      }
    });
  });
