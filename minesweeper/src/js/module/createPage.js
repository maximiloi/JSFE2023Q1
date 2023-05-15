import createElement from '../utils/createElement';

function createPage() {
  document.body.classList.add('app');
  const app = document.querySelector('.app');
  // Создание элементов проекта на странице
  const appWrapper = createElement('section', 'app__wrapper');
  const titleElement = createElement('h1', 'app__title', 'RSS Minesweeper');
  const appInner = createElement('div', 'app__inner board');
  const settingWrapper = createElement('div', 'app__setting setting');

  appWrapper.append(titleElement, settingWrapper, appInner);
  app.prepend(appWrapper);
}

export default createPage;
