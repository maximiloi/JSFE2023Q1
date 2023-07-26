import { Car } from "../api/apiType";
import { apiGetCar } from "../api/apiGarage";

async function selectCar(targetEl: HTMLElement): Promise<number | undefined> {
  const { parentElement } = targetEl;
  const grandparentElement: HTMLElement | null | undefined = parentElement?.parentElement;
  if (!grandparentElement) return;
  const { classList } = grandparentElement;
  const carId: string | undefined = classList.item(1)?.split('-')[1];
  if (!carId) return;
  const car: Car = await apiGetCar(Number(carId));

  const inputNameUpdate: HTMLInputElement | null = document.querySelector('.input-text__update');
  const inputColorUpdate: HTMLInputElement | null = document.querySelector('.input-color__update');
  if (!inputNameUpdate || !inputColorUpdate) return;
  inputNameUpdate.value = car.name;
  inputColorUpdate.value = car.color;

  localStorage.setItem('car-id', carId);
}

export default selectCar;