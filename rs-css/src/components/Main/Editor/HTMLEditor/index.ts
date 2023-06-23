import addToParentElement from "../../../../utils/addToParentElement";
import createElement from "../../../../utils/createElement";

import './index.scss';

function createHTMLEditor(parentClassName: string): void {
  const editorHTMLElem: HTMLElement = createElement('div', 'editor-pane html-version');
  addToParentElement(parentClassName, editorHTMLElem);

  const editorHTMLTitleElem: HTMLElement = createElement('div', 'editor-pane__title html-version__title');
  addToParentElement('.html-version', editorHTMLTitleElem);

  const editorNameElem: HTMLElement = createElement('h4', 'editor-pane__file-name');
  editorNameElem.textContent = 'HTML Editor'
  addToParentElement('.html-version__title', editorNameElem);

  const editorHTMLFileNameElem: HTMLElement = createElement('span', 'editor-pane__file-name');
  editorHTMLFileNameElem.textContent = 'table.html'
  addToParentElement('.html-version__title', editorHTMLFileNameElem);

  const editorHTMLFileElem: HTMLElement = createElement('div', 'editor-pane__file html-view');
  addToParentElement('.html-version', editorHTMLFileElem);

  const editorHTMLNumElem: HTMLElement = createElement('div', 'editor-pane__number html__number');
  addToParentElement('.html-view', editorHTMLNumElem);
  let numberEditor = '';
  for (let i = 1; i <= 20; i += 1) {
    numberEditor += `${i}<br>`;
  }
  editorHTMLNumElem.innerHTML = numberEditor;

  const editorHTMLInputElem: HTMLElement = createElement('div', 'editor-pane__input html__output');
  addToParentElement('.html-view', editorHTMLInputElem);

  const editorHTMLInpuTextElem: HTMLElement = createElement('div', 'editor-pane__input--text');
  addToParentElement('.html__output', editorHTMLInpuTextElem);
}

export default createHTMLEditor;