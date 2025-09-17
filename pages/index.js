function main() {
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
        (i) => i.fields.seccion === "Bienvenida"
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

      const presentacionItem = data.items.find(
        (i) => i.fields.seccion === "Presentacion"
      );
      if (presentacionItem) {
        const tituloEl = document.querySelector(".presentacion__title");
        const textoEl = document.querySelector(".presentacion__texto");
        const imagenEl = document.querySelector(".presentacion__img");

        tituloEl.textContent = presentacionItem.fields.bienvenidaTitle;
        const rawText =
          presentacionItem.fields.bienvenidaText.content[0].content[0].value;
        textoEl.textContent = rawText;

        if (presentacionItem.fields.bienvenidaImg?.sys) {
          const assetId = presentacionItem.fields.bienvenidaImg.sys.id;
          const asset = data.includes.Asset.find((a) => a.sys.id === assetId);
          if (asset?.fields?.file) {
            imagenEl.src = "https:" + asset.fields.file.url;
            imagenEl.alt =
              presentacionItem.fields.title || "Imagen de presentación";
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

      ventana(ventanaContainer);
      header(container, ventanaContainer);
      footer(footerContainer);
    })
    .catch((error) => console.error("Hubo un error:", error));

  const docEl = document.querySelector(".contacto__form__container");
  docEl.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    const email = document.getElementById("email").value; // Obtener el email aquí
    const message = document.getElementById("message").value; // Obtener el mensaje aquí

    // Verificar que los campos no estén vacíos
    if (!email || !message) {
      console.error("Por favor, completa todos los campos.");
      return; // Detiene la ejecución si hay campos vacíos
    }

    fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      body: JSON.stringify({
        to: email, // Usa el email del formulario
        message: message, // Usa el mensaje del formulario
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email enviado exitosamente");
        } else {
          return response.json().then((err) => {
            console.error("Error al enviar el email:", err);
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  });
}
main();
