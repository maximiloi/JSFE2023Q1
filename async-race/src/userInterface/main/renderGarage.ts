import checkLocalStorage from "../../utils/checkLocalStorage";
import createItemOnPage from "../../utils/createElement";
import { CarWithId } from "../../api/apiType";
import { NUMBER_CARS_ON_PAGE, apiGetGarage, apiNumberCarsInGarage } from "../../api/apiGarage";
import renderCar from "./renderCar";


async function renderGarage(): Promise<void> {
  const garageEl: HTMLElement | null = document.querySelector('.garage');
  if (garageEl) {
    while (garageEl.firstChild) {
      garageEl.removeChild(garageEl.firstChild);
    }
    garageEl.parentNode?.removeChild(garageEl);
  }

  const carNumbers: number = await apiNumberCarsInGarage();
  const pageCount = Math.ceil(Number(carNumbers) / NUMBER_CARS_ON_PAGE)
  let pageNumber: string = checkLocalStorage();
  let apiData: CarWithId[] = await apiGetGarage();

  createItemOnPage('.main', 'section', 'main__garage garage');
  createItemOnPage('.garage', 'h2', 'garage__title', 'Garage');
  createItemOnPage('.garage__title', 'span', 'garage__cars-number');
  const carNumbersEl = document.querySelector('.garage__cars-number') as HTMLElement;
  carNumbersEl.innerHTML = `(${carNumbers})`;
  createItemOnPage('.garage', 'div', 'garage__wrapper');
  createItemOnPage('.garage__wrapper', 'h3', 'garage__title garage__title--page', 'Page #');
  createItemOnPage('.garage__title--page', 'span', 'garage__page-number');
  const pageNumberEl = document.querySelector('.garage__page-number') as HTMLElement;
  if (+pageNumber > +pageCount && +pageNumber !== 1) {
    localStorage.setItem('garage-page', `${pageCount}`);
    pageNumber = checkLocalStorage();
    apiData = await apiGetGarage();
  }
  pageNumberEl.innerHTML = ` ${pageNumber} / ${pageCount}`;
  createItemOnPage('.garage__wrapper', 'div', 'garage__wrapper--button');
  createItemOnPage('.garage__wrapper--button', 'button', 'garage__button garage__button--prev', 'prev');
  createItemOnPage('.garage__wrapper--button', 'button', 'garage__button garage__button--next', 'next');
  createItemOnPage('.garage', 'div', 'garage__cars cars__list');
  await renderCar(apiData);
}

export default renderGarage;