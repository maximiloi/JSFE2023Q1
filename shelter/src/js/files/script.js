console.log('self-check: 100 point');
console.log('');

const documentActions = e => {
    const targetElem = e.target;
    const modalElements = document.querySelectorAll('.modal-pets__wrapper');
    // console.log('targetElem: ', targetElem);

    // Работа с меню

    // открываем меню и закрываем меню
    if (targetElem.closest('.nav__burger')) {
        document.body.classList.toggle('_layout');
        document.documentElement.classList.toggle('_open-nav');
    }

    // Клик по выбранной ссылке или любом другом месте
    if (
        targetElem.closest('.nav__link')
        // || (!targetElem.closest('.nav__burger') && !targetElem.closest('.nav__link'))
    ) {
        document.body.classList.remove('_layout');
        document.documentElement.classList.remove('_open-nav');

        modalElements.forEach(element => {
            element.classList.remove('_active');
        });
    }

    if (targetElem.closest('.slider__button')) {
        // const modalElements = document.querySelectorAll('.modal-pets__wrapper');

        modalElements.forEach(element => {
            if (element.dataset.petsName === targetElem.dataset.petsName) {
                document.body.classList.toggle('_layout');
                element.classList.add('_active');
            }
        });
    }

    if (targetElem.closest('.modal-pets__button')) {
        targetElem.parentElement.parentElement.classList.remove('_active');
    }
};

document.addEventListener('click', documentActions);
