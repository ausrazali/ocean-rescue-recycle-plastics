const contactCountrySelectorDropdown = document.querySelector("#contact-country-selector");
const contactCountryList = document.querySelector("#country-list");

contactCountrySelectorDropdown.addEventListener('click', (event) => {
    if (contactCountryList.classList.contains('active')) {
        contactCountryList.classList.remove('active');
    } else {
        contactCountryList.classList.add('active');
    }

    event.stopPropagation(); // stop event listener from bubbling to parent element
});
