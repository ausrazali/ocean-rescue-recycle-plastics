const rsrcSelectorArts = document.querySelector("#resource-selector-articles");
const rsrcSelectorDocus = document.querySelector("#resource-selector-documentaries");
const rsrcSelectorOrgs = document.querySelector("#resource-selector-organizations");

const rsrcListArts = document.querySelector("#resource-list-articles");
const rsrcListDocus = document.querySelector("#resource-list-documentaries");
const rsrcListOrgs = document.querySelector("#resource-list-organizations");

function displayResourcesList (list) {
    if (list.classList.contains('active')) {
        list.classList.remove('active');
    } else {
        list.classList.add('active');
    }
}

rsrcSelectorArts.addEventListener('click', () => {displayResourcesList(rsrcListArts)});
rsrcSelectorDocus.addEventListener('click', () => {displayResourcesList(rsrcListDocus)});
rsrcSelectorOrgs.addEventListener('click', () => {displayResourcesList(rsrcListOrgs)});