document.addEventListener('DOMContentLoaded', function () {

    // Roadmap mobile collapse toggle
    var roadmapToggle = document.getElementById('roadmapToggleBtn');
    if (roadmapToggle) {
        roadmapToggle.addEventListener('click', function () {
            var container = document.querySelector('.roadmap-container');
            var expanded = container.classList.toggle('roadmap-expanded');
            roadmapToggle.querySelector('.toggle-text').textContent = expanded ? 'Ocultar historial' : 'Ver historial completo';
            var icon = roadmapToggle.querySelector('.toggle-icon');
            icon.className = 'fa-solid toggle-icon ms-2 ' + (expanded ? 'fa-chevron-up' : 'fa-chevron-down');
            if (expanded) {
                document.querySelectorAll('.roadmap-optional[data-aos]').forEach(function (el) {
                    el.classList.add('aos-animate');
                });
            }
        });
    }

    // Animaciones scroll — reemplaza AOS sin dependencia externa
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var delay = parseInt(entry.target.dataset.aosDelay || 0);
                setTimeout(function () {
                    entry.target.classList.add('aos-animate');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('[data-aos]').forEach(function (el) {
        observer.observe(el);
    });

});
