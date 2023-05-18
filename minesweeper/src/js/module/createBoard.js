import createElement from '../utils/createElement.js';

const createBoard = (widthBoard) => {
  const boardWrapper = document.querySelector('.board');

  for (let i = 0; i < widthBoard * widthBoard; i += 1) {
    const square = createElement('div', 'square border');
    square.setAttribute('id', i);
    boardWrapper.style.width = `${40 * widthBoard}px`;
    boardWrapper.style.height = `${40 * widthBoard}px`;
    boardWrapper.appendChild(square);
  }
};

export default createBoard;
