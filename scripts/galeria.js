document.addEventListener("DOMContentLoaded", () => {
  const galeriaImgs = document.querySelectorAll(".galeria img");
  const lightbox = document.getElementById("lightbox");
  const imgAmpliada = document.getElementById("img-ampliada");
  const cerrarBtn = document.querySelector(".cerrar");
  const imagenes = Array.from(galeriaImgs);
  let currentIndex = 0;

  // Función para mostrar imagen
  function mostrarImagen(index) {
    const img = imagenes[index];
    imgAmpliada.src = img.src;
    imgAmpliada.alt = img.alt;
    currentIndex = index;
    lightbox.style.opacity = "0";
    lightbox.style.display = "flex";
    setTimeout(() => lightbox.style.opacity = "1", 10);
  }

  // Event listeners
  galeriaImgs.forEach((img, index) => {
    img.addEventListener("click", () => mostrarImagen(index));
  });

  // Cerrar lightbox
  function cerrarLightbox() {
    lightbox.style.opacity = "0";
    setTimeout(() => lightbox.style.display = "none", 300);
  }

  cerrarBtn.addEventListener("click", cerrarLightbox);
  lightbox.addEventListener("click", (e) => e.target === lightbox && cerrarLightbox());

  // Navegación con teclado
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "Escape") cerrarLightbox();
      if (e.key === "ArrowRight") mostrarImagen((currentIndex + 1) % imagenes.length);
      if (e.key === "ArrowLeft") mostrarImagen((currentIndex - 1 + imagenes.length) % imagenes.length);
    }
  });
});
