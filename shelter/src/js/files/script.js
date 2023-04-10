import { prevSlider, nextSlider } from './generateCard.js';
import { startFriends, prevFriends, nextFriends, endFriends } from './generateFriends.js';

let modalElements = document.querySelectorAll('.modal-pets__wrapper');

const closeModal = () => {
    modalElements.forEach(element => {
        document.body.classList.remove('_layout');
        element.classList.remove('_active');
    });
};

const documentActions = e => {
    const targetElem = e.target;
    // console.log('targetElem: ', targetElem);

    // Работа с меню

    // открываем меню и закрываем меню при нажатии кнопку бургера
    if (targetElem.closest('.nav__burger')) {
        document.body.classList.toggle('_layout');
        document.documentElement.classList.toggle('_open-nav');
    }

    // закрытие меню и модалбного окна при нажатию на ссылку(бургер) или оверлей
    if (
        targetElem.closest('.nav__link') ||
        (!targetElem.closest('.modal-pets__content') &&
            !targetElem.closest('.nav__burger') &&
            !targetElem.closest('.nav__list'))
    ) {
        document.body.classList.remove('_layout');
        document.documentElement.classList.remove('_open-nav');
        closeModal();
    }

    // Работа с карточками животных

    // Показываем модальное окно нажатое на карточку
    if (targetElem.closest('.slider__slide')) {
        let namePets = targetElem.closest('.slider__slide').dataset.petsName;

        modalElements.forEach(element => {
            if (element.dataset.petsName === namePets) {
                document.body.classList.add('_layout');
                element.classList.add('_active');
            }
        });
    }

    // Закрытие модального окна по кнопке
    if (targetElem.closest('.modal-pets__button--close')) {
        closeModal();
    }

    // пролистывание слайдера на странице index
    if (targetElem.closest('.slider__nav-button--prev')) {
        prevSlider();
    }

    // пролистывание слайдера на странице index
    if (targetElem.closest('.slider__nav-button--next')) {
        nextSlider();
    }

    // Пагинация на старт
    if (targetElem.closest('.pagging__arrow--start')) {
        startFriends();
    }

    // Пагинация назад
    if (targetElem.closest('.pagging__arrow--prev')) {
        prevFriends();
    }

    // Пагинация вперед
    if (targetElem.closest('.pagging__arrow--next')) {
        nextFriends();
    }

    // Пагинация на конец
    if (targetElem.closest('.pagging__arrow--end')) {
        endFriends();
    }
};

document.addEventListener('click', documentActions);
