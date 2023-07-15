import './css/normalize.scss';
import './style.scss';
import creatAddElementToPage from './utils/createElement';
import createHeader from './userInterface/header/index';
import renderWinners from './userInterface/winners/index';

creatAddElementToPage('body', 'div', 'app');
createHeader();
creatAddElementToPage('.app', 'main', 'main');
renderWinners();