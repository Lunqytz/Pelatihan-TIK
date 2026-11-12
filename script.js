
/* =====================================
   1. MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";

        });

    });

}


/* =====================================
   2. SCROLL REVEAL
===================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });

}


/* =====================================
   3. COPYRIGHT YEAR
===================================== */

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =====================================
   4. CONSOLE MESSAGE
===================================== */

console.log("Welcome to Lungit Tibra's Creative Portfolio!");
console.log("Thank you for visiting.");
