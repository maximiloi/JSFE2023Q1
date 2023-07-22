import checkLocalStorage from "../../utils/checkLocalStorage";
import creatAddElementToPage from "../../utils/createElement";
import { CarWithId } from "../../api/apiType";
import { NUMBER_CARS_ON_PAGE, getGarage, numberCarsInGarage } from "../../api/apiGarage";
import renderCar from "./renderCar";


async function renderGarage(): Promise<void> {
  const garageEl: HTMLElement | null = document.querySelector('.garage');
  if (garageEl) {
    while (garageEl.firstChild) {
      garageEl.removeChild(garageEl.firstChild);
    }
    garageEl.parentNode?.removeChild(garageEl);
  }

  const apiData: CarWithId[] = await getGarage();
  const carNumbers: number = await numberCarsInGarage();
  const pageNumber: string = checkLocalStorage();
  const pageCount = Math.ceil(Number(carNumbers) / NUMBER_CARS_ON_PAGE)

  creatAddElementToPage('.main', 'section', 'main__garage garage');
  creatAddElementToPage('.garage', 'h2', 'garage__title', 'Garage');
  creatAddElementToPage('.garage__title', 'span', 'garage__cars-number');
  const carNumbersEl = document.querySelector('.garage__cars-number') as HTMLElement;
  carNumbersEl.innerHTML = `(${carNumbers})`;
  creatAddElementToPage('.garage', 'div', 'garage__wrapper');
  creatAddElementToPage('.garage__wrapper', 'h3', 'garage__title garage__title--page', 'Page #');
  creatAddElementToPage('.garage__title--page', 'span', 'garage__page-number');
  const pageNumberEl = document.querySelector('.garage__page-number') as HTMLElement;
  pageNumberEl.innerHTML = ` ${pageNumber} / ${pageCount}`;
  creatAddElementToPage('.garage__wrapper', 'div', 'garage__wrapper--button');
  creatAddElementToPage('.garage__wrapper--button', 'button', 'garage__button garage__button--prev', 'prev');
  creatAddElementToPage('.garage__wrapper--button', 'button', 'garage__button garage__button--next', 'next');
  creatAddElementToPage('.garage', 'div', 'garage__cars cars__list');
  await renderCar(apiData);
}

export default renderGarage;