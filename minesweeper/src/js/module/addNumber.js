function addNumber(squares, widthBoard) {
  for (let i = 0; i < squares.length; i += 1) {
    let total = 0;
    const isLeftEdge = (i % widthBoard === 0);
    const isRightEdge = (i % widthBoard === widthBoard - 1);

    if (squares[i].classList.contains('empty')) { // closest
      if (i > widthBoard - 1 && !isLeftEdge && squares[i - (widthBoard + 1)].classList.contains('bomb')) total += 1;
      if (i > widthBoard - 1 && squares[i - widthBoard].classList.contains('bomb')) total += 1;
      if (i > widthBoard - 1 && !isRightEdge && squares[i + 1 - widthBoard].classList.contains('bomb')) total += 1;
      if (!isLeftEdge && squares[i - 1].classList.contains('bomb')) total += 1;
      if (i < widthBoard * widthBoard - widthBoard
        && !isLeftEdge && squares[i + (widthBoard - 1)].classList.contains('bomb')) total += 1;
      if (i < widthBoard * widthBoard - widthBoard
        && !isRightEdge && squares[i + (widthBoard + 1)].classList.contains('bomb')) total += 1;
      if (i < widthBoard * widthBoard - widthBoard
        && squares[i + widthBoard].classList.contains('bomb')) total += 1;
      if (!isRightEdge && squares[i + 1].classList.contains('bomb')) total += 1;
      squares[i].setAttribute('data', total);
    }
  }
}

export default addNumber;
