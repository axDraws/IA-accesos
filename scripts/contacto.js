document.addEventListener("DOMContentLoaded", function() {
  const contactItems = document.querySelectorAll('.contact-item:not(.email)');
  
  // Cerrar menús al hacer clic fuera
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.contact-item')) {
      contactItems.forEach(item => {
        item.classList.remove('active');
        const menu = item.querySelector('.contact-menu');
        if (menu) menu.style.display = 'none';
        item.style.borderRadius = '10px';
      });
    }
  });
  
  // Alternar menús para teléfonos
  contactItems.forEach(item => {
    const header = item.querySelector('.contact-header');
    const menu = item.querySelector('.contact-menu');
    
    header.addEventListener('click', function(e) {
      e.stopPropagation();
      
      // Cerrar otros menús abiertos
      contactItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherMenu = otherItem.querySelector('.contact-menu');
          if (otherMenu) otherMenu.style.display = 'none';
          otherItem.style.borderRadius = '10px';
        }
      });
      
      // Alternar el menú actual
      item.classList.toggle('active');
      
      if (item.classList.contains('active')) {
        menu.style.display = 'block';
        item.style.borderRadius = '10px 10px 0 0';
      } else {
        menu.style.display = 'none';
        item.style.borderRadius = '10px';
      }
    });
  });

  // No necesitamos JavaScript adicional para el email
  // ya que el enlace mailto: funciona nativamente
});
