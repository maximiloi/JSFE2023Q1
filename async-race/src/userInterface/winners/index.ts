import './style.scss';
import createItemOnPage from '../../utils/createElement';

function renderWinners(): void {
  createItemOnPage('.main', 'section', 'main__winners winners hidden');
  createItemOnPage('.winners', 'h2', 'winners__title', 'Winners');
  createItemOnPage('.winners', 'h3', 'winners__title--page', 'Page');
  createItemOnPage('.winners', 'div', 'winners__table table');
}

export default renderWinners;
