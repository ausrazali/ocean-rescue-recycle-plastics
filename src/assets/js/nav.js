const navMenuHamburger = document.querySelector(".nav-menu-hamburger");
const navMenu = document.querySelector(".nav-menu");
const websiteTitle = document.querySelector(".website-title");

navMenuHamburger.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
    } else {
        navMenu.classList.add("active");
    }
});