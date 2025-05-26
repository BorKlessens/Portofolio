// Initialize ScrollReveal for smooth animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 200,
        easing: 'ease'
    });

    // Apply reveal animations to different sections
    sr.reveal('.hero-content', { delay: 200 });
    sr.reveal('.about-content', { delay: 400 });
    sr.reveal('.outcomes-preview li', { 
        interval: 200,
        distance: '40px'
    });
    sr.reveal('.cta-section', { delay: 600 });

    // Add loading animation
    const loading = document.createElement('div');
    loading.className = 'loading';
    document.body.appendChild(loading);

    // Remove loading animation after page load
    window.addEventListener('load', () => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.remove();
        }, 500);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Interactive hover effects for outcome preview items
    const outcomeItems = document.querySelectorAll('.outcomes-preview li');
    outcomeItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            outcomeItems.forEach(other => {
                if (other !== item) {
                    other.style.opacity = '0.5';
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            outcomeItems.forEach(other => {
                other.style.opacity = '1';
            });
        });
    });
}); 