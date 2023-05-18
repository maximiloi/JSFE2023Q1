import checkSquare from './checkSquare';
import gameOver from './gameOver';
import { isGameOver } from './variables';

const clickSquare = (square) => {
  if (isGameOver) return;
  if (square.classList.contains('checked') || square.classList.contains('flag')) return;
  if (square.classList.contains('bomb')) {
    gameOver(square);
  } else {
    const total = square.getAttribute('data');
    if (parseInt(total, 10) !== 0) {
      square.classList.add('checked');
      square.innerHTML += total;
      if (parseInt(total, 10) === 1) square.classList.add('one');
      if (parseInt(total, 10) === 2) square.classList.add('two');
      if (parseInt(total, 10) === 3) square.classList.add('three');
      if (parseInt(total, 10) === 4) square.classList.add('four');
      if (parseInt(total, 10) === 5) square.classList.add('five');
      if (parseInt(total, 10) === 6) square.classList.add('six');
      if (parseInt(total, 10) === 7) square.classList.add('seven');
      if (parseInt(total, 10) === 8) square.classList.add('eight');
      return;
    }
    checkSquare(square);
  }
  square.classList.add('checked');
};

export default clickSquare;
