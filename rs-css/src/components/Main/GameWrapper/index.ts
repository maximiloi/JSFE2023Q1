import createElement from "../../../utils/createElement";
import addToParentElement from "../../../utils/addToParentElement";
import { LEVELS } from "../../Levels/Levels";

import './index.scss';

function createGameWrapper(parentClassName: string): void {
  const gameWrapperElem: HTMLElement = createElement('div', 'main__game game');
  addToParentElement(parentClassName, gameWrapperElem);

  const gameTableElem: HTMLElement = createElement('div', 'game__table');
  addToParentElement('.game', gameTableElem);

  const gameLevelElem: HTMLElement = createElement('div', 'game__level level');
  addToParentElement('.game', gameLevelElem);
  const gameLevelTitleElem: HTMLElement = createElement('h3', 'level__title', 'Level');
  addToParentElement('.level', gameLevelTitleElem);

  const gameLevelWrapElem: HTMLElement = createElement('div', 'level__wrapper');
  addToParentElement('.level', gameLevelWrapElem);

  for (let i = 1; i <= LEVELS.length; i += 1) {
    const gameLevelNameElem: HTMLElement = createElement('a', 'level__name', `level ${i}`);
    addToParentElement('.level__wrapper', gameLevelNameElem);
    const gameLevelCheckmarkElem: HTMLElement = createElement('span', 'level__checkmark');
    if (gameLevelNameElem) {
      gameLevelNameElem.prepend(gameLevelCheckmarkElem);
    };
  }
}

export default createGameWrapper;