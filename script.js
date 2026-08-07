// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// ==========================
// Fade-in Animation
// ==========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

});


// ==========================
// Floating Profile Image
// ==========================

const image = document.querySelector(".hero-image img");

let position = 0;

let direction = 1;

setInterval(()=>{

    position += direction;

    image.style.transform = `translateY(${position}px)`;

    if(position > 10){

        direction = -1;

    }

    if(position < -10){

        direction = 1;

    }

},50);


// ==========================
// Typing Effect
// ==========================

const text = "Aspiring Data Analyst";

const typingElement = document.querySelector(".hero-text h2");

let index = 0;

typingElement.innerHTML = "";

function typing(){

    if(index < text.length){

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,100);

    }

}

typing();


// ==========================
// Button Click Animation
// ==========================

const button = document.querySelector("button");

button.addEventListener("click",()=>{

    button.innerHTML="Downloading...";

    setTimeout(()=>{

        button.innerHTML="Download Resume";

    },2000);

});


document.querySelector(".hero").classList.add("show");

function toggleEducation() {
    const details = document.getElementById("education-details");
    const arrow = document.getElementById("education-arrow");

    if (details.style.display === "block") {
        details.style.display = "none";
        arrow.textContent = "▼";
    } else {
        details.style.display = "block";
        arrow.textContent = "▲";
    }
}

// ==========================
// Skill Cards Animation
// ==========================

const skillCards = document.querySelectorAll(".skill-card");

const animateSkills = () => {

    skillCards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

};

window.addEventListener("scroll", animateSkills);

animateSkills();


// ==========================
// Project Card Animation
// ==========================

const projectCards = document.querySelectorAll(".project-card");

const animateProjects = () => {

    projectCards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

};

window.addEventListener("scroll", animateProjects);

animateProjects();

// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open / Close menu
menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.classList.toggle("active");
});

// Close when clicking outside
document.addEventListener("click", function (e) {

    if (
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }

});

// Close when clicking a menu item
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});

