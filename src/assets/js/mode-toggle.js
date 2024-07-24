const toggleBtn = document.querySelector("#toggle-btn");
const toggleBtnSlider = document.querySelector(".slider")
const toggleFont = document.querySelectorAll(".toggle-ft");
const toggleBackground = document.querySelectorAll(".toggle-bg");
const toggleBorder = document.querySelectorAll(".toggle-border");

toggleBtn.addEventListener('change', () => {
    if (toggleBtn.checked) {
        toggleBtnSlider.classList.toggle("dark-bg");
        toggleBtnSlider.classList.toggle("light-bg");
        toggleBtnSlider.classList.toggle("dark-ft");
        toggleBtnSlider.classList.toggle("light-ft");
        for (let i = 0; i < toggleFont.length; i++) {
            toggleFont[i].classList.toggle('dark-ft');
            toggleFont[i].classList.toggle('light-ft');
        }
        for (let i = 0; i < toggleBackground.length; i++) {
            toggleBackground[i].classList.toggle('dark-bg');
            toggleBackground[i].classList.toggle('light-bg');
        }
        for (let i = 0; i < toggleBorder.length; i++) {
            toggleBorder[i].classList.toggle('dark-border');
            toggleBorder[i].classList.toggle('light-border');
        }
    } else {
        toggleBtnSlider.classList.toggle("dark-bg");
        toggleBtnSlider.classList.toggle("light-bg");
        toggleBtnSlider.classList.toggle("dark-ft");
        toggleBtnSlider.classList.toggle("light-ft");
        for (let i = 0; i < toggleFont.length; i++) {
            toggleFont[i].classList.toggle('dark-ft');
            toggleFont[i].classList.toggle('light-ft');
        }
        for (let i = 0; i < toggleBackground.length; i++) {
            toggleBackground[i].classList.toggle('dark-bg');
            toggleBackground[i].classList.toggle('light-bg');
        }
        for (let i = 0; i < toggleBorder.length; i++) {
            toggleBorder[i].classList.toggle('dark-border');
            toggleBorder[i].classList.toggle('light-border');
        }
    }
});