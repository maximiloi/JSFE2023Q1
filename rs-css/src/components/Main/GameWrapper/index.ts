import createElement from "../../../utils/createElement";
import addToParentElement from "../../../utils/addToParentElement";

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

}

export default createGameWrapper;