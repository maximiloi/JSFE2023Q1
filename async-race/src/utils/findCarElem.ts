function findCarElem(buttonEl: HTMLElement): HTMLElement {
  const { parentElement } = buttonEl;
  const carElement = parentElement?.nextElementSibling as HTMLElement;
  return carElement;
}

export default findCarElem;