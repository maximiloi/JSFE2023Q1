import addToParentElement from '../../utils/addToParentElement';
import createElement from '../../utils/createElement';
import './index.scss';

import rssLogo from '../../assets/rsschool_logo.png'
import githubLogo from '../../assets/github_logo.png'

function createFooter(parentClassName: string): void {
  const footerElem: HTMLElement = createElement('footer', 'app__footer footer');

  const footerRSSLinkElem: HTMLAnchorElement = createElement('a', 'footer__link') as HTMLAnchorElement;
  footerRSSLinkElem.href = 'https://rs.school/js/' as string;
  footerRSSLinkElem.target = '_blank' as string;

  const footerImgRSSchool: HTMLImageElement = createElement('img', 'footer__img footer__rsschool') as HTMLImageElement;
  footerImgRSSchool.src = rssLogo;

  const footerText: HTMLElement = createElement('p', 'footer__text', '2023 - RSSchool');

  const footerGithubLinkElem: HTMLAnchorElement = createElement('a', 'footer__link') as HTMLAnchorElement;
  footerGithubLinkElem.href = 'https://github.com/maximiloi' as string;
  footerGithubLinkElem.target = '_blank' as string;

  const footerImgGithub: HTMLImageElement = createElement('img', 'footer__img footer__github') as HTMLImageElement;
  footerImgGithub.src = githubLogo;

  addToParentElement(parentClassName, footerElem);

  footerRSSLinkElem.append(footerImgRSSchool);
  footerGithubLinkElem.append(footerImgGithub)
  footerElem.append(footerRSSLinkElem, footerText, footerGithubLinkElem)
}

export default createFooter;
