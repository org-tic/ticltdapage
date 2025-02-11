document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});


// HEADER RESPONSIVE
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".header-items");
    const dropdownToggles = document.querySelectorAll(".drop-toggle");
    
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        document.body.style.overflow = 'hidden';
    });
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            const dropMenu = this.nextElementSibling;
            dropMenu.classList.toggle("active");
        });
    });
    
    window.addEventListener("resize", function () {
        if (window.innerWidth > 820) {
            menu.classList.remove("active");
        }
    });
});

// ANIMACION ICON NAV AL TOGGLE
document.addEventListener("DOMContentLoaded", function () {
    const iconToggle1 = document.getElementById("iconToggle1");
    const iconToggle2 = document.getElementById("iconToggle2");

    const drop1 = document.querySelector(".drop:nth-of-type(1)"); // Primer menú desplegable
    const drop2 = document.querySelector(".drop:nth-of-type(2)"); // Segundo menú desplegable

    function addRotation(icon) {
        icon.classList.add("vuelta");
    }

    function removeRotation(icon) {
        icon.classList.remove("vuelta");
    }

    drop1.addEventListener("mouseenter", () => addRotation(iconToggle1));
    drop1.addEventListener("mouseleave", () => removeRotation(iconToggle1));

    drop2.addEventListener("mouseenter", () => addRotation(iconToggle2));
    drop2.addEventListener("mouseleave", () => removeRotation(iconToggle2));
});
