import hljs from 'highlight.js/lib/common';
import 'highlight.js/scss/atom-one-dark.scss';
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
}

export default renderLevel;
