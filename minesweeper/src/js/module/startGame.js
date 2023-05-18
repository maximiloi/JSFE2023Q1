import { squares } from './variables';

const startGame = (width, bombAmount) => {
  const bombsArray = Array(bombAmount).fill('bomb');
  const emptyArray = Array(width * width - bombAmount).fill('empty');
  const gameArray = emptyArray.concat(bombsArray);
  const shuffleArray = gameArray.sort(() => Math.random() - 0.5);

  const squareElements = document.querySelectorAll('.square');
  squareElements.forEach((squareElement, index) => {
    squareElement.classList.add(shuffleArray[index]);
    squares.push(squareElement);
  });
};

export default startGame;
