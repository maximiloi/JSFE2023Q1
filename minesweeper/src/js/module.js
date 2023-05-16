import createPage from './module/createPage';
import createBoard from './module/createBoard';
import startGame from './module/startGame';
import addNumber from './module/addNumber';
import clickElement from './module/clickSquare';
import { squares, widthBoard } from './module/variables';

document.addEventListener('DOMContentLoaded', () => {
  createPage();
  createBoard(widthBoard, squares);
});

document.addEventListener('click', (event) => {
  const targetElement = event.target;

  if (targetElement.closest('.board')) {
    if (squares.length === 0) {
      startGame(widthBoard, widthBoard);
      addNumber(squares, widthBoard);
    }

    if (targetElement.closest('.square')) {
      clickElement(targetElement);
    }
  }
});
