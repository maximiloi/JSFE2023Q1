/**
 * Description placeholder
 * @date 26.04.2023 - 23:55:18
 *
 * @param {String} tagName
 * @param {String} className
 * @param {String} textContent
 * @returns {HTMLElement}
 */
const createElement = (tagName, className, textContent) => {
  const element = document.createElement(tagName);
  className.split(' ').forEach((/** @type {string} */ name) => {
    element.classList.add(name);
  });
  if (textContent) {
    element.innerHTML = textContent.toString();
  }
  return element;
};

export default createElement;
