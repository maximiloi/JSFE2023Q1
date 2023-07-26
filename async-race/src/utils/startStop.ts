import { CarEngine } from "src/api/apiType";
import { apiStarStopCar, apiDriveMode } from "../api/apiGarage";
import { animateCar, stopAnimation } from "./animateCar";
import findCarId from "./findCarId";
import findCarElem from "./findCarElem";

async function startStopCar(carIdEl: HTMLElement, value: string): Promise<void> {
  const carId: number | null | undefined = findCarId(carIdEl);
  if (!carId || !carIdEl) return;
  const carElem: HTMLElement = findCarElem(carIdEl);

  if (value === 'start') {
    console.log('value: ', value);
    const startButton = carIdEl as HTMLButtonElement;
    const stopButton: HTMLButtonElement | null = <HTMLButtonElement>carIdEl.nextElementSibling;
    startButton.disabled = true;
    stopButton.disabled = false;

    const data: CarEngine = await apiStarStopCar(carId, 'start');
    const velocityCar = data.velocity;
    animateCar(velocityCar, carElem);
    await apiDriveMode(carId);
  }

  if (value === 'stop') {
    console.log('value: ', value);
    const stopButton = carIdEl as HTMLButtonElement;
    const startButton: HTMLButtonElement | null = <HTMLButtonElement>carIdEl.previousElementSibling;
    stopButton.disabled = true;
    startButton.disabled = false;
    await apiStarStopCar(carId, 'stop');
    stopAnimation(carElem);
  }
}

export default startStopCar;