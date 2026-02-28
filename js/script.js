// ===== TYPING ANIMATION =====
const roles = [
    'Software Engineer',
    'AI/ML Enthusiast',
    'Data Scientist',
    'Full Stack Developer'
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

// ===== SIDEBAR / MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const body = document.body;

function updateSidebarToggleState() {
    if (!sidebarToggle) return;
    const isCollapsed = body.classList.contains('sidebar-collapsed');
    const icon = sidebarToggle.querySelector('i');

    sidebarToggle.setAttribute('aria-label', isCollapsed ? 'Open sidebar' : 'Close sidebar');
    sidebarToggle.setAttribute('aria-expanded', String(!isCollapsed));

    if (icon) {
        icon.classList.toggle('fa-chevron-left', !isCollapsed);
        icon.classList.toggle('fa-chevron-right', isCollapsed);
    }
}

// make sure the button has a defined expanded state
if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'false');
}

if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        const expanded = sidebar.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', String(expanded));
    });
}

if (sidebarToggle) {
    updateSidebarToggleState();

    sidebarToggle.addEventListener('click', (e) => {
        e.stopPropagation();

        if (window.innerWidth <= 768 && sidebar) {
            sidebar.classList.toggle('active');
            const expanded = sidebar.classList.contains('active');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', String(expanded));
            }
            return;
        }

        body.classList.toggle('sidebar-collapsed');
        updateSidebarToggleState();
    });
}

// Close sidebar when a nav item is clicked
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (sidebar) {
            sidebar.classList.remove('active');
        }
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!sidebar) return;
    const clickedMenuToggle = menuToggle && menuToggle.contains(e.target);
    const clickedSidebarToggle = sidebarToggle && sidebarToggle.contains(e.target);
    if (!sidebar.contains(e.target) && !clickedMenuToggle && !clickedSidebarToggle) {
        sidebar.classList.remove('active');
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && sidebar) {
        sidebar.classList.remove('active');
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }
    updateSidebarToggleState();
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
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    typeRole();
    animateSkillBars();
    updateActiveNav();
});

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);

// Smooth page transitions
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
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
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Log the form data (in production, send to backend)
        console.log('Form submitted with data:', data);
        
        // Show success message
        const button = contactForm.querySelector('.contact-btn');
        const originalText = button.textContent;
        button.textContent = 'Message Sent! ✓';
        button.style.background = 'var(--green-accent)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 3000);
    });
}
