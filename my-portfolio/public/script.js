AOS.init({ duration: 800, once: true, offset: 100 });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Back to top
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) backBtn.style.opacity = '1';
    else backBtn.style.opacity = '0';
});
backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Mobile menu
document.querySelector('.mobile-btn')?.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('show');
});

console.log('%c✨ Nandana T Portfolio ✨', 'color: #FF3366; font-size: 16px;');