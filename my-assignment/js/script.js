// script.js - GSAP animations + header + hamburger interactions
window.addEventListener('load', () => {
  // === GSAP SETUP ===
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Hero intro animation
    gsap.from(".hero-inner .kicker", { y: -10, opacity: 0, duration: 0.7, ease: "power3.out" });
    gsap.from(".hero-inner .hero-title", { y: 20, opacity: 0, duration: 0.9, delay: 0.08, ease: "power3.out" });
    gsap.from(".hero-inner .hero-sub", { y: 20, opacity: 0, duration: 0.9, delay: 0.14, ease: "power3.out" });
    gsap.from(".hero-inner .call-now", { scale: 0.95, opacity: 0, duration: 0.9, delay: 0.22, ease: "back.out(1.2)" });

    // Reveal each section on scroll
    gsap.utils.toArray('main section').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.05,
        ease: "power2.out"
      });
    });
  }

  // === HEADER SCROLL EFFECT ===
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });

  // === HAMBURGER TOGGLE (for mobile menu later) ===
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    document.body.classList.toggle('menu-open'); // optional: will control menu overlay later
  });

  // === CALL NOW BUTTON SCROLL ===
  const callNow = document.getElementById('callNow');
  if (callNow) {
    callNow.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        if (window.gsap && window.gsap.plugins && window.gsap.plugins.scrollTo) {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: contactSection, offsetY: 80 },
            ease: "power2.inOut"
          });
        } else {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // === CONTACT FORM (demo) ===
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Message sent (demo). Replace with your backend endpoint or form provider.');
    });
  }
});

gsap.utils.toArray('.choose-item').forEach((item, i) => {
  gsap.from(item, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
    }
  });
});

gsap.from(".search-container", {
  scrollTrigger: { trigger: ".search-section", start: "top 85%" },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// === Affiliations Carousel: Pause on Hover ===
const carousel = document.querySelector(".carousel-track");
if (carousel) {
  carousel.addEventListener("mouseenter", () => {
    carousel.style.animationPlayState = "paused";
  });
  carousel.addEventListener("mouseleave", () => {
    carousel.style.animationPlayState = "running";
  });
}