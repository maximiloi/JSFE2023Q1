import './css/normalize.scss';
import './style.scss';
import creatAddElementToPage from './utils/createElement';
// import createHeader from './userInterface/header/index';
import renderFooter from './userInterface/footer';

creatAddElementToPage('body', 'div', 'app');
// createHeader();
renderFooter();