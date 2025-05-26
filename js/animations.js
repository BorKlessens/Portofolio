document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollReveal for the outcomes page
    if (document.querySelector('.outcomes-grid')) {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            delay: 200,
            easing: 'ease'
        });

        sr.reveal('.outcome-card', {
            interval: 200,
            distance: '50px'
        });
    }

    // Initialize ScrollReveal for individual outcome pages
    if (document.querySelector('.outcome-detail-container')) {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            delay: 200,
            easing: 'ease'
        });

        sr.reveal('.outcome-header', {
            distance: '20px'
        });

        sr.reveal('.content-block', {
            interval: 300,
            distance: '40px'
        });

        sr.reveal('.outcome-navigation', {
            delay: 400
        });
    }

    // Add hover effects for outcome cards
    const outcomeCards = document.querySelectorAll('.outcome-card');
    outcomeCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            outcomeCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.transform = 'scale(0.95)';
                    otherCard.style.opacity = '0.7';
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            outcomeCards.forEach(otherCard => {
                otherCard.style.transform = 'scale(1)';
                otherCard.style.opacity = '1';
            });
        });
    });

    // Add smooth scroll behavior for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation
    const loading = document.createElement('div');
    loading.className = 'loading';
    document.body.appendChild(loading);

    window.addEventListener('load', () => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.remove();
        }, 500);
    });
}); 