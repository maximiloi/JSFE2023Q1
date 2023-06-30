import { LEVELS } from "../Levels/Levels";

function RenderLevel(level: string | null): void {

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

  const htmlOutputElem: Element | null = document.querySelector('.html__output');
  if (!htmlOutputElem) return;
  htmlOutputElem.textContent = LEVELS[levelNumber].boardMarkup;
}

export default RenderLevel;