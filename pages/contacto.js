function contacto() {
  const container = document.querySelector(".header");
  const footerContainer = document.querySelector(".footer");
  const ventanaContainer = document.querySelector(".ventana-container");

  ventana(ventanaContainer);
  header(container, ventanaContainer);
  footer(footerContainer);
}
contacto();
