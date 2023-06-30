import { LEVELS } from "../Levels/Levels";

function renderLevel(level: string | null): void {

  if (!level) return;
  const levelNumber = Number(level);
  console.log('levelNumber: ', levelNumber);

  const levelNameArr: NodeListOf<Element> = document.querySelectorAll('.level__name');
  levelNameArr.forEach((levelName, levelIndex) => {
    if (levelNumber === levelIndex) {
      levelName.classList.add('active');
    }
  });

  // game__title
  const gameTitleElem: Element | null = document.querySelector('.game__title');
  if (!gameTitleElem) return;
  gameTitleElem.innerHTML = LEVELS[levelNumber].doThis;

  const htmlOutputElem: Element | null = document.querySelector('.html__output');
  if (!htmlOutputElem) return;
  htmlOutputElem.textContent = LEVELS[levelNumber].boardMarkup;
}

export default renderLevel;