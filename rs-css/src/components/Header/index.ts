import { UElements } from '../../types/types';
import createElement from '../../utils/createElement';
import './index.scss';

import logoImg from '../../public/favicon.png'

const headerSection: UElements[] = [
  { tagName: 'div', className: 'app' },
  { tagName: 'section', className: 'app__header header' },
  { tagName: 'img', className: 'header__logo' },
  { tagName: 'h1', className: 'header__title', textContent: 'RSSchool | Css Dinner | iloi' }
]

function createHeader(parentClassName: string): void {
  const appElem: HTMLElement = createElement(headerSection[0].tagName, headerSection[0].className);
  const headerElem: HTMLElement = createElement(headerSection[1].tagName, headerSection[1].className);
  const headerLogoElem: HTMLImageElement = createElement(headerSection[2].tagName, headerSection[2].className) as HTMLImageElement;
  headerLogoElem.alt = 'logo images';
  headerLogoElem.src = logoImg as string;
  const headerTitleElem: HTMLElement = createElement(headerSection[3].tagName, headerSection[3].className, headerSection[3].textContent);

  headerElem.append(headerLogoElem, headerTitleElem);
  appElem.append(headerElem);

  const parentElement: HTMLElement | null = document.querySelector(parentClassName);
  if (parentElement) {
    parentElement.append(appElem);
  };
}

export default createHeader;
