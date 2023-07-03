import hljs from 'highlight.js/lib/common';
import 'highlight.js/scss/monokai-sublime.scss';
import createElement from '../../utils/createElement';
import addToParentElement from '../../utils/addToParentElement';
import { LEVELS } from '../Levels/Levels';
import renderTable from '../renderTable';

function renderLevel(level: string | null): void {

  if (!level) return;
  const levelNumber = Number(level);

  const levelNameArr: NodeListOf<Element> = document.querySelectorAll('.level__name');
  levelNameArr.forEach((levelElem): void => {
    levelElem.classList.remove('active');
  })
  levelNameArr[levelNumber].classList.add('active');

  const gameTitleElem: Element | null = document.querySelector('.game__title');
  if (!gameTitleElem) return;
  gameTitleElem.innerHTML = LEVELS[levelNumber].doThis;

  const htmlOutputCodeElem: Element | null = document.querySelector('.language-html');
  if (!htmlOutputCodeElem) return;

  const levelCode: string = LEVELS[levelNumber].boardMarkup;

  const code = `<div class="table">
${levelCode}
</div>`
  const highlightedCode: string = hljs.highlightAuto(code).value
  htmlOutputCodeElem.innerHTML = highlightedCode;

  renderTable(levelCode);

  const strobeElement: string = LEVELS[levelNumber].selector;
  const tableArea: Element | null = document.querySelector('.table__area');
  if (!tableArea) return;
  const elementsStrobe: NodeListOf<Element> | null = tableArea.querySelectorAll(strobeElement);
  if (!elementsStrobe) return;
  elementsStrobe.forEach((element): void => {
    element.classList.add('strobe');
  });

  const editorCssHelpElem: Element | null = document.querySelector('.editor-pane__help');
  if (!editorCssHelpElem) return;
  editorCssHelpElem.innerHTML = '';

  const editorCssInputTextElem: HTMLElement = createElement('h3', 'editor-pane__title-help');
  editorCssInputTextElem.textContent = LEVELS[levelNumber].selectorName as string;
  addToParentElement('.editor-pane__help', editorCssInputTextElem);
  const editorCssInputHelpElem: HTMLElement = createElement('p', 'editor-pane__text');
  editorCssInputHelpElem.textContent = LEVELS[levelNumber].helpTitle;
  addToParentElement('.editor-pane__help', editorCssInputHelpElem);
  const editorCssInputHelp1Elem: HTMLElement = createElement('p', 'editor-pane__text');
  editorCssInputHelp1Elem.innerHTML = LEVELS[levelNumber].help;
  addToParentElement('.editor-pane__help', editorCssInputHelp1Elem);
}

export default renderLevel;
