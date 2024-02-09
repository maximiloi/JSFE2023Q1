import './style.scss';
import createItemOnPage from '../../utils/createElement';

function createHeader(): void {
  createItemOnPage('.app', 'header', 'app__header header');
  createItemOnPage('.header', 'h1', 'header__title', 'RS school | Async Race | iloi');
  createItemOnPage('.header', 'div', 'header__wrapper');
  createItemOnPage('.header__wrapper', 'button', 'header__button header__button--garage', 'to garage');
  const headerButtonGarageEl = document.querySelector('.header__button--garage') as HTMLButtonElement;
  headerButtonGarageEl.disabled = true;
  createItemOnPage('.header__wrapper', 'button', 'header__button header__button--winners', 'to winners');
}

export default createHeader;