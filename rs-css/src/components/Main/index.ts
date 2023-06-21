import addToParentElement from '../../utils/addToParentElement';
import createElement from '../../utils/createElement';
import createGameWrapper from './GameWrapper';
import createEditor from './Editor';
import './index.scss';

function createMain(parentClassName: string): void {
  const mainElem: HTMLElement = createElement('main', 'app__main main');

  addToParentElement(parentClassName, mainElem);
  createGameWrapper('.main')
  createEditor('.main');
}

export default createMain;