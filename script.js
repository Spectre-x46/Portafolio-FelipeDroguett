// Inicializar AOS (Animate On Scroll)
// Esto es para que las animaciones funcionen cuando bajo con el mouse
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800, // Cuánto dura la animación en milisegundos (casi un segundo)
        once: true,    // Que se anime solo una vez al bajar, no cada vez que subo y bajo
        offset: 100,   // Que empiece a animarse un poquito antes de llegar al elemento
        easing: 'ease-out-cubic' // La forma en que se mueve suave
    });

    // Aquí podría poner más cosas si quisiera, pero por ahora solo eso.
});
