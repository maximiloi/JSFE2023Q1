import renderLineCount from "../../../../utils/renderLineCount";
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
  editorCssNumElem.innerHTML = renderLineCount();

  const editorCssInputElem: HTMLElement = createElement('div', 'editor-pane__input');
  addToParentElement('.editor-pane__file', editorCssInputElem);

  const editorCssInputFieldElem: HTMLInputElement = createElement('input', 'editor-pane__input--answer input-answer') as HTMLInputElement;
  editorCssInputFieldElem.type = 'text';
  editorCssInputFieldElem.placeholder = 'Type in a CSS selector';
  addToParentElement('.editor-pane__input', editorCssInputFieldElem);

  const editorCssButonElem: HTMLElement = createElement('div', 'editor-pane__button');
  editorCssButonElem.textContent = 'enter';
  addToParentElement('.editor-pane__input', editorCssButonElem);

  const editorCssInpuTextElem: HTMLElement = createElement('div', 'editor-pane__input--text');
  editorCssInpuTextElem.innerHTML = `{<br>/* Styles would go here. */<br>}`;
  addToParentElement('.editor-pane__input', editorCssInpuTextElem);

  const editorCssHelpElem: HTMLElement = createElement('div', 'editor-pane__help');
  editorCssHelpElem.innerHTML = '';
  addToParentElement('.editor-pane__input', editorCssHelpElem);
}

export default createCssEditor;