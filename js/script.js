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
const scrollTopBtn = document.getElementById('scroll-top-btn');
let updateEducationTimeline = null;
let updateEducationTitleLock = null;

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
    const sectionScrollBoost = target.id === 'skills' ? 36 : 0;
    const y = target.getBoundingClientRect().top + window.scrollY - navOffset + sectionScrollBoost;
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
    if (updateEducationTimeline) {
        updateEducationTimeline();
    }
    if (updateEducationTitleLock) {
        updateEducationTitleLock();
    }
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

function updateScrollTopVisibility() {
    if (!scrollTopBtn) return;
    const shouldShow = window.scrollY > 420;
    scrollTopBtn.classList.toggle('show', shouldShow);
}

function setupEducationTimeline() {
    const educationScroll = document.getElementById('education-scroll');
    const educationBoard = document.getElementById('edu-board');
    const progressPath = document.getElementById('edu-line-progress');
    const milestones = document.querySelectorAll('.edu-timeline-item[data-progress]');

    if (!educationScroll || !educationBoard || !progressPath || milestones.length === 0) return;

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let pathLength = 0;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const activateMilestones = (progress) => {
        milestones.forEach((milestone) => {
            const triggerPoint = Number.parseFloat(milestone.dataset.progress) || 0;
            milestone.classList.toggle('is-active', progress >= triggerPoint);
        });
    };

    const setupPath = () => {
        pathLength = progressPath.getTotalLength();
        progressPath.style.strokeDasharray = `${pathLength}`;
        progressPath.style.strokeDashoffset = `${pathLength}`;
    };

    const positionMilestonesOnPath = () => {
        if (window.innerWidth <= 980 || pathLength <= 0) {
            milestones.forEach((milestone) => {
                milestone.style.removeProperty('left');
                milestone.style.removeProperty('top');
            });
            return;
        }

        const svg = progressPath.ownerSVGElement;
        const viewBox = svg && svg.viewBox ? svg.viewBox.baseVal : null;
        if (!svg || !viewBox || !viewBox.width || !viewBox.height) return;

        const scaleX = educationBoard.offsetWidth / viewBox.width;
        const scaleY = educationBoard.offsetHeight / viewBox.height;

        milestones.forEach((milestone) => {
            const progressPoint = clamp(Number.parseFloat(milestone.dataset.progress) || 0, 0, 1);
            const point = progressPath.getPointAtLength(pathLength * progressPoint);
            milestone.style.left = `${point.x * scaleX}px`;
            milestone.style.top = `${point.y * scaleY}px`;
        });
    };

    const renderEducationTimeline = () => {
        if (window.innerWidth <= 980 || reduceMotionQuery.matches) {
            progressPath.style.strokeDashoffset = '0';
            milestones.forEach((milestone) => milestone.classList.add('is-active'));
            return;
        }

        const rect = educationScroll.getBoundingClientRect();
        const stickyTop = Number.parseFloat(getComputedStyle(educationBoard).top) || 0;
        const totalDistance = Math.max(educationScroll.offsetHeight - educationBoard.offsetHeight, 1);
        const traveledDistance = clamp(stickyTop - rect.top, 0, totalDistance);
        const progress = traveledDistance / totalDistance;

        progressPath.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
        activateMilestones(progress);
    };

    setupPath();
    positionMilestonesOnPath();
    renderEducationTimeline();

    updateEducationTimeline = renderEducationTimeline;

    window.addEventListener('resize', () => {
        setupPath();
        positionMilestonesOnPath();
        renderEducationTimeline();
    });

    if (typeof reduceMotionQuery.addEventListener === 'function') {
        reduceMotionQuery.addEventListener('change', renderEducationTimeline);
    }
}

function setupEducationTitleLock() {
    const educationSection = document.getElementById('education');
    const educationScroll = document.getElementById('education-scroll');
    const educationBoard = document.getElementById('edu-board');
    const educationTitle = educationSection ? educationSection.querySelector('.section-title') : null;

    if (!educationSection || !educationScroll || !educationBoard || !educationTitle) return;

    const renderEducationTitleLock = () => {
        if (window.innerWidth <= 980) {
            educationSection.classList.remove('edu-title-fixed');
            educationSection.style.removeProperty('--edu-title-fixed-left');
            return;
        }

        const navHeightRaw = getComputedStyle(document.documentElement).getPropertyValue('--nav-height');
        const navHeight = Number.parseFloat(navHeightRaw) || 0;
        const stickyTop = navHeight + 6;
        const scrollRect = educationScroll.getBoundingClientRect();
        const sectionRect = educationSection.getBoundingClientRect();
        const totalDistance = Math.max(educationScroll.offsetHeight - educationBoard.offsetHeight, 1);
        const traveledDistance = Math.min(Math.max(stickyTop - scrollRect.top, 0), totalDistance);
        const progress = traveledDistance / totalDistance;

        // Keep title locked during the active timeline draw window only.
        const lockStart = scrollRect.top <= stickyTop;
        const lockEnd = progress >= 0.998 || scrollRect.bottom <= stickyTop;
        const shouldLock = lockStart && !lockEnd;

        educationSection.classList.toggle('edu-title-fixed', shouldLock);

        if (shouldLock) {
            const sectionStyles = getComputedStyle(educationSection);
            const paddingLeft = Number.parseFloat(sectionStyles.paddingLeft) || 0;
            const fixedLeft = Math.max(sectionRect.left + paddingLeft, 12);
            educationSection.style.setProperty('--edu-title-fixed-left', `${fixedLeft}px`);
        } else {
            educationSection.style.removeProperty('--edu-title-fixed-left');
        }
    };

    renderEducationTitleLock();
    updateEducationTitleLock = renderEducationTitleLock;
}

// ===== SECTION REVEAL ANIMATION =====
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-in');
            sectionObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -12% 0px'
});

document.querySelectorAll('main > section:not(#home)').forEach(section => {
    section.classList.add('section-reveal');
    sectionObserver.observe(section);
});

// ===== CARD REVEAL ANIMATION =====
const cardRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            cardRevealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -70px 0px'
});

// Observe all cards and content
const revealTargets = document.querySelectorAll('.education-card, .skill-item, .project-card, .skills-column');
const revealDirections = ['up', 'left', 'right', 'zoom'];

revealTargets.forEach((el, index) => {
    el.classList.add('reveal-ready');
    el.dataset.reveal = revealDirections[index % revealDirections.length];
    el.style.setProperty('--reveal-delay', `${(index % 8) * 70}ms`);
    cardRevealObserver.observe(el);
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
    updateScrollTopVisibility();
    setupEducationTimeline();
    setupEducationTitleLock();

    if (window.location.hash) {
        const initialTarget = document.querySelector(window.location.hash);
        if (initialTarget) {
            setTimeout(() => scrollToSectionWithOffset(initialTarget, 'auto'), 0);
        }
    }
});

// Update active nav + scroll-top visibility on scroll
window.addEventListener('scroll', () => {
    updateActiveNav();
    updateScrollTopVisibility();
    if (updateEducationTimeline) {
        updateEducationTimeline();
    }
    if (updateEducationTitleLock) {
        updateEducationTitleLock();
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

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
