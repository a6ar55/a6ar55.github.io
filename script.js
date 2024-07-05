// About section animations
gsap.registerPlugin(ScrollTrigger);

// Text reveal animation
gsap.from('#about p', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 60%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

// Tech stack animation
gsap.from('.tech-stack li', {
    scrollTrigger: {
        trigger: '.tech-stack',
        start: 'top 80%',
    },
    scale: 0,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'back.out(1.7)'
});

// Blob animation
const blob = document.querySelector('.blob-animation path');
gsap.to(blob, {
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    morphSVG: {
        shape: 'M42.8,-73.2C54.9,-67.3,63.9,-54.9,71.9,-41.3C79.8,-27.7,86.7,-13.9,87.2,0.3C87.7,14.4,81.8,28.8,73.6,41.8C65.4,54.8,55,66.4,42,74.3C29,82.2,14.5,86.5,-0.2,86.8C-14.9,87.1,-29.8,83.5,-42.6,76.1C-55.4,68.7,-66,57.5,-73.4,44.3C-80.8,31.1,-84.9,15.5,-84.6,0.2C-84.3,-15.2,-79.6,-30.4,-71.7,-43.7C-63.8,-57,-52.8,-68.4,-39.8,-73.8C-26.7,-79.2,-13.4,-78.5,0.8,-79.8C14.9,-81.1,29.8,-84.4,42.8,-73.2Z',
    }
});

// Profile picture reveal
gsap.from('.profile-picture', {
    scrollTrigger: {
        trigger: '.about-visual',
        start: 'top 60%',
    },
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)'
});
// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero h1', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.hero p', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.hero .btn', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.4
});

gsap.utils.toArray('.skill-card, .project-card, .blog-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100px',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
    });
});

// Custom Cursor
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#64ffda" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#64ffda", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    const scrollPosition = window.pageYOffset;
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Fade-in Effect
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Dynamic Year in Footer
document.querySelector('footer .container p').innerHTML = `&copy; ${new Date().getFullYear()} Adars T S. All rights reserved.`;

// Form Submission (if you add a contact form)
// const form = document.querySelector('#contact-form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form submitted');
// });

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav ul');

mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});
// Experience section animations
const timelineItems = document.querySelectorAll('.timeline-item');

const fadeInTimeline = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
};

const timelineObserver = new IntersectionObserver(fadeInTimeline, {
    root: null,
    threshold: 0.1,
});

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Add this to your existing GSAP animations
gsap.from('.timeline-item', {
    scrollTrigger: {
        trigger: '#experience',
        start: 'top center',
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out'
});

// Skill Progress Bars (if you decide to add them)
// function animateSkills() {
//     const skills = document.querySelectorAll('.skill-progress');
//     skills.forEach(skill => {
//         const progress = skill.dataset.progress;
//         skill.style.width = progress;
//     });
// }

// ScrollTrigger.create({
//     trigger: "#skills",
//     onEnter: animateSkills
// });