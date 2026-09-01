// Scroll reveal animations — runs first with its own fallback so a
// failure anywhere else in this file never leaves content permanently
// invisible (the .reveal CSS starts everything at opacity: 0).
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
);
revealItems.forEach((item) => revealObserver.observe(item));

setTimeout(() => {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}, 2000);

// Header shadow on scroll
const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

function closeMenu() {
  hamburger.classList.remove("active");
  mainNav.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener("click", () => {
  const isActive = mainNav.classList.toggle("active");
  hamburger.classList.toggle("active", isActive);
  hamburger.setAttribute("aria-expanded", String(isActive));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
