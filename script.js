/* =========================================================
   SHARON PRIYADHARSHINI — PORTFOLIO INTERACTIONS
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".site-header");
const navigationLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");
const revealElements = document.querySelectorAll(".reveal");
const year = document.getElementById("year");

/* ================= MOBILE MENU ================= */

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    navigationLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    document.addEventListener("click", event => {
        if (!event.target.closest(".navbar")) {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }
    });
}

/* ================= HEADER SHADOW ================= */

function updateHeader() {
    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 20);
    }
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

/* ================= SCROLL REVEAL ================= */

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealElements.forEach(element => observer.observe(element));
} else {
    revealElements.forEach(element => element.classList.add("show"));
}

/* ================= ACTIVE NAVIGATION ================= */

function updateActiveNav() {
    const scrollPosition = window.scrollY + 180;
    let current = "home";

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) {
            current = section.id;
        }
    });

    navigationLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();

/* ================= CURRENT YEAR ================= */

if (year) {
    year.textContent = new Date().getFullYear();
}

/* ================= PLACEHOLDER LINKS ================= */

document.querySelectorAll(".placeholder-link").forEach(link => {
    link.addEventListener("click", event => {
        if (link.getAttribute("href") === "#") {
            event.preventDefault();
            const label = link.dataset.label || "Please add the link first.";
            alert(label);
        }
    });
});
