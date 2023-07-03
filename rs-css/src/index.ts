import './styles.scss';

import createElement from './utils/createElement';
import addToParentElement from './utils/addToParentElement';
import clickLevel from './utils/clickLevel';
import createHeader from './components/Header/index';
import createMain from './components/Main';
import createFooter from './components/Footer/index';
import checkLocalStorage from './components/localStorage';
import checkInput from './components/checkInput';

const appElem: HTMLElement = createElement('div', 'app');
addToParentElement('body', appElem);

createHeader('.app');
createMain('.app');
createFooter('.app');

checkLocalStorage();

clickLevel();
checkInput();
