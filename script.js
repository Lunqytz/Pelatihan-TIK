
/* =====================================
   1. MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


/* CLOSE MENU AFTER CLICK */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


/* =====================================
   2. SCROLL REVEAL ANIMATION
===================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =====================================
   3. CURRENT YEAR
===================================== */

const yearElement = document.getElementById("current-year");

yearElement.textContent = new Date().getFullYear();


/* =====================================
   4. WELCOME MESSAGE
===================================== */

console.log("Welcome to Lungit Tibra's Portfolio!");
console.log("Thank you for visiting my website.");
