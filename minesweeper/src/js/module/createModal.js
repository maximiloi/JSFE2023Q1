import createElement from '../utils/createElement';

const createModal = () => {
  const appWrapper = document.querySelector('.app__wrapper');

  const modalWrapper = createElement('section', 'modal__wrapper');
  const modalInner = createElement('div', 'modal__inner');
  const titleElement = createElement('h2', 'modal__title', 'modal title');

  modalWrapper.append(modalInner);
  modalInner.append(titleElement);
  appWrapper.after(modalWrapper);
};

export default createModal;
