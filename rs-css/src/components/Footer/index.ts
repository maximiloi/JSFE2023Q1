import { UElements } from '../../types/types';
import createElement from '../../utils/createElement';
import './index.scss';

import rssLogo from '../../assets/rsschool_logo.png'
import githubLogo from '../../assets/github_logo.png'

const footerSection: UElements[] = [
  { tagName: 'section', className: 'app__footer footer' },
  { tagName: 'img', className: 'footer__img footer__rsschool' },
  { tagName: 'p', className: 'footer__text', textContent: '2023 - RSSchool' },
  { tagName: 'img', className: 'footer__img footer__github' },
]

function createFooter(parentClassName: string): void {
  const footerElem: HTMLElement = createElement(footerSection[0].tagName, footerSection[0].className);
  const footerImgRSSchool: HTMLImageElement = createElement(footerSection[1].tagName, footerSection[1].className) as HTMLImageElement;
  footerImgRSSchool.src = rssLogo as string;
  const footerText: HTMLElement = createElement(footerSection[2].tagName, footerSection[2].className, footerSection[2].textContent);
  const footerImgGithub: HTMLImageElement = createElement(footerSection[3].tagName, footerSection[3].className) as HTMLImageElement;
  footerImgGithub.src = githubLogo as string;

  const parentElement: HTMLElement | null = document.querySelector(parentClassName);
  if (parentElement) {
    parentElement.append(footerElem);
  };

  footerElem.append(footerImgRSSchool, footerText, footerImgGithub)
}

export default createFooter;
