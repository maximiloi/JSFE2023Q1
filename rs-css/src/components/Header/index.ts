import addToParentElement from '../../utils/addToParentElement';
import createElement from '../../utils/createElement';
import './index.scss';

import logoImg from '../../public/favicon.png'

function createHeader(parentClassName: string): void {
  const headerElem: HTMLElement = createElement('section', 'app__header header');
  const headerLogoElem: HTMLImageElement = createElement('img', 'header__logo') as HTMLImageElement;
  headerLogoElem.alt = 'logo images';
  headerLogoElem.src = logoImg as string;
  const headerTitleElem: HTMLElement = createElement('h1', 'header__title', 'RSSchool | Css Dinner | iloi');

  headerElem.append(headerLogoElem, headerTitleElem);

  addToParentElement(parentClassName, headerElem);
}

export default createHeader;
