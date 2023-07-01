function createElement(tagName: string, className?: string, textContent?: string): HTMLElement {
  const element: HTMLElement = document.createElement(tagName);
  if (className) {
    className.split(' ').forEach((name): void => {
      element.classList.add(name);
    });
  }
  if (textContent) {
    element.textContent = textContent.toString();
  }
  return element;
}

export default createElement;
