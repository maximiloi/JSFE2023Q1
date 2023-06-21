import createElement from "../../../utils/createElement";
import addToParentElement from "../../../utils/addToParentElement";
import createCssEditor from "./CssEditor";

import './index.scss';

function createEditor(parentClassName: string): void {
  const editorElem: HTMLElement = createElement('div', 'main__game editor');
  addToParentElement(parentClassName, editorElem);

  createCssEditor('.editor');
}

export default createEditor;