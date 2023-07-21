import changeCurrentLevel from "./changeCurrentLevel";

export const documentActions = (e: MouseEvent) => {
  const targetElem = e.target as HTMLElement;
  if (!targetElem) return;

  if (targetElem.closest('.garage__button--prev')) {
    changeCurrentLevel('prev');
  };

  if (targetElem.closest('.garage__button--next')) {
    changeCurrentLevel('next');
  };
}