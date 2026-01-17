// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Hero Slider
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

if (slides.length > 0) {
    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    const nextSlideBtn = document.querySelector(".next-slide");
    const prevSlideBtn = document.querySelector(".prev-slide");

    if (nextSlideBtn && prevSlideBtn) {
        nextSlideBtn.addEventListener("click", () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        prevSlideBtn.addEventListener("click", () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        // Auto-slide every 5 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }
}
// Booking Form Validation
const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const tour = document.getElementById('tour').value;
        const date = document.getElementById('date').value;

        if(name === '' || email === '' || phone === '' || tour === '' || date === '') {
            formMessage.style.color = 'white';
            formMessage.style.backgroundColor = '#dc3545';
            formMessage.textContent = 'Please fill in all required fields.';
            formMessage.style.display = 'block';
            return;
        }

        // Regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            formMessage.style.color = 'white';
            formMessage.style.backgroundColor = '#dc3545';
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.display = 'block';
            return;
        }

        // Regex for phone validation
        const phoneRegex = /^[+0-9\s]{10,15}$/;
        if(!phoneRegex.test(phone)) {
            formMessage.style.color = 'white';
            formMessage.style.backgroundColor = '#dc3545';
            formMessage.textContent = 'Please enter a valid phone number.';
            formMessage.style.display = 'block';
            return;
        }

        // Success message
        formMessage.style.color = 'white';
        formMessage.style.backgroundColor = '#28a745';
        formMessage.textContent = 'Booking submitted successfully! We will contact you soon.';
        formMessage.style.display = 'block';

        // Reset form
        bookingForm.reset();
    });
}
// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
        question.addEventListener('click', function(e) {
            e.preventDefault();
            const answer = this.nextElementSibling;
            
            if (!answer || !answer.classList.contains('faq-answer')) {
                return;
            }
            
            const isOpen = answer.style.display === 'block';

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });

            // Toggle current answer
            if (!isOpen) {
                answer.style.display = 'block';
            }
        });
    });
}
// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('cname').value.trim();
        const email = document.getElementById('cemail').value.trim();
        const message = document.getElementById('cmessage').value.trim();

        if(name === '' || email === '' || message === '') {
            contactMessage.style.color = 'white';
            contactMessage.style.backgroundColor = '#dc3545';
            contactMessage.textContent = 'Please fill in all required fields.';
            contactMessage.style.display = 'block';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            contactMessage.style.color = 'white';
            contactMessage.style.backgroundColor = '#dc3545';
            contactMessage.textContent = 'Please enter a valid email address.';
            contactMessage.style.display = 'block';
            return;
        }

        contactMessage.style.color = 'white';
        contactMessage.style.backgroundColor = '#28a745';
        contactMessage.textContent = 'Message sent successfully! We will get back to you soon.';
        contactMessage.style.display = 'block';

        contactForm.reset();
    });
}

// Newsletter Subscription
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = this.querySelector('input[type="email"]').value.trim();

        if(email === '') {
            newsletterMessage.style.color = 'white';
            newsletterMessage.style.backgroundColor = '#dc3545';
            newsletterMessage.textContent = 'Please enter your email address.';
            newsletterMessage.style.display = 'block';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            newsletterMessage.style.color = 'white';
            newsletterMessage.style.backgroundColor = '#dc3545';
            newsletterMessage.textContent = 'Please enter a valid email address.';
            newsletterMessage.style.display = 'block';
            return;
        }

        newsletterMessage.style.color = 'white';
        newsletterMessage.style.backgroundColor = '#28a745';
        newsletterMessage.textContent = 'Thank you for subscribing! Check your email for confirmation.';
        newsletterMessage.style.display = 'block';

        newsletterForm.reset();
    });
}


const filterBtns = document.querySelectorAll('.filter-btn');
const galleryCategories = document.querySelectorAll('.gallery-category');

// Initialize: show all categories
if (galleryCategories.length > 0) {
    galleryCategories.forEach(category => {
        category.style.display = 'block';
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        // Show/hide categories based on filter
        galleryCategories.forEach(category => {
            if (filterValue === 'all') {
                category.style.display = 'block';
            } else {
                const categoryFilter = category.getAttribute('data-category');
                if (categoryFilter === filterValue) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            }
        });
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.tour-card, .gallery-item, .faq-item').forEach(el => {
    observer.observe(el);
});

// Smooth Scroll Behavior Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Lazy Loading for Images (Performance Enhancement)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Form Input Real-time Validation with Visual Feedback
const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        this.style.borderColor = this.value.trim() !== '' ? '#0a3d2e' : '#d32f2f';
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = '#0a3d2e';
    });
});

// Accessibility: Focus Management
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const menus = document.querySelectorAll('.nav-links');
        menus.forEach(menu => {
            if (menu.style.display === 'flex') {
                menu.style.display = 'none';
            }
        });
    }
});

// Performance Monitoring
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page Load Time:', pageLoadTime, 'ms');
});

// Dark Mode Toggle (Optional Enhancement)
const darkModeToggle = localStorage.getItem('darkMode');
if (darkModeToggle === 'enabled') {
    document.body.style.filter = 'invert(1) hue-rotate(180deg)';
}
