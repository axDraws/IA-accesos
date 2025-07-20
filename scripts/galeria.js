// galeria.js

document.addEventListener("DOMContentLoaded", () => {
  const galeriaImgs = document.querySelectorAll(".galeria img");
  const lightbox = document.getElementById("lightbox");
  const imgAmpliada = document.getElementById("img-ampliada");
  const cerrarBtn = document.querySelector(".cerrar");

  galeriaImgs.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      imgAmpliada.src = img.src;
      imgAmpliada.alt = img.alt;
    });
  });

  cerrarBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});

