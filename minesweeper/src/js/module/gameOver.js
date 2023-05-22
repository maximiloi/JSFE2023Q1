import createModal from './createModal';
import { stopSecondCounter } from './timer';
import { isGameOver } from './variables';
import audioLoseSound from '../../assets/lose.wav';

const loseSound = new Audio(audioLoseSound);

const gameOver = () => {
  const resetButton = document.querySelector('.reset__button');
  resetButton.classList.add('sad');

  stopSecondCounter();
  createModal('lose');
  loseSound.play();
  // createModal('win');

  isGameOver = true; // todo

  const squaresElements = document.querySelectorAll('.square');
  squaresElements.forEach((squareElement) => {
    if (squareElement.classList.contains('bomb')) {
      squareElement.classList.remove('bomb');
      squareElement.classList.remove('border');
      squareElement.classList.add('open');
    }
  });
};

export default gameOver;
