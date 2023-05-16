import checkSquare from './checkSquare';
import { isGameOver } from './variables';

function clickElement(square) {
  if (isGameOver) return;
  if (square.classList.contains('checked') || square.classList.contains('flag')) return;
  if (square.classList.contains('bomb')) {
    console.log('bomb');
  } else {
    const total = square.getAttribute('data');
    if (parseInt(total, 10) !== 0) {
      square.classList.add('checked');
      square.innerHTML += total;
      return;
    }
    checkSquare(square);
  }
  square.classList.add('checked');
}

export default clickElement;
