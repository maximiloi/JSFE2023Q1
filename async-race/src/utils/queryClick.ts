import changeCurrentLevel from "./changeCurrentLevel";
import checkHeaderButton from "./checkHeaderButton";
import checkInput from "./checkInput";
import checkSort from "./checkSort";
import deleteCar from "./deleteCar";
import generateCars from "./generateCars";
import selectCar from "./selectCar";


export async function documentActions(event: MouseEvent): Promise<void> {
  const targetElem = event.target as HTMLElement;
  if (!targetElem) return;

  if (targetElem.closest('.garage__button--prev')) await changeCurrentLevel('prev');
  if (targetElem.closest('.garage__button--next')) await changeCurrentLevel('next');
  if (targetElem.closest('.input-button__create')) await checkInput(targetElem);
  if (targetElem.closest('.input-button__update')) await checkInput(targetElem);
  if (targetElem.closest('.cars__button--select')) await selectCar(targetElem);
  if (targetElem.closest('.cars__button--remove')) await deleteCar(targetElem);
  if (targetElem.closest('.main__button--generate-cars')) await generateCars();
  if (targetElem.closest('.header__button--garage')) await checkHeaderButton('garage');
  if (targetElem.closest('.header__button--winners')) await checkHeaderButton('winners');
  if (targetElem.closest('.table__sort--id')) checkSort('sort-id');
  if (targetElem.closest('.table__sort--wins')) checkSort('sort-wins');
  if (targetElem.closest('.table__sort--time')) checkSort('sort-time');
}