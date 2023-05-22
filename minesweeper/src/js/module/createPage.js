import createElement from '../utils/createElement';

const createPage = () => {
  document.body.classList.add('app');
  const app = document.querySelector('.app');
  const appWrapper = createElement('section', 'app__wrapper');
  const titleElement = createElement('h1', 'app__title', 'RSS Minesweeper');
  const appInner = createElement('div', 'app__inner board');
  const settingWrapper = createElement('div', 'app__setting setting');
  const numberBomb = createElement('div', 'number number__bomb');
  const reset = createElement('button', 'reset reset__button');
  const numberTime = createElement('div', 'number number__time');
  numberTime.innerText = '000';

  settingWrapper.append(numberBomb, reset, numberTime);
  appWrapper.append(titleElement, settingWrapper, appInner);
  app.prepend(appWrapper);
};

export default createPage;
