import { CarWinnerWithColorAndName } from "../../api/apiType";
import creatAddElementToPage from "../../utils/createElement";
import { carImage } from "../main/renderCar";

async function rendersWinnerTable(arrWinners: CarWinnerWithColorAndName[]): Promise<void> {
  const tableEl: HTMLElement | null = document.querySelector('.table');
  if (tableEl) {
    while (tableEl.firstChild) {
      tableEl.removeChild(tableEl.firstChild);
    }
  }
  creatAddElementToPage('.table', 'div', 'table__title table__cell table__sort table__sort--id', 'Number');
  creatAddElementToPage('.table', 'div', 'table__title table__cell table__cell--large', 'Car');
  creatAddElementToPage('.table', 'div', 'table__title table__cell table__sort table__sort--wins', 'Wins');
  creatAddElementToPage('.table', 'div', 'table__title table__cell table__sort table__sort--time', 'Best time');

  arrWinners.forEach((car: CarWinnerWithColorAndName) => {
    const { id, color, name, wins, time } = car;
    creatAddElementToPage('.table', 'div', 'table__item table__cell', `${id}`);
    creatAddElementToPage('.table', 'div', `table__item table__cell table__cell-${id} table__cell--large`, `${name}`);
    creatAddElementToPage(`.table__cell-${id}`, 'span', 'table__car', `${id}`);
    const carElement = document.querySelector(`.table__cell-${id} .table__car`) as HTMLElement;
    carElement.innerHTML = carImage;
    carElement.style.fill = color;
    creatAddElementToPage('.table', 'div', 'table__item table__cell', `${wins}`);
    creatAddElementToPage('.table', 'div', 'table__item table__cell', `${time}`);
  })
}

export default rendersWinnerTable;