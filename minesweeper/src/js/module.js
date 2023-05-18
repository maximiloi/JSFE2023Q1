import createPage from './module/createPage';
import createBoard from './module/createBoard';
import startGame from './module/startGame';
import addNumber from './module/addNumber';
import addFlag from './module/addFlag';
import clickElement from './module/clickSquare';
import createModal from './module/createModal';
import { squares, widthBoard } from './module/variables';

document.addEventListener('DOMContentLoaded', () => {
  createPage();
  createBoard(widthBoard, squares);
  // createModal();
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

document.addEventListener('contextmenu', (event) => {
  const targetElement = event.target;

  event.preventDefault();
  addFlag(targetElement);
});