import renderLevel from "../components/renderLevel";

function clickLevel(): void {
  const levelNameArr: NodeListOf<Element> = document.querySelectorAll('.level__name');
  if (!levelNameArr) return;

  levelNameArr.forEach((levelElem: Element, levelIndex: number): void => {
    levelElem.addEventListener('click', (): void => {
      localStorage.setItem('current-level', levelIndex.toString());
      renderLevel(levelIndex.toString());
    });
  });
}

export default clickLevel;
