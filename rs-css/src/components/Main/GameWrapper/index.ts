import createElement from "../../../utils/createElement";
import addToParentElement from "../../../utils/addToParentElement";

function createGameWrapper(parentClassName: string): void {
  const gameWrapperElem: HTMLElement = createElement('div', 'main__game game__wrapper');

  addToParentElement(parentClassName, gameWrapperElem);
}

export default createGameWrapper;