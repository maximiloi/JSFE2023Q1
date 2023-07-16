import creatAddElementToPage from "../../utils/createElement";
import renderCar from "./renderCar";

function renderGarage(): void {
  creatAddElementToPage('.main', 'section', 'main__garage garage');
  creatAddElementToPage('.garage', 'h2', 'garage__title', 'Garage');
  creatAddElementToPage('.garage', 'h3', 'garage__title garage__title--page', 'Page #');

  creatAddElementToPage('.garage', 'div', 'garage__cars cars__list');

  renderCar();
}

export default renderGarage;