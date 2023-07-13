function createElement(parentElem: string, tagName: string, className?: string, textContent?: string): void {
  const element: HTMLElement = document.createElement(tagName);
  const ParentNodeElem: HTMLElement | null = document.querySelector(`${parentElem}`);

  if (className) {
    className.split(' ').forEach((name): void => {
      element.classList.add(name);
    });
  }

  if (textContent) {
    element.textContent = textContent.toString();
  }

  if (!ParentNodeElem) return;
  ParentNodeElem.append(element);
}

export default createElement;
