/*
---------------------------------------------------------
    Displayed when a certain other element is clicked
---------------------------------------------------------
*/

function displayResourcesList (list) {
    if (list.classList.contains('active')) {
        list.classList.remove('active');
    } else {
        list.classList.add('active');
    }
}

// Hamburger Menu
const navMenuHamburger = document.querySelector(".nav-menu-hamburger");
const navMenu = document.querySelector(".nav-menu");

// Resources page all 3 dropdowns
const rsrcSelectorArts = document.querySelector("#resource-selector-articles");
const rsrcSelectorDocus = document.querySelector("#resource-selector-documentaries");
const rsrcSelectorOrgs = document.querySelector("#resource-selector-organizations");
const rsrcListArts = document.querySelector("#resource-list-articles");
const rsrcListDocus = document.querySelector("#resource-list-documentaries");
const rsrcListOrgs = document.querySelector("#resource-list-organizations");

// Contact Us page country dropdown
const contactCountrySelectorDropdown = document.querySelector("#contact-country-selector");
const contactCountryList = document.querySelector("#country-list");

navMenuHamburger.addEventListener("click", (event) => {
    displayResourcesList(navMenu);
    event.stopPropagation();
});

rsrcSelectorArts.addEventListener('click', (event) => {
    displayResourcesList(rsrcListArts);
    event.stopPropagation();
});
rsrcSelectorDocus.addEventListener('click', (event) => {
    displayResourcesList(rsrcListDocus);
    event.stopPropagation();
});
rsrcSelectorOrgs.addEventListener('click', (event) => {
    displayResourcesList(rsrcListOrgs);
    event.stopPropagation();
});

contactCountrySelectorDropdown.addEventListener('click', (event) => {
    displayResourcesList(contactCountryList);
    event.stopPropagation();
});