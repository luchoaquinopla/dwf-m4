function servicios() {
  const container = document.querySelector(".header");
  const footerContainer = document.querySelector(".footer");
  const ventanaContainer = document.querySelector(".ventana-container");

  fetch(
    "https://cdn.contentful.com/spaces/9qanhykdn6gz/environments/master/entries?access_token=GcmEA-al4jGdgC_InRL4A-3ONQiIBn5afYqikSKVCtc"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const bienvenidaItem = data.items.find(
        (i) => i.fields.seccion === "Bienvenida-servicio"
      );
      if (bienvenidaItem) {
        const tituloEl = document.querySelector(".bienvenida__title");
        const imagenEl = document.querySelector(".bienvenida__img");

        tituloEl.textContent = bienvenidaItem.fields.bienvenidaTitle;

        if (bienvenidaItem.fields.bienvenidaImg?.sys) {
          const assetId = bienvenidaItem.fields.bienvenidaImg.sys.id;
          const asset = data.includes.Asset.find((a) => a.sys.id === assetId);
          if (asset?.fields?.file) {
            imagenEl.src = "https:" + asset.fields.file.url;
            imagenEl.alt =
              bienvenidaItem.fields.title || "Imagen de bienvenida";
          }
        } else {
          imagenEl.style.display = "none";
        }
      }

      const serviciosItems = data.items.filter(
        (i) => i.fields.seccion === "Servicios"
      );
      const serviciosCards = document.querySelectorAll(".servicios__card");
      const servicioTitle = document.querySelector(".servicios__title");
      servicioTitle.textContent = serviciosItems[0].fields.bienvenidaTitle;
      serviciosItems.forEach((servicio, index) => {
        if (serviciosCards[index]) {
          const titulo = serviciosCards[index].querySelector(
            ".servicios__card__title"
          );
          const texto = serviciosCards[index].querySelector(
            ".servicios__card__text"
          );
          const imagen = serviciosCards[index].querySelector(".servicios__img");

          titulo.textContent = servicio.fields.subtitulo;
          texto.textContent =
            servicio.fields.bienvenidaText.content[0].content[0].value;

          if (servicio.fields.bienvenidaImg?.sys) {
            const assetId = servicio.fields.bienvenidaImg.sys.id;
            const asset = data.includes.Asset.find((a) => a.sys.id === assetId);
            if (asset?.fields?.file) {
              imagen.src = "https:" + asset.fields.file.url;
              imagen.alt = servicio.fields.subtitulo || "Imagen de servicio";
            }
          }
        }
      });
    })
    .catch((error) => console.error("Hubo un error:", error));
  ventana(ventanaContainer);
  header(container, ventanaContainer);
  footer(footerContainer);
}
servicios();
