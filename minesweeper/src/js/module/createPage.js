import createElement from '../utils/createElement';

const createPage = () => {
  document.body.classList.add('app');
  const app = document.querySelector('.app');
  const appWrapper = createElement('section', 'app__wrapper');
  const titleElement = createElement('h1', 'app__title', 'RSS Minesweeper');
  const appInner = createElement('div', 'app__inner board');
  const settingWrapper = createElement('div', 'app__setting setting');
  const numberBomb = createElement('div', 'setting__wrapper number number__bomb');
  const reset = createElement('div', 'setting__wrapper reset');
  const numberTime = createElement('div', 'setting__wrapper number number__time');
  numberTime.innerText = '000';

  settingWrapper.append(numberBomb, reset, numberTime);
  appWrapper.append(titleElement, settingWrapper, appInner);
  app.prepend(appWrapper);
};

export default createPage;
