import './style.scss';
import creatAddElementToPage from '../../utils/createElement';

function renderWinners(): void {
  creatAddElementToPage('.main', 'section', 'main__winners winners hidden');
  creatAddElementToPage('.winners', 'h2', 'winners__title', 'Winners');
  creatAddElementToPage('.winners', 'h3', 'winners__title--page', 'Page');
  creatAddElementToPage('.winners', 'div', 'winners__table table');
}

export default renderWinners;
