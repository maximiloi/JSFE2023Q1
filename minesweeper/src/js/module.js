import createPage from './module/createPage';
import outputNumberBombs from './module/outputNumberBombs';
import { runSecondCounter } from './module/timer';
import createBoard from './module/createBoard';
import startGame from './module/startGame';
import addNumber from './module/addNumber';
import addFlag from './module/addFlag';
import clickElement from './module/clickSquare';
import { squares, widthBoard, bombAmount } from './module/variables';

document.addEventListener('DOMContentLoaded', () => {
  createPage();
  createBoard(widthBoard, squares);
  outputNumberBombs(bombAmount);
  // createModal();
});

document.addEventListener('click', (event) => {
  const targetElement = event.target;

  if (targetElement.closest('.board')) {
    if (squares.length === 0) {
      startGame(widthBoard, bombAmount);
      addNumber(squares, widthBoard);
      runSecondCounter();
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
