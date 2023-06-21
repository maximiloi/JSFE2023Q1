function addToParentElement(parentElement: string, childElement: HTMLElement): void {
  const parentElem: HTMLElement | null = document.querySelector(parentElement);
  if (parentElem) {
    parentElem.append(childElement);
  };
}

export default addToParentElement;
