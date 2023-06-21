import createElement from './utils/createElement';
import addToParentElement from './utils/addToParentElement';
import createHeader from './components/Header/index';
import createMain from './components/Main';
import createFooter from './components/Footer/index';
import './styles.scss';

const appElem: HTMLElement = createElement('div', 'app');

addToParentElement('body', appElem);

createHeader('.app');
createMain('.app');
createFooter('.app');
