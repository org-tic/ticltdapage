
// HEADER RESPONSIVE
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".header-items");
    const dropdownToggles = document.querySelectorAll(".drop-toggle");
    
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
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
function aniToggle1(){
    let iconToggle1 = document.getElementById('iconToggle1')

    if (!iconToggle1.classList.contains('vuelta') ) {
            iconToggle1.classList.add('vuelta')
    }else{
        iconToggle1.classList.remove('vuelta')
    }
}
function aniToggle2(){
    let iconToggle2 = document.getElementById('iconToggle2')

    if (!iconToggle2.classList.contains('vuelta') ) {
            iconToggle2.classList.add('vuelta')
    }else{
        iconToggle2.classList.remove('vuelta')
    }
}