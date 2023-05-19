const outputNumberBombs = (bombAmount) => {
  const bombsOut = document.querySelector('.number__bomb');

  bombsOut.innerText = String(bombAmount).padStart(3, '0');
};

export default outputNumberBombs;
