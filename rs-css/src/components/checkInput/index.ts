import { LEVELS } from "../Levels/Levels";
import renderLevel from "../renderLevel";

function checkWin(inputValue: string): void {
  const currentLevel: string | null = localStorage.getItem('current-level');
  if (!currentLevel) return;
  const levelNumber: number = parseInt(currentLevel, 10);

  if (inputValue === LEVELS[levelNumber].selector) {
    const inputAnswer: HTMLInputElement | null = document.querySelector('.input-answer');
    if (!inputAnswer) return;
    inputAnswer.value = '';

    const levelCheckmark: NodeListOf<Element> = document.querySelectorAll('.level__checkmark');
    levelCheckmark[levelNumber].classList.add('check');

    const completedLevels: number[] = JSON.parse(localStorage.getItem('completed-levels') || '[]') as number[];
    if (!completedLevels.includes(levelNumber)) {
      completedLevels.push(levelNumber);
      localStorage.setItem('completed-levels', JSON.stringify(completedLevels));
    }

    const levelNextNumber: number = levelNumber + 1;
    const levelNext: string = levelNextNumber.toString();
    localStorage.setItem('current-level', levelNext);
    renderLevel(levelNext);
  } else {
    const inputAnswer: HTMLInputElement | null = document.querySelector('.input-answer');
    if (!inputAnswer) return;
    inputAnswer.style.background = 'rgba(255, 0, 0, .7)';
    setTimeout((): void => {
      inputAnswer.style.background = 'rgba(0, 0, 255, .4)';
    }, 1000);
  }
}

function checkInput(): void {
  const inputAnswer: HTMLInputElement | null = document.querySelector('.input-answer');
  if (!inputAnswer) return;

  inputAnswer.addEventListener("keydown", (event: Event): void => {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.key === "Enter") {
      const inputValue: string = inputAnswer.value
      checkWin(inputValue)
    }
  })

  const inpurButton: Element | null = document.querySelector('.editor-pane__button');
  if (!inpurButton) return;

  inpurButton.addEventListener("click", (): void => {
    const inputValue: string = inputAnswer.value
    checkWin(inputValue)
  })
}

export default checkInput;
