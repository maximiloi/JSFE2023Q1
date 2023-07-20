import checkLocalStorage from "../../utils/checkLocalStorage";
import creatAddElementToPage from "../../utils/createElement";
import { CarWithId } from "../../api/apiType";
import { getGarage, numberCarsInGarage } from "../../api/apiGarage";
import renderCar from "./renderCar";

const apiData: CarWithId[] = await getGarage();
const carNumbers: number = await numberCarsInGarage();
const pageNumbers: string = checkLocalStorage();

async function renderGarage(): Promise<void> {
  creatAddElementToPage('.main', 'section', 'main__garage garage');
  creatAddElementToPage('.garage', 'h2', 'garage__title', 'Garage');
  creatAddElementToPage('.garage__title', 'span', 'garage__cars-number');
  const carNumbersEl: HTMLElement | null = document.querySelector('.garage__cars-number');
  if (!carNumbersEl) return;
  carNumbersEl.innerHTML = `(${carNumbers})`;
  creatAddElementToPage('.garage', 'div', 'garage__wrapper');
  creatAddElementToPage('.garage__wrapper', 'h3', 'garage__title garage__title--page', 'Page #');
  creatAddElementToPage('.garage__title--page', 'span', 'garage__page-number');
  const pageNumbersEl: HTMLElement | null = document.querySelector('.garage__page-number');
  if (!pageNumbersEl) return;
  pageNumbersEl.innerHTML = `${pageNumbers}`;
  creatAddElementToPage('.garage__wrapper', 'div', 'garage__wrapper--button');
  creatAddElementToPage('.garage__wrapper--button', 'button', 'garage__button garage__button--prev', 'prev');
  creatAddElementToPage('.garage__wrapper--button', 'button', 'garage__button garage__button--next', 'next');
  creatAddElementToPage('.garage', 'div', 'garage__cars cars__list');
  if (!apiData) return;
  await renderCar(apiData);
}

export default renderGarage;