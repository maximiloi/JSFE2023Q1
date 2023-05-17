import clickSquare from './clickSquare';
import { widthBoard } from './variables';

function checkSquare(square) {
  const curentId = square.id;
  const isLeftEdge = (curentId % widthBoard === 0);
  const isRightEdge = (curentId % widthBoard === widthBoard - 1);
  const squares = document.querySelectorAll('.square');

  setTimeout(() => {
    if (curentId > 0 && !isLeftEdge) {
      const newId = squares[parseInt(curentId, 10) - 1].id;
      const newSquare = document.getElementById(newId);
      clickSquare(newSquare);
    }
    if (curentId > (widthBoard - 1) && !isRightEdge) {
      const newId = squares[parseInt(curentId, 10) + 1 - widthBoard].id;
      const newSquare = document.getElementById(newId);
      clickSquare(newSquare);
    }
    if (curentId > widthBoard) {
      const newId = squares[parseInt(curentId, 10) - widthBoard].id;
      const newSquare = document.getElementById(newId);
      clickSquare(newSquare);
    }
    if (curentId > (widthBoard + 1) && !isLeftEdge) {
      const newId = squares[parseInt(curentId, 10) - 1 - widthBoard].id;
      const newSquare = document.getElementById(newId);
      clickSquare(newSquare);
    }
    if (curentId < (widthBoard * widthBoard - 1) && !isRightEdge) {
      const newId = squares[parseInt(curentId, 10) + 1].id;
      const newSquare = document.getElementById(newId);
      clickSquare(newSquare);
    }
    if (curentId < (widthBoard * widthBoard - widthBoard) && !isLeftEdge) {
      const newId = squares[parseInt(curentId, 10) - 1 + widthBoard].id;
      const newSquare = document.getElementById(newId);
      clickSquare(newSquare);
    }
    if (curentId < (widthBoard * widthBoard - widthBoard - 2) && !isRightEdge) {
      const newId = squares[parseInt(curentId, 10) + 1 + widthBoard].id;
      const newSquare = document.getElementById(newId);
      clickSquare(newSquare);
    }
    if (curentId < (widthBoard * widthBoard - widthBoard - 1)) {
      const newId = squares[parseInt(curentId, 10) + widthBoard].id;
      const newSquare = document.getElementById(newId);
      clickSquare(newSquare);
    }
  }, 20);
}

export default checkSquare;
