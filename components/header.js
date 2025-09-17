function header(el, ventanaContainer) {
  const headerEl = document.createElement("header");
  headerEl.innerHTML = `
    <div class="header_container">
      <div class="header__image_container">
        <img class="header__image" src="logo.png" alt="logo" />
      </div>
      <button class="hamburger__button">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </button>
      <div class = "header__nav__options">
        <a href="contacto.html" style="text-decoration: none">
          <p class="header__text">contacto</p>
        </a>
         <a href="servicios.html" style="text-decoration: none">
          <p class="header__text">Servicios</p>
        </a>
         <a href="portfolio.html" style="text-decoration: none">
          <p class="header__text">Portfolio </p>
        </a>
        </div>
    </div>
  `;
  const clickeable = headerEl.querySelector(".hamburger__button");
  const ventanaEl = ventanaContainer.querySelector(".ventana");
  const botonCerrarVentanaEl = ventanaEl.querySelector(".Close_button");

  clickeable.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
    document.body.classList.add("modal-open");
  });
  botonCerrarVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "none";
    document.body.classList.remove("modal-open");
  });

  el.appendChild(headerEl);
}
