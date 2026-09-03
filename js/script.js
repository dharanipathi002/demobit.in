/* =========================================================
   DEMOBIT — JAVASCRIPT
   ========================================================= */

   document.addEventListener("DOMContentLoaded", () => {

    /* ---------- MOBILE MENU ---------- */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }


    /* ---------- HEADER SCROLL EFFECT ---------- */

    const header = document.querySelector(".site-header");

    const updateHeader = () => {

        if (!header) {
            return;
        }

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader);


    /* ---------- SCROLL REVEAL ---------- */

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });


    /* ---------- EMAIL FORM ---------- */

    const emailForm =
        document.querySelector("#notify-form");

    if (emailForm) {

        emailForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const input =
                emailForm.querySelector("input");

            if (!input || !input.value.trim()) {
                return;
            }

            alert(
                "Thank you! DEMOBIT updates will be available soon."
            );

            input.value = "";
        });
    }


    /* ---------- CONTACT FORM ---------- */

    const contactForm =
        document.querySelector("#contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            alert(
                "Thank you for contacting DEMOBIT. " +
                "We will get back to you soon."
            );

            contactForm.reset();
        });
    }

});