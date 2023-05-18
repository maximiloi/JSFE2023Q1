import { bombAmount, isGameOver } from './variables';

const checkWin = () => {
  let matches = 0;
  const squares = document.querySelectorAll('.square');

  for (let i = 0; i < squares.length; i += 1) {
    if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {
      matches += 1;
    }
    if (matches === bombAmount) {
      console.log('WIN!');
      // isGameOver = true;
    }
  }
};

export default checkWin;
