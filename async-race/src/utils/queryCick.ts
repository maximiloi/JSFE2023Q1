import changeCurrentLevel from "./changeCurrentLevel";
import checkInput from "./checkInput";
import selectCar from "./selectCar";

export async function documentActions(event: MouseEvent): Promise<void> {
  const targetElem = event.target as HTMLElement;
  if (!targetElem) return;

  if (targetElem.closest('.garage__button--prev')) {
    await changeCurrentLevel('prev');
  };

  if (targetElem.closest('.garage__button--next')) {
    await changeCurrentLevel('next');
  };

  if (targetElem.closest('.input-button__create')) {
    await checkInput(targetElem);
  };

  if (targetElem.closest('.input-button__update')) {
    await checkInput(targetElem);
  };

  if (targetElem.closest('.cars__button--select')) {
    await selectCar(targetElem);
  };
}