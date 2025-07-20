document.addEventListener("DOMContentLoaded", () => {
  const videoCards = document.querySelectorAll(".video-card");
  const videoLightbox = document.getElementById("video-lightbox");
  const videoIframe = document.getElementById("video-iframe");
  const videoTitle = document.querySelector(".video-title");
  const cerrarBtn = videoLightbox.querySelector(".cerrar");
  
  // Abrir lightbox con video
  function openVideoLightbox(videoId, title) {
    videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    videoTitle.textContent = title;
    videoLightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  
  // Cerrar lightbox
  function closeVideoLightbox() {
    videoIframe.src = "";
    videoLightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  }
  
  // Event listeners
  videoCards.forEach(card => {
    card.addEventListener("click", () => {
      const videoId = card.dataset.videoId;
      const title = card.dataset.title;
      openVideoLightbox(videoId, title);
    });
  });
  
  cerrarBtn.addEventListener("click", closeVideoLightbox);
  videoLightbox.addEventListener("click", (e) => {
    if (e.target === videoLightbox) closeVideoLightbox();
  });
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && videoLightbox.classList.contains("active")) {
      closeVideoLightbox();
    }
  });
});
