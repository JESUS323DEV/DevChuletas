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
    // Coge todos los navbars fijos
    const navbars = document.querySelectorAll('.navbar.fixed-top');
    let altura = 0;

    navbars.forEach(n => {
        if (n.offsetHeight > altura) {
            altura = n.offsetHeight;
        }
    });

    // Aplica padding al body
    document.body.style.paddingTop = altura + 'px';

    console.log("Navbar height aplicada:", altura); // para debug
}

window.addEventListener('resize', ajustarPadding);
window.addEventListener('load', ajustarPadding);



