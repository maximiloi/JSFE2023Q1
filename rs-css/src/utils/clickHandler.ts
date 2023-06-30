import RenderLevel from "../components/RenderLevel";

function clickHandler(): void {
  const levelNameArr: NodeListOf<Element> = document.querySelectorAll('.level__name');

  levelNameArr?.forEach((levelElem: Element, levelIndex: number): void => {

    levelElem.addEventListener('click', (): void => {
      localStorage.setItem('current-level', levelIndex.toString());
      RenderLevel(levelIndex.toString());
    });
  });
}

export default clickHandler;