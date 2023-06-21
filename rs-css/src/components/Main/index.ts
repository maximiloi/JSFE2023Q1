import addToParentElement from '../../utils/addToParentElement';
import createElement from '../../utils/createElement';
import './index.scss';

function createMain(parentClassName: string): void {
  const mainElem: HTMLElement = createElement('section', 'app__main main');

  addToParentElement(parentClassName, mainElem);
}

export default createMain;