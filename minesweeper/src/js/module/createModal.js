import { clickSquareCountFN } from '../module';
import createElement from '../utils/createElement';
import { secondCounter } from './timer';

const createModal = (status) => {
  const appWrapper = document.querySelector('.app__wrapper');
  let statusTitle, statusText = '';

  if (status === 'win') {
    statusTitle = `Hooray! 🎉`
    statusText = `You found all mines in ${secondCounter()} seconds and ${clickSquareCountFN()} moves!`;
  } else {
    statusTitle = `Game over. `;
    statusText = `Try again`;
  }
  const modalWrapper = createElement('section', 'modal__wrapper');
  const modalInner = createElement('div', 'modal__inner');
  const titleElement = createElement('h3', 'modal__title', statusTitle);
  const textModal = createElement('h3', 'modal__text', statusText);

  modalWrapper.append(modalInner);
  modalInner.append(titleElement, textModal);
  appWrapper.after(modalWrapper);
};

export default createModal;
