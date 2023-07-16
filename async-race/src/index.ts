import './css/normalize.scss';
import './style.scss';
import creatAddElementToPage from './utils/createElement';
import createHeader from './userInterface/header/index';

creatAddElementToPage('body', 'div', 'app');
createHeader();