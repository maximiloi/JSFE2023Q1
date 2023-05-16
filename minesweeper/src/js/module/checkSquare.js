import clickElement from './clickElement';
import { widthBoard } from './variables';

function checkSquare(square) {
  const curentId = square.id;
  const isLeftEdge = (curentId % widthBoard === 0);
  const isRightEdge = (curentId % widthBoard === widthBoard - 1);
  const squares = document.querySelectorAll('.square');

  setTimeout(() => {
    if (curentId > 0 && !isLeftEdge) {
      console.log('0: 0', 0);
      const newId = squares[parseInt(curentId, 10) - 1].id;
      const newSquare = document.getElementById(newId);
      clickElement(newSquare);
    }
    if (curentId > (widthBoard - 1) && !isRightEdge) {
      console.log('widthBoard - 1: 9', widthBoard - 1);
      const newId = squares[parseInt(curentId, 10) + 1 - widthBoard].id;
      const newSquare = document.getElementById(newId);
      clickElement(newSquare);
    }
    if (curentId > widthBoard) {
      console.log('widthBoard: 10', widthBoard);
      const newId = squares[parseInt(curentId, 10) - widthBoard].id;
      const newSquare = document.getElementById(newId);
      clickElement(newSquare);
    }
    if (curentId > (widthBoard + 1) && !isLeftEdge) {
      console.log('widthBoard + 1: 11', widthBoard + 1);
      const newId = squares[parseInt(curentId, 10) - 1 - widthBoard].id;
      const newSquare = document.getElementById(newId);
      clickElement(newSquare);
    }
    if (curentId < (widthBoard * widthBoard - 2) && !isRightEdge) {
      console.log('widthBoard * widthBoard - 2: 98', widthBoard * widthBoard - 2);
      const newId = squares[parseInt(curentId, 10) + 1].id;
      const newSquare = document.getElementById(newId);
      clickElement(newSquare);
    }
    if (curentId < (widthBoard * widthBoard - widthBoard) && !isLeftEdge) {
      console.log('widthBoard * widthBoard - widthBoard: 90', widthBoard * widthBoard - widthBoard);
      const newId = squares[parseInt(curentId, 10) - 1 + widthBoard].id;
      const newSquare = document.getElementById(newId);
      clickElement(newSquare);
    }
    if (curentId < (widthBoard * widthBoard - widthBoard - 2) && !isRightEdge) {
      console.log('widthBoard * widthBoard - widthBoard - 2: 88', widthBoard * widthBoard - widthBoard - 2);
      const newId = squares[parseInt(curentId, 10) + 1 + widthBoard].id;
      const newSquare = document.getElementById(newId);
      clickElement(newSquare);
    }
    if (curentId < (widthBoard * widthBoard - widthBoard - 1) && !isRightEdge) {
      console.log('widthBoard * widthBoard - widthBoard - 1: 89', widthBoard * widthBoard - widthBoard - 1);
      const newId = squares[parseInt(curentId, 10) + widthBoard].id;
      const newSquare = document.getElementById(newId);
      clickElement(newSquare);
    }
  }, 20);
}

export default checkSquare;
