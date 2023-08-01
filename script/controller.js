let currentPage = 0;
function getAndShowListByPage(page) {
    getItemListByPage(page);
}

function getAndShowItemListOfNextPage(){
    currentPage++;
    console.log(currentPage)
    getItemListByPage(currentPage);
}

function getAndShowById(id) {
    getItemById(id);
}

function changePagination() {
    let checkbox = document.getElementById('is-pagination-on');
    localStorage.setItem('isPaginationEnabled', checkbox.checked);
    window.location.reload();
}

function loadExtraItems() {
    const height = document.body.offsetHeight
    const screenHeight = window.innerHeight
    // Записываем, сколько пикселей пользователь уже проскроллил:
    const scrolled = window.scrollY
    const threshold = height - screenHeight / 4
    // Отслеживаем, где находится низ экрана относительно страницы:
    const position = scrolled + screenHeight
    if (position >= threshold) {
        getAndShowItemListOfNextPage();
    }
}