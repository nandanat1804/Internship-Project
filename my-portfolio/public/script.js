// Initialize AOS
AOS.init({ duration: 800, once: true, offset: 100 });

// ========== CUSTOM CURSOR MOVEMENT ==========
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Create cursor elements
    const cursor = document.createElement('div');
    const cursorFollower = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorFollower.className = 'custom-cursor-follower';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    // Track mouse position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // Smooth follower animation
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.2;
        followerY += (mouseY - followerY) * 0.2;
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
    
    // Hover effects on interactive elements
    const hoverElements = document.querySelectorAll('a, button, .project, .cert, .exp-card, .nav-link, .btn-primary, .btn-outline, .contact-link, .learning-item, .project-link, .nav-btn');
    
    hoverElements.forEach(function(el) {
        el.addEventListener('mouseenter', function() {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.3)';
            cursor.style.background = '#00F0FF';
            cursorFollower.style.borderColor = '#00F0FF';
            cursorFollower.style.background = 'rgba(0, 240, 255, 0.1)';
        });
        
        el.addEventListener('mouseleave', function() {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
            cursor.style.background = '#FF3366';
            cursorFollower.style.borderColor = '#FF3366';
            cursorFollower.style.background = 'transparent';
        });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', function() {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    });
});

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
if (backBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) backBtn.style.opacity = '1';
        else backBtn.style.opacity = '0';
    });
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Mobile menu
const mobileBtn = document.querySelector('.mobile-btn');
const navLinks = document.querySelector('.nav-links');
if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = '';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = '#0A0418';
            navLinks.style.padding = '2rem';
            navLinks.style.borderBottom = '1px solid #FF3366';
            navLinks.style.zIndex = '99';
        }
    });
}

console.log('%c✨ Nandana T Portfolio ✨', 'color: #FF3366; font-size: 16px; font-weight: bold;');