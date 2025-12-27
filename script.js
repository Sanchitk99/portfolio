const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
    } else {
        header.style.boxShadow = "none";
    }
});
const sections = document.querySelectorAll("section");
const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});
window.addEventListener("scroll", revealSection);
revealSection();
const roles = [
    "Aspiring Software Engineer",
    "Aspiring Machine Learning Engineer"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typed-text");
function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typedText.textContent = currentRole.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            setTimeout(() => isDeleting = true, 1200);
        }
    } else {
        typedText.textContent = currentRole.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    const speed = isDeleting ? 60 : 120;
    setTimeout(typeEffect, speed);
}
typeEffect();
const nameElement = document.querySelector(".hover-name");
const text = nameElement.textContent;
nameElement.textContent = "";
[...text].forEach(char => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.classList.add("char");
    nameElement.appendChild(span);
});
const hero = document.querySelector(".hero");

particlesJS("particles-js", {
  particles: {
    number: {
      value: 500,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: ["#38bdf8", "#22d3ee"]
    },
    shape: { type: "circle" },
    opacity: {
      value: 5,
      random: true
    },
    size: {
      value: 2,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#38bdf8",
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      out_mode: "out"
    }
  },

  interactivity: {
    detect_on: "window", 
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.8,
        speed: 0.8
      },
      push: {
        particles_nb: 4
      }
    }
  },

  retina_detect: true
});
