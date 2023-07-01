import RenderLevel from "../renderLevel";

function checkLocalStorage(): void {
  let currentLevel: string | null;

  if (localStorage.getItem('current-level')) {
    currentLevel = localStorage.getItem('current-level');
  } else {
    localStorage.setItem('current-level', '0');
    currentLevel = '0';
  }

  RenderLevel(currentLevel);
}

export default checkLocalStorage;
