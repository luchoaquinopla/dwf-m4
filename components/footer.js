function footer(el) {
  const footerEl = document.createElement("footer");
  footerEl.innerHTML = `
    <div class = "footer__container">
      <div class="footer__logo__container">
        <img src="logo.png" alt="" class="footer_img" />
      </div>
      <div class="footer__section_container">
        <a href="index.html" style="text-decoration: none">
          <p class="footer__text">Home</p>
        </a>
         <a href="servicios.html" style="text-decoration: none">
          <p class="footer__text">Servicios</p>
        </a>
         <a href="portfolio.html" style="text-decoration: none">
          <p class="footer__text">Portfolio </p>
        </a>
      </div>
      <div class="footer__social__reds">
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
      </div>
   </div>
     `;
  el.appendChild(footerEl);
}
