import createPage from './module/createPage';
import outputNumberBombs from './module/outputNumberBombs';
import { runSecondCounter } from './module/timer';
import createBoard from './module/createBoard';
import startGame from './module/startGame';
import addNumber from './module/addNumber';
import addFlag from './module/addFlag';
import clickSquare from './module/clickSquare';
import { squares, widthBoard, bombAmount, isGameOver } from './module/variables';
import audioClickSound from '../assets/tick.wav';

let clickSquareCount = 0;
const clickSound = new Audio(audioClickSound);

document.addEventListener('DOMContentLoaded', () => {
  createPage();
  createBoard(widthBoard, squares);
  outputNumberBombs(bombAmount);
});

document.addEventListener('click', (event) => {
  const targetElement = event.target;

  if (targetElement.closest('.board')) {
    if (squares.length === 0) {
      startGame(widthBoard, bombAmount);
      addNumber(squares, widthBoard);
      runSecondCounter();
      if (isGameOver) return;
      clickSquareCount += 1;
      clickSound.play();
    }

    if (targetElement.closest('.square')) {
      const numberClick = document.querySelector('.number__click');
      clickSquare(targetElement);
      numberClick.innerText = String(clickSquareCount).padStart(2, '0');
      if (isGameOver) return;
      clickSquareCount += 1;
      clickSound.play();
    }
  }

  // if (targetElement.closest('.sad')) {
  //   const boardWrapper = document.querySelector('.board');
  //   boardWrapper.innerHTML = '';
  //   document.querySelector('.number__time').innerText = '000';
  //   targetElement.classList.remove('sad');
  //   // isGameOver = false;
  //   squares = [];
  //   clickSquareCount = 0;
  //   createBoard(widthBoard, squares);
  //   startGame(widthBoard, bombAmount);
  //   addNumber(squares, widthBoard);
  //   outputNumberBombs(bombAmount);
  // }

  if (targetElement.closest('.modal__wrapper')) {
    targetElement.closest('.modal__wrapper').remove();
  }
});

document.addEventListener('contextmenu', (event) => {
  const targetElement = event.target;

  event.preventDefault();
  addFlag(targetElement);
});

export function clickSquareCountFN() {
  return clickSquareCount;
};
