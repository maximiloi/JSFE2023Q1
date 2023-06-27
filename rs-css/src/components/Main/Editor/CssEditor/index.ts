import addToParentElement from "../../../../utils/addToParentElement";
import createElement from "../../../../utils/createElement";

import './index.scss';

function createCssEditor(parentClassName: string): void {
  const editorCssElem: HTMLElement = createElement('div', 'editor-pane');
  addToParentElement(parentClassName, editorCssElem);

  const editorCssTitleElem: HTMLElement = createElement('div', 'editor-pane__title');
  addToParentElement('.editor-pane', editorCssTitleElem);

  const editorNameElem: HTMLElement = createElement('h4', 'editor-pane__file-name');
  editorNameElem.textContent = 'CSS Editor'
  addToParentElement('.editor-pane__title', editorNameElem);

  const editorCssFileNameElem: HTMLElement = createElement('span', 'editor-pane__file-name');
  editorCssFileNameElem.textContent = 'style.css'
  addToParentElement('.editor-pane__title', editorCssFileNameElem);

  const editorCssFileElem: HTMLElement = createElement('div', 'editor-pane__file css-view');
  addToParentElement('.editor-pane', editorCssFileElem);

  const editorCssNumElem: HTMLElement = createElement('div', 'editor-pane__number');
  addToParentElement('.editor-pane__file', editorCssNumElem);
  let numberEditor = '';
  for (let i = 1; i <= 20; i += 1) {
    numberEditor += `${i}<br>`;
  }
  editorCssNumElem.innerHTML = numberEditor;

  const editorCssInputElem: HTMLElement = createElement('div', 'editor-pane__input');
  addToParentElement('.editor-pane__file', editorCssInputElem);

  const editorCssInputFieldElem: HTMLInputElement = createElement('input', 'editor-pane__input--answer input-answer') as HTMLInputElement;
  editorCssInputFieldElem.type = 'text' as string;
  editorCssInputFieldElem.placeholder = 'Type in a CSS selector' as string;
  addToParentElement('.editor-pane__input', editorCssInputFieldElem);

  const editorCssInpuTextElem: HTMLElement = createElement('div', 'editor-pane__input--text');
  editorCssInpuTextElem.innerHTML = `{<br>/* Styles would go here. */<br>}`;
  addToParentElement('.editor-pane__input', editorCssInpuTextElem);
}

export default createCssEditor;