import changeCurrentLevel from "./changeCurrentLevel";
import checkInput from "./checkInput";

export const documentActions = async (e: MouseEvent): Promise<void> => {
  const targetElem = e.target as HTMLElement;
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
}