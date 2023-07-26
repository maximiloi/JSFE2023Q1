import './style.scss';
import creatAddElementToPage from '../../utils/createElement';

function createHeader(): void {
  creatAddElementToPage('.app', 'header', 'app__header header');
  creatAddElementToPage('.header', 'h1', 'header__title', 'RS school | Async Race | iloi');
  creatAddElementToPage('.header', 'div', 'header__wrapper');
  creatAddElementToPage('.header__wrapper', 'button', 'header__button header__button--garage', 'to garage');
  const headerButtonGarageEl = document.querySelector('.header__button--garage') as HTMLButtonElement;
  headerButtonGarageEl.disabled = true;
  creatAddElementToPage('.header__wrapper', 'button', 'header__button header__button--winners', 'to winners');
}

export default createHeader;