var typed = new Typed('.type', {
    strings: ['Bringing Ideas to Life with Code','Bringing Ideas to Life with Code'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.transform = 'translateY(0)';
    }
});