function addNumber(squares, widthBoard) {
  for (let i = 0; i < squares.length; i += 1) {
    let total = 0;
    const isLeftEdge = (i % widthBoard === 0);
    const isRightEdge = (i % widthBoard === widthBoard - 1);

    if (squares[i].classList.contains('empty')) { // closest
      if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total += 1;
      if (i > (widthBoard - 1) && !isRightEdge && squares[i + 1 - widthBoard].classList.contains('bomb')) total += 1;
      if (i > widthBoard && squares[i - widthBoard].classList.contains('bomb')) total += 1;
      if (i > (widthBoard + 1) && !isLeftEdge && squares[i - 1 - widthBoard].classList.contains('bomb')) total += 1;
      if (i < 98 && !isRightEdge && squares[i + 1].classList.contains('bomb')) total += 1;
      if (i < 90 && !isLeftEdge && squares[i - 1 + widthBoard].classList.contains('bomb')) total += 1;
      if (i < 88 && !isRightEdge && squares[i + 1 + widthBoard].classList.contains('bomb')) total += 1;
      if (i < 89 && squares[i + widthBoard].classList.contains('bomb')) total += 1;
      squares[i].setAttribute('data', total);
    }
  }
}

export default addNumber;
