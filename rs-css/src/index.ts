import createHeader from './components/Header/index';
import './styles.scss';

const body: HTMLElement | null = document.querySelector('body');

if (body) {
  createHeader(body);
};
