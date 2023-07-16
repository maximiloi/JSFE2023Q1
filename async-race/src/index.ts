import './css/normalize.scss';
import './style.scss';
import creatAddElementToPage from './utils/createElement';
import createHeader from './userInterface/header/index';
import renderWinners from './userInterface/winners/index';
import renderFooter from "./userInterface/footer";
import renderInputGroup from './userInterface/main/inputGroup';
import renderGarage from './userInterface/main/garagePage';

creatAddElementToPage('body', 'div', 'app');
createHeader();
creatAddElementToPage('.app', 'main', 'main');
renderWinners();
creatAddElementToPage('.app', 'main', 'app__main main');
renderInputGroup();
renderGarage();
renderFooter();