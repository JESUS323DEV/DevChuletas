// Selecciona todos los enlaces internos del menú y sidebar
const menuLinks = document.querySelectorAll('a[href^="#"]');

menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);

        if (!targetEl) return; // evita errores si no existe el ID

        e.preventDefault(); // evita el salto brusco

        // Cierra el offcanvas si está abierto
        const offcanvasEl = this.closest('.offcanvas');
        if (offcanvasEl) {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
            if (bsOffcanvas) bsOffcanvas.hide();
        }

        // Espera un poquito para que se cierre el offcanvas
        setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });
});

//para que viewport se ajuste al menu-nav
function ajustarPadding() {
  const navbar = document.querySelector('.navbar');
  document.body.style.paddingTop = navbar.offsetHeight + 'px';
}

// Se recalcula en cada scroll, resize y carga
window.addEventListener('scroll', ajustarPadding);
window.addEventListener('resize', ajustarPadding);
window.addEventListener('load', ajustarPadding);


