function ventana(el) {
  const ventanaEl = document.createElement("div");
  ventanaEl.innerHTML = `
  <div class="ventana">
      <div class="close__Button__container">
        <button class="Close_button">X</button>
      </div>
      <div class="contenido">
        <a href="index.html" style="text-decoration: none">
          <h1 class="ventana__title">Home</h1>
        </a>
        <a href="portfolio.html" style="text-decoration: none">
          <h1 class="ventana__title">Portfolio</h1>
        </a>
        <a href="servicios.html" style="text-decoration: none">
          <h1 class="ventana__title">Servicios</h1>
        </a>
        <a href="contacto.html" style="text-decoration: none">
          <h1 class="ventana__title">Contacto</h1>
        </a>
      </div>
    </div>
  `;

  el.appendChild(ventanaEl);
}
