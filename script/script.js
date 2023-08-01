init();

function init() {
    let checkbox = document.getElementById('is-pagination-on');
    if (localStorage.getItem("isPaginationEnabled") === null) {
        localStorage.setItem("isPaginationEnabled", checkbox.checked);
        checkbox.checked = false;
    } else {
        checkbox.checked = /^true$/i.test(localStorage.getItem('isPaginationEnabled'));
    }

    getAndShowItemListOfNextPage()

    if (checkbox.checked) {
        enablePagination();
    } else {
        enableDynamicLoad();
    }

}

function enablePagination() {
    let pages = document.querySelector('.pages').style.display = 'block';
}

function enableDynamicLoad() {
    let enableCall = true;
    window.addEventListener('scroll', function() {
        if (!enableCall) return;

        enableCall = false;
        loadExtraItems()
        setTimeout(() => enableCall = true, 200);
        // loadExtraItems();

    });

    window.addEventListener('resize', function() {
        if (!enableCall) return;

        enableCall = false;
        loadExtraItems()
        setTimeout(() => enableCall = true, 200);
        // loadExtraItems();

    });
}
