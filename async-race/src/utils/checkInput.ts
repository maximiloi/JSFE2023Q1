import renderGarage from "../userInterface/main/renderGarage";
import { postCreateCar } from "../api/apiGarage";

async function checkInput(element: HTMLElement): Promise<void> {
  const carColorEl = element.previousSibling as HTMLInputElement;
  const carNameEl = carColorEl.previousSibling as HTMLInputElement;
  const carName: string = carNameEl.value;
  const carColor: string = carColorEl.value;

  if (element.closest('.input-button__create')) {
    await postCreateCar({ name: carName, color: carColor })
  }
  await renderGarage();
  carNameEl.value = '';
  carColorEl.value = '#000000';
}

export default checkInput;