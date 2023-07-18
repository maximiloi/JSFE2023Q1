import './css/normalize.scss';
import './style.scss';
import creatAddElementToPage from './utils/createElement';
import createHeader from './userInterface/header';
import renderInputGroup from './userInterface/main/inputGroup';
import renderGarage from './userInterface/main/garagePage';
// import renderWinners from './userInterface/winners';
import renderFooter from './userInterface/footer';

creatAddElementToPage('body', 'div', 'app');
createHeader();
creatAddElementToPage('.app', 'main', 'app__main main');
renderInputGroup();
renderGarage();
// renderWinners();
renderFooter();