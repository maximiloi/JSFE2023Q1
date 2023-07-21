import { Car } from "../api/apiType";
import { getCar } from "../api/apiGarage";

async function selectCar(hargetEl: HTMLElement): Promise<number | undefined> {
  const { parentElement } = hargetEl;
  const grandparentElement: HTMLElement | null | undefined = parentElement?.parentElement;
  if (!grandparentElement) return;
  const { classList } = grandparentElement;
  const carId: string | null = classList.item(2);
  if (!carId) return;
  const car: Car = await getCar(Number(carId));

  const inputNameUpdate: HTMLInputElement | null = document.querySelector('.input-text__update');
  const inputColorUpdate: HTMLInputElement | null = document.querySelector('.input-color__update');
  if (!inputNameUpdate || !inputColorUpdate) return;
  inputNameUpdate.value = car.name;
  inputColorUpdate.value = car.color;

  localStorage.setItem('car-id', carId);
}

export default selectCar;