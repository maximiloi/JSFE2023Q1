import { numberCarsInGarage, NUMBER_CARS_ON_PAGE } from "../api/apiGarage";
import renderGarage from "../userInterface/main/renderGarage";

async function changeCurrentLevel(value: string): Promise<void> {
  let currentLevel: number = Number(localStorage.getItem('garage-page'));
  const garageEl = document.querySelector('.garage') as HTMLElement;
  const carNumbers: number = await numberCarsInGarage();
  const pageCount = Math.ceil(carNumbers / NUMBER_CARS_ON_PAGE);

  if (value === 'prev' && currentLevel === 1) return;
  if (value === 'next' && currentLevel === pageCount) return;

  if (value === 'prev') {
    currentLevel -= 1;
    localStorage.setItem('garage-page', currentLevel.toString());
    garageEl.innerHTML = '';
    await renderGarage();
  }

  if (value === 'next') {
    currentLevel += 1;
    localStorage.setItem('garage-page', currentLevel.toString());
    garageEl.innerHTML = '';
    await renderGarage();
  }
}

export default changeCurrentLevel;