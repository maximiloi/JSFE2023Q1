import { isGameOver } from './variables';

const gameOver = () => {
  console.log('BOOM! Game Over');
  // isGameOver = true; // todo

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
