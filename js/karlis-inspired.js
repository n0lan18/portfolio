// ========================================
// KARLIS-INSPIRED PORTFOLIO
// Minimal interactions & smooth animations
// ========================================

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('.about-section, .skills-section, .contact-section').forEach(section => {
    section.classList.add('fade-in-view');
    observer.observe(section);
});

// Horizontal scroll indicator for projects
const projectsContainer = document.querySelector('.projects-horizontal');
if (projectsContainer) {
    // Smooth scrolling with mouse wheel
    projectsContainer.addEventListener('wheel', (e) => {
        // Allow normal vertical scroll when hovering over project items
        if (e.target.closest('.project-item')) {
            return; // Let the default vertical scroll happen
        }
        
        // Otherwise, convert vertical scroll to horizontal
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            projectsContainer.scrollLeft += e.deltaY;
        }
    }, { passive: false });
    
    // Smooth scrolling with mouse drag (only on container, not on project items)
    let isDown = false;
    let startX;
    let scrollLeft;
    
    projectsContainer.addEventListener('mousedown', (e) => {
        // Only enable drag if not clicking on a project item
        if (e.target.closest('.project-item')) return;
        
        isDown = true;
        projectsContainer.style.cursor = 'grabbing';
        startX = e.pageX - projectsContainer.offsetLeft;
        scrollLeft = projectsContainer.scrollLeft;
    });
    
    projectsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        projectsContainer.style.cursor = 'grab';
    });
    
    projectsContainer.addEventListener('mouseup', () => {
        isDown = false;
        projectsContainer.style.cursor = 'grab';
    });
    
    projectsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - projectsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        projectsContainer.scrollLeft = scrollLeft - walk;
    });
}

// Cursor effect (optional, for premium feel)
if (window.innerWidth > 1024) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.15s ease-out;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        cursor.style.left = cursorX - 4 + 'px';
        cursor.style.top = cursorY - 4 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Cursor scale on hover
    document.querySelectorAll('a, button, .project-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Preload images
const images = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.nav-toggle');

const closeNavigation = () => {
    if (!navLinks) return;
    navLinks.classList.remove('is-open');
    if (navToggle) {
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
    }
};

navToggle?.addEventListener('click', () => {
    if (!navLinks) return;
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navLinks?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => closeNavigation());
});

navLinks?.querySelectorAll('.translate-navigator').forEach(button => {
    button.addEventListener('click', () => closeNavigation());
});

document.addEventListener('click', (event) => {
    if (!navLinks || !navToggle) return;
    if (!event.target.closest('.nav') && navLinks.classList.contains('is-open')) {
        closeNavigation();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        closeNavigation();
    }
});

// Console signature
console.log('%cNolan Leggeri', 'font-size: 24px; font-weight: bold;');
console.log('%cPortfolio · 2026', 'font-size: 12px; color: #999;');
