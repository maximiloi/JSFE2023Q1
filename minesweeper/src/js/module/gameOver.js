import { stopSecondCounter } from './timer';
import { isGameOver, seconds } from './variables';

const gameOver = () => {
  console.log('BOOM! Game Over');
  stopSecondCounter();
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
