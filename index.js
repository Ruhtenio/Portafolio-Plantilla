document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('#menu-links .link');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            const href = this.getAttribute('href'); // Obtén el valor del atributo href del enlace
            const targetSection = href.substring(href.indexOf('#')); // Obtén el hash de la URL
            // Recarga la página
            window.location.href = targetSection;
            window.location.reload(); // Vuelve a cargar la página
        });
    });
});


const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.getElementById('menu-links');

// Agregar un evento de clic al botón
menuToggle.addEventListener('click', function() {
    // Alternar la clase 'active' en la lista de enlaces
    menuLinks.classList.toggle('active');
});
