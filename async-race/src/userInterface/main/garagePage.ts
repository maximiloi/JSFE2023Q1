import getGarage from "../../api/apiGarage";
import { CarWithId } from "../../api/apiType";
import creatAddElementToPage from "../../utils/createElement";
import renderCar from "./renderCar";

const apiData: CarWithId[] | null = await getGarage();

async function renderGarage(): Promise<void> {
  creatAddElementToPage('.main', 'section', 'main__garage garage');
  creatAddElementToPage('.garage', 'h2', 'garage__title', 'Garage');
  creatAddElementToPage('.garage', 'h3', 'garage__title garage__title--page', 'Page #');
  creatAddElementToPage('.garage__title--page', 'span', 'garage__title--number');

  creatAddElementToPage('.garage', 'div', 'garage__cars cars__list');

  if (!apiData) return;
  await renderCar(apiData);
}

export default renderGarage;