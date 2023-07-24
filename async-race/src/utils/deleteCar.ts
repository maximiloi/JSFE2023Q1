import renderGarage from "../userInterface/main/renderGarage";
import { apiDeleteCar } from "../api/apiGarage";

async function deleteCar(targetElem: HTMLElement): Promise<void> {
  const { parentElement } = targetElem;
  const grandparentElement: HTMLElement | null | undefined = parentElement?.parentElement;
  if (!grandparentElement) return;
  const { classList } = grandparentElement;
  const carId: string | undefined = classList.item(1)?.split('-')[1];
  await apiDeleteCar(Number(carId));
  await renderGarage();
}

export default deleteCar;