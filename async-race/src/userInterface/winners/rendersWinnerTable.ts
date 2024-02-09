import { CarWinnerWithColorAndName } from "../../api/apiType";
import createItemOnPage from "../../utils/createElement";
import { carImage } from "../main/renderCar";

async function rendersWinnerTable(arrWinners: CarWinnerWithColorAndName[]): Promise<void> {
  const tableEl: HTMLElement | null = document.querySelector('.table');
  if (tableEl) {
    while (tableEl.firstChild) {
      tableEl.removeChild(tableEl.firstChild);
    }
  }
  createItemOnPage('.table', 'div', 'table__title table__cell table__sort table__sort--id', 'Number');
  createItemOnPage('.table', 'div', 'table__title table__cell table__cell--large', 'Car');
  createItemOnPage('.table', 'div', 'table__title table__cell table__sort table__sort--wins', 'Wins');
  createItemOnPage('.table', 'div', 'table__title table__cell table__sort table__sort--time', 'Best time');

  arrWinners.forEach((car: CarWinnerWithColorAndName) => {
    const { id, color, name, wins, time } = car;
    createItemOnPage('.table', 'div', 'table__item table__cell', `${id}`);
    createItemOnPage('.table', 'div', `table__item table__cell table__cell-${id} table__cell--large`, `${name}`);
    createItemOnPage(`.table__cell-${id}`, 'span', 'table__car', `${id}`);
    const carElement = document.querySelector(`.table__cell-${id} .table__car`) as HTMLElement;
    carElement.innerHTML = carImage;
    carElement.style.fill = color;
    createItemOnPage('.table', 'div', 'table__item table__cell', `${wins}`);
    createItemOnPage('.table', 'div', 'table__item table__cell', `${time}`);
  })
}

export default rendersWinnerTable;