import renderGarage from "../userInterface/main/renderGarage";
import { apiPostCreateCar, apiUpdareCar } from "../api/apiGarage";

async function checkInput(element: HTMLElement): Promise<void> {
  const carColorEl = element.previousSibling as HTMLInputElement;
  const carNameEl = carColorEl.previousSibling as HTMLInputElement;
  const carName: string = carNameEl.value;
  const carColor: string = carColorEl.value;

  if (carName === '') return;

  if (element.closest('.input-button__create')) {
    await apiPostCreateCar({ name: carName, color: carColor });
  }

  if (element.closest('.input-button__update')) {
    const carId: string | null = localStorage.getItem('car-id');
    if (!carId) return;
    await apiUpdareCar(Number(carId), { name: carName, color: carColor });
    localStorage.removeItem('car-id');
  }

  await renderGarage();
  carNameEl.value = '';
  carColorEl.value = '#000000';
}

export default checkInput;