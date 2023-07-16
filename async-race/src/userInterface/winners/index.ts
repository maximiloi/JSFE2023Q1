import './style.scss';
import creatAddElementToPage from '../../utils/createElement';

function renderWinners(): void {
  creatAddElementToPage('.main', 'section', 'main__winners winners');
  creatAddElementToPage('.winners', 'h2', 'winners__title', 'Winners');
  creatAddElementToPage('.winners', 'h3', 'winners__title--page', 'Page');
  creatAddElementToPage('.winners', 'div', 'winners__table table');

  creatAddElementToPage('.table', 'div', 'table__title table__cell', 'Number');
  creatAddElementToPage('.table', 'div', 'table__title table__cell table__cell--large', 'Car');
  creatAddElementToPage('.table', 'div', 'table__title table__cell table__sort table__sort--wins', 'Wins');
  creatAddElementToPage('.table', 'div', 'table__title table__cell table__sort table__sort--time', 'Best time');

  // TODO: Переделать на получение из API
  creatAddElementToPage('.table', 'div', 'table__item table__cell', '1');
  creatAddElementToPage('.table', 'div', 'table__item table__cell table__cell--large', 'Mersedec GLX');
  creatAddElementToPage('.table', 'div', 'table__item table__cell', '2');
  creatAddElementToPage('.table', 'div', 'table__item table__cell', '03:48');

  creatAddElementToPage('.table', 'div', 'table__item table__cell', '2');
  creatAddElementToPage('.table', 'div', 'table__item table__cell table__cell--large', 'BMW X2');
  creatAddElementToPage('.table', 'div', 'table__item table__cell', '1');
  creatAddElementToPage('.table', 'div', 'table__item table__cell', '09:36');

}

export default renderWinners;
