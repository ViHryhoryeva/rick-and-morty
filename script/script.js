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

    enableArrowToTop();

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
        setTimeout(() => enableCall = true, 150);
    });

    window.addEventListener('resize', function() {
        if (!enableCall) return;

        enableCall = false;
        loadExtraItems()
        setTimeout(() => enableCall = true, 150);

    });
}

function enableArrowToTop() {
    let arrow = window.document.querySelector('.arrow')

    window.addEventListener('scroll', function() {
        if (window.scrollY < 300) {
            arrow.style.display = 'none';
        } else {
            arrow.style.display = 'block';
        }
    });

    arrow.addEventListener('click', function() {
        requestAnimationFrame(tick);
    });

    function tick() {

        window.scrollTo(0, window.scrollY - 100);

        let id = requestAnimationFrame(tick);
        if (window.scrollY <= 2) {
            cancelAnimationFrame(id);
        }
    }
}
