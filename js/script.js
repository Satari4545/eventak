// Language Toggle
let currentLang = 'en';

const langToggle = document.getElementById('langToggle');
if (langToggle) {
    langToggle.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        switchLanguage(currentLang);
        langToggle.textContent = currentLang === 'en' ? 'عربي' : 'English';
    });
}

function switchLanguage(lang) {
    const body = document.body;
    const elements = document.querySelectorAll('[data-en][data-ar]');
    
    if (lang === 'ar') {
        body.classList.add('rtl');
        body.setAttribute('dir', 'rtl');
    } else {
        body.classList.remove('rtl');
        body.setAttribute('dir', 'ltr');
    }
    
    elements.forEach(element => {
        const text = element.getAttribute('data-' + lang);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Load saved language preference
window.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang === 'ar') {
        currentLang = 'ar';
        switchLanguage('ar');
        if (langToggle) {
            langToggle.textContent = 'English';
        }
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Active Navigation Link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Validate form
        if (!data.name || !data.email || !data.message || !data.service) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission (Replace this with actual backend integration)
        submitForm(data);
    });
}

function submitForm(data) {
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call (Replace with actual backend)
    setTimeout(() => {
        // Success response
        showMessage('Thank you for your message! We will get back to you soon.', 'success');
        contactForm.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // In a real implementation, you would send data to your backend:
        /*
        fetch('your-backend-url.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            showMessage('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
        })
        .catch(error => {
            showMessage('Something went wrong. Please try again later.', 'error');
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
        */
    }, 1500);
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .why-card, .about-text, .about-image'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Portfolio Item Click Handler (Optional - for future modal implementation)
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        // You can add a modal or lightbox here to show full project details
        console.log('Portfolio item clicked');
    });
});

// Back to Top Button (Optional Enhancement)
const createBackToTop = () => {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #6dd5c3 0%, #f39c7e 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        z-index: 999;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(-5px)';
        backToTop.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0)';
        backToTop.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    });
};

// Initialize back to top button
createBackToTop();

// Prevent default form submission
document.querySelectorAll('form').forEach(form => {
    if (!form.id) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    });
});

console.log('Eventak website loaded successfully!');
