import checkWin from './checkWin';
import outputNumberBombs from './outputNumberBombs';
import { isGameOver, bombAmount } from './variables';

let flags = 0;

const addFlag = (square) => {
  if (isGameOver) return;

  if (!square.classList.contains('checked') && (flags < bombAmount)) {
    if (!square.classList.contains('flag')) {
      square.classList.add('flag');
      flags += 1;
      checkWin();
      outputNumberBombs(bombAmount - flags);
    } else {
      square.classList.remove('flag');
      flags -= 1;
      outputNumberBombs(bombAmount - flags);
    }
  }
};

export default addFlag;
