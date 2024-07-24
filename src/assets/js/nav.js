const navMenuHamburger = document.querySelector(".nav-menu-hamburger");
const navMenu = document.querySelector(".nav-menu");
const websiteTitle = document.querySelector(".website-title");

navMenuHamburger.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        websiteTitle.style.top = '0';
    } else {
        navMenu.classList.add("active");
        const navMenuHeight = navMenu.offsetHeight; // clientHeight;
        // websiteTitle.style.top = `calc(2rem + .5rem + ${navMenuHeight}px)`;
    }
});