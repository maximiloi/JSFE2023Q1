import './css/normalize.scss';
import './style.scss';
import creatAddElementToPage from './utils/createElement';
import { documentActions } from './utils/queryCick';
import createHeader from './userInterface/header';
import renderInputGroup from './userInterface/main/inputGroup';
import renderGarage from './userInterface/main/renderGarage';
// import renderWinners from './userInterface/winners';
import renderFooter from './userInterface/footer';

creatAddElementToPage('body', 'div', 'app');
createHeader();
creatAddElementToPage('.app', 'main', 'app__main main');
renderInputGroup();
await renderGarage();
// renderWinners();
renderFooter();

document.addEventListener('click', documentActions);