const outsideBlock = document.querySelector('.outside-block');
function showItemList(info) {

    if (localStorage.getItem("isPaginationEnabled") === "true") {
        while (outsideBlock.firstChild) {
            outsideBlock.removeChild(outsideBlock.firstChild);
        }
    }

    for (obj of info.results) {
        let block = document.createElement('div');
        block.classList.add('block');
        let imgBlock = document.createElement('div');
        imgBlock.classList.add('img-block');
        let img = document.createElement('img');
        img.classList.add('images');
        img.src = obj.image;

        let nameCharacter = document.createElement('div');
        nameCharacter.classList.add('name-character');
        nameCharacter.textContent = obj.name;

        imgBlock.appendChild(img);
        block.appendChild(imgBlock);
        block.appendChild(nameCharacter);
        block.setAttribute('itemID', obj.id);

        block.addEventListener('click', function (event) {
            getAndShowById(block.getAttribute('itemID'));
        });
        outsideBlock.appendChild(block);
    }

    // Pagination
    if (localStorage.getItem("isPaginationEnabled") === "true") {

        let pagesCount = info.info.pages;
        let pages = document.querySelector('.pages');

        while (pages.firstChild) {
            pages.removeChild(pages.firstChild);
        }

        for (let i = 1; i <= pagesCount; i++) {
            let currentPage = document.createElement('button');
            currentPage.setAttribute('pageNumber', i.toString());
            currentPage.textContent = i.toString();

            currentPage.addEventListener('click', function (event) {
                getAndShowListByPage(currentPage.getAttribute('pageNumber'));
                window.scrollTo(0, 0)
            })
            pages.appendChild(currentPage);
        }
    }
}
function showCharacterInfo(info) {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";

    let modalContent = document.querySelector('.modal-content');
    let wrapperModal = document.createElement('div');
    wrapperModal.classList.add('wrapper-modal');
    let imgModalWrap = document.createElement('div');
    imgModalWrap.classList.add('img-modal-wrap');
    let imgModal = document.createElement('img');
    imgModal.classList.add('img-modal');
    imgModal.src = info.image;
    console.log(info.image);

    let characterAllDescription = document.createElement('div');
    characterAllDescription.classList.add('character-all-description');

    characterAllDescription.innerHTML = `<div><strong>Name: </strong>${info.name}</div><br>
                                        <div><strong>Status: </strong>${info.status}</div><br>
                                        <div><strong>Species: </strong>${info.species}</div><br>
                                        <div><strong>Origin: </strong>${info.origin.name}</div><br>
                                        <div><strong>Location: </strong>${info.location.name}</div><br>
                                        <div><strong>Gender: </strong>${info.gender}</div>`;

    imgModalWrap.appendChild(imgModal);
    wrapperModal.appendChild(imgModalWrap);
    wrapperModal.appendChild(characterAllDescription);
    modalContent.appendChild(wrapperModal);

    let span = document.getElementsByClassName("close")[0];
    // Когда пользователь нажимает на 'x', закрыть модальное окно
    span.onclick = function () {
        modal.style.display = "none";
        modalContent.removeChild(wrapperModal);
    }
    // Когда пользователь щелкает в любом месте за пределами модального окна
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalContent.removeChild(wrapperModal);
        }

    }
}