import './style.scss';
import createItemOnPage from "../../utils/createElement";

import rssLogo from '../../assets/rsschool_logo.png';
import githubLogo from '../../assets/github_logo.png';

const footerLinkRssHref: string = 'https://rs.school/js/';
const footerLinkGithubHref: string = 'https://github.com/maximiloi';
const footerLinkTarget: string = '_blank';

function createImageLink(name: string): void {
  createItemOnPage('.footer', 'a', `footer__link footer__link--${name}`);
  const footerLink: HTMLAnchorElement | null = document.querySelector(`.footer__link--${name}`);
  if (!footerLink) return;
  footerLink.href = name === 'rss' ? footerLinkRssHref : footerLinkGithubHref;
  footerLink.target = footerLinkTarget;

  createItemOnPage(`.footer__link--${name}`, 'img', `footer__img footer__${name}-logo`);
  const footerLogo: HTMLImageElement | null = document.querySelector(`.footer__${name}-logo`);
  if (!footerLogo) return;
  footerLogo.src = name === 'rss' ? rssLogo : githubLogo;
}

function renderFooter(): void {
  createItemOnPage('.app', 'footer', 'app__footer footer');
  createImageLink('rss');
  createItemOnPage('.footer', 'p', 'footer__copyring', '2023 - RSSchool');
  createImageLink('github');
}

export default renderFooter;