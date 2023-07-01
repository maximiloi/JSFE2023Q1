import createElement from "../../../utils/createElement";
import addToParentElement from "../../../utils/addToParentElement";
import { LEVELS } from "../../Levels/Levels";

import './index.scss';

function createGameWrapper(parentClassName: string): void {
  const gameElem: HTMLElement = createElement('div', 'main__game game');
  addToParentElement(parentClassName, gameElem);

  const gameWrapperElem: HTMLElement = createElement('div', 'game__wrapper');
  addToParentElement('.game', gameWrapperElem);
  const gameTableTitleElem: HTMLElement = createElement('h3', 'game__title');
  addToParentElement('.game__wrapper', gameTableTitleElem);
  const gameTableElem: HTMLElement = createElement('div', 'game__tablet table');
  addToParentElement('.game__wrapper', gameTableElem);

  const TableWrapperElem: HTMLElement = createElement('div', 'table__wrapper');
  addToParentElement('.table', TableWrapperElem);
  const TableSurfaceElem: HTMLElement = createElement('div', 'table__surface');
  addToParentElement('.table__wrapper', TableSurfaceElem);
  const TableAreaElem: HTMLElement = createElement('div', 'table__area');
  addToParentElement('.table__wrapper', TableAreaElem);
  const TablEdgeElem: HTMLElement = createElement('div', 'table__edge');
  addToParentElement('.table', TablEdgeElem);
  const TablLegRElem: HTMLElement = createElement('div', 'table__leg table__leg--right');
  addToParentElement('.table__edge', TablLegRElem);
  const TablLegLElem: HTMLElement = createElement('div', 'table__leg table__leg--left');
  addToParentElement('.table__edge', TablLegLElem);

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