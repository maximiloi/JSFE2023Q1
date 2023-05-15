import createPage from './module/createPage';
import createBoard from './module/createBoard';

const widthBoard = 10;

document.addEventListener('DOMContentLoaded', () => {
  createPage();
  createBoard(widthBoard);
});
