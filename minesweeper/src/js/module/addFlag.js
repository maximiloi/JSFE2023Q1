import { isGameOver, bombAmount } from './variables';

let flags = 0;

const addFlag = (square) => {
  if (isGameOver) return;

  if (!square.classList.contains('checked') && (flags < bombAmount)) {
    if (!square.classList.contains('flag')) {
      square.classList.add('flag');
      square.innerHTML = '&#128681';
      flags += 1;
    } else {
      square.classList.remove('flag');
      square.innerHTML = '';
      flags -= 1;
    }
  }
}

export default addFlag;
