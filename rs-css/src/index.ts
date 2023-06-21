import createElement from './utils/createElement';
import createHeader from './components/Header/index';
import createMain from './components/Main';
import createFooter from './components/Footer/index';
import './styles.scss';

const appElem: HTMLElement = createElement('div', 'app');

const parentElement: HTMLElement | null = document.querySelector('body');
if (parentElement) {
  parentElement.append(appElem);
};

createHeader('.app');
createMain('.app');
createFooter('.app');
