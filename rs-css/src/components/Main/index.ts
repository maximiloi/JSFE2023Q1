import createElement from '../../utils/createElement';
import './index.scss';

function createMain(parentClassName: string): void {
  const mainElem: HTMLElement = createElement('section', 'app__main main');

  const parentElement: HTMLElement | null = document.querySelector(parentClassName);
  if (parentElement) {
    parentElement.append(mainElem);
  };
}

export default createMain;