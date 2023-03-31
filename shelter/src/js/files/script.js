console.log('self-check: 100 point');

console.log('');

const documentActions = e => {
    const targetElem = e.target;
    // console.log('%c [ targetElem ]-29', 'font-size:13px; background:pink; color:#bf2c9f;', targetElem);
    // Работа с меню

    // открываем меню и закрываем меню
    if (targetElem.closest('.nav__burger')) {
        document.documentElement.classList.toggle('_open-nav');
    }

    // Клик по выбранной ссылке
    if (targetElem.closest('.nav__link')) {
        document.documentElement.classList.remove('_open-nav');
    }

    // Если клик на любом другом поле
    if (!targetElem.closest('.nav__burger') && !targetElem.closest('.nav__list')) {
        document.documentElement.classList.remove('_open-nav');
    }
};

document.addEventListener('click', documentActions);
