// ===== TYPING ANIMATION =====
const roles = [
    'Aspiring Software Engineer',
    'Aspiring AI/ML Engineer',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
    const typedText = document.getElementById('typed-text');
    if (!typedText) return;
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        if (charIndex < currentRole.length) {
            typedText.textContent += currentRole.charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, 80);
        } else {
            isDeleting = true;
            setTimeout(typeRole, 2000);
        }
    } else {
        if (charIndex > 0) {
            typedText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeRole, 50);
        } else {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
        }
    }
}

// ===== TOP NAV / MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const header = document.querySelector('.header');

function syncNavHeight() {
    if (!header) return;
    const navHeight = Math.ceil(header.getBoundingClientRect().height);
    if (navHeight > 0) {
        document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
    }
}

function scrollToSectionWithOffset(target, behavior = 'smooth') {
    if (!target) return;
    const navHeightRaw = getComputedStyle(document.documentElement).getPropertyValue('--nav-height');
    const navHeight = Number.parseInt(navHeightRaw, 10) || 0;
    const navOffset = (target.id === 'projects' || target.id === 'education' || target.id === 'coding-progress' || target.id === 'contact') ? 0 : navHeight;
    const y = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(y, 0), behavior });
}

if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'false');
}

syncNavHeight();

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        const expanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', String(expanded));
    });
}

// Close sidebar when a nav item is clicked
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks) return;
    const clickedMenuToggle = menuToggle && menuToggle.contains(e.target);
    if (!navLinks.contains(e.target) && !clickedMenuToggle) {
        navLinks.classList.remove('active');
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 980 && navLinks) {
        navLinks.classList.remove('active');
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }
    syncNavHeight();
});

// ===== ACTIVE NAV HIGHLIGHTING =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === current) {
            item.classList.add('active');
        }
    });
}

// ===== SCROLL REVEAL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all cards and content
document.querySelectorAll('.education-card, .skill-item, .project-card, .skills-column').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== SKILL BAR ANIMATION =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(bar);
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            scrollToSectionWithOffset(target, 'smooth');
        }
    });
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    syncNavHeight();
    typeRole();
    animateSkillBars();
    updateActiveNav();

    if (window.location.hash) {
        const initialTarget = document.querySelector(window.location.hash);
        if (initialTarget) {
            setTimeout(() => scrollToSectionWithOffset(initialTarget, 'auto'), 0);
        }
    }
});

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);

// Smooth page transitions
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    syncNavHeight();
});

// Add some parallax effect on mouse move for hero section
const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
    document.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 10;
        
        heroImage.style.transform = `translateX(${mouseX}px) translateY(${mouseY}px)`;
    });
}

// Reset parallax on mouse leave
document.addEventListener('mouseleave', () => {
    if (heroImage) {
        heroImage.style.transform = 'translateX(0) translateY(0)';
    }
});
// ===== CONTACT FORM HANDLING =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const button = contactForm.querySelector('.contact-btn');
        if (!button) return;

        const originalText = button.textContent;
        button.textContent = 'Sending...';
        button.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: {
                    Accept: 'application/json'
                }
            });

            if (response.ok) {
                contactForm.reset();
                button.textContent = 'Message Sent!';
            } else {
                button.textContent = 'Failed to Send';
            }
        } catch (error) {
            button.textContent = 'Network Error';
        } finally {
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2500);
        }
    });
}
