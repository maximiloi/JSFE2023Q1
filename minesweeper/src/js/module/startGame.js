import squares from './variables';

function startGame(width, bombAmount) {
  const bombsArray = Array(bombAmount).fill('bomb');
  const emptyArray = Array(width * width - bombAmount).fill('empty');
  const gameArray = emptyArray.concat(bombsArray);
  const shuffleArray = gameArray.sort(() => Math.random() - 0.5);

  const squareElements = document.querySelectorAll('.square');
  squareElements.forEach((square, index) => {
    square.classList.add(shuffleArray[index]);
    squares.push(square);
  });
}

export default startGame;
