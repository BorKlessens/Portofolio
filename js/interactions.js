// Create cursor glow element
const cursorGlow = document.createElement('div');
cursorGlow.classList.add('cursor-glow');
document.body.appendChild(cursorGlow);

// Update cursor glow position
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Enhance glow effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .outcome-card, .content-block, .content-image, .image-grid img');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorGlow.style.width = '250px';
        cursorGlow.style.height = '250px';
        cursorGlow.style.background = 'radial-gradient(circle, rgba(97, 218, 251, 0.25), transparent 70%)';
    });

    element.addEventListener('mouseleave', () => {
        cursorGlow.style.width = '200px';
        cursorGlow.style.height = '200px';
        cursorGlow.style.background = 'radial-gradient(circle, rgba(97, 218, 251, 0.15), transparent 70%)';
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize ScrollReveal for animations
ScrollReveal().reveal('.outcome-card', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    interval: 100
});

ScrollReveal().reveal('.content-block', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    interval: 100
});

ScrollReveal().reveal('.hero-content', {
    delay: 200,
    distance: '30px',
    origin: 'bottom'
});

// Add parallax effect to hero banner
if (document.querySelector('.hero')) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const banner = document.querySelector('.hero');
        banner.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });
} 