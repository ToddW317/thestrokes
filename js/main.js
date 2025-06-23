// Mobile Navigation Toggle
const navToggle = document.querySelector('.navbar__toggle');
const navMenu = document.querySelector('.navbar__menu');
const navLinks = document.querySelectorAll('.navbar__link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
});

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('navbar--scrolled');
    } else {
        navbar.classList.remove('navbar--scrolled');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .gallery__item').forEach(el => {
    observer.observe(el);
});

// Parallax effect for hero images
const parallaxElements = document.querySelectorAll('[data-parallax]');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact__form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            
            if (response.ok) {
                submitButton.textContent = 'Sent Successfully!';
                contactForm.reset();
                
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            submitButton.textContent = 'Error - Please try again';
            submitButton.disabled = false;
            
            setTimeout(() => {
                submitButton.textContent = originalText;
            }, 3000);
        }
    });
}

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Before/After Slider
const slider = document.querySelector('.before-after__slider');

if (slider) {
    const handle = slider.querySelector('.before-after__slider-handle');
    const afterImage = slider.querySelector('.before-after__image--after');
    let isMoving = false;
    
    const moveSlider = (x) => {
        const rect = slider.getBoundingClientRect();
        let position = (x - rect.left) / rect.width;
        position = Math.max(0, Math.min(1, position));
        
        const percentage = position * 100;
        handle.style.left = `${percentage}%`;
        afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    };
    
    // Mouse events
    handle.addEventListener('mousedown', () => {
        isMoving = true;
        document.body.style.cursor = 'ew-resize';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isMoving) {
            moveSlider(e.clientX);
        }
    });
    
    document.addEventListener('mouseup', () => {
        isMoving = false;
        document.body.style.cursor = '';
    });
    
    // Touch events
    handle.addEventListener('touchstart', (e) => {
        isMoving = true;
    });
    
    document.addEventListener('touchmove', (e) => {
        if (isMoving) {
            moveSlider(e.touches[0].clientX);
        }
    });
    
    document.addEventListener('touchend', () => {
        isMoving = false;
    });
    
    // Click on slider to move handle
    slider.addEventListener('click', (e) => {
        if (e.target !== handle && !handle.contains(e.target)) {
            moveSlider(e.clientX);
        }
    });
} 