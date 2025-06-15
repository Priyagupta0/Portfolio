// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");
  let menuOpen = false;

  // Toggle mobile menu
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("active");
      nav.classList.add("active");
      menuOpen = true;
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      menuBtn.classList.remove("active");
      nav.classList.remove("active");
      menuOpen = false;
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        menuBtn.classList.remove("active");
        nav.classList.remove("active");
        menuOpen = false;
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (menuOpen && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
      menuBtn.classList.remove("active");
      nav.classList.remove("active");
      menuOpen = false;
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Update active link on scroll
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 300) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });

  // Typed.js initialization with improved settings
  var typed = new Typed("#element", {
    strings: [
      "Web Developer",
      "AI/ML Enthusiast",
      "Programmer",
      "Android Developer",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    showCursor: false, // Using CSS for cursor
    smartBackspace: true,
    shuffle: false,
  });
});
