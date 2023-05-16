import createPage from './module/createPage';
import createBoard from './module/createBoard';
import startGame from './module/startGame';
import { squares, widthBoard } from './module/variables';
import addNumber from './module/addNumber';

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
  }
});
