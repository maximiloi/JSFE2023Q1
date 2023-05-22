import createModal from './createModal';
import { stopSecondCounter } from './timer';
import { bombAmount, isGameOver } from './variables';
import audioWinSound from '../../assets/win.wav';

const winSound = new Audio(audioWinSound);

const checkWin = () => {
  let matches = 0;
  const squares = document.querySelectorAll('.square');

  for (let i = 0; i < squares.length; i += 1) {
    if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {
      matches += 1;
    }
    if (matches === bombAmount) {
      console.log('WIN!');
      stopSecondCounter();
      createModal('win');
      winSound.play();
      isGameOver = true;
    }
  }
};

export default checkWin;
