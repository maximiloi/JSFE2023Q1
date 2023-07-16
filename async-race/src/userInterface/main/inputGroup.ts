import creatAddElementToPage from '../../utils/createElement';
import './style.scss';

function inputGroup(name: string): void {
  creatAddElementToPage('.main__wrapper--input', 'div', `main__inner main__inner--${name}`);
  creatAddElementToPage(`.main__inner--${name}`, 'input', `input-text input-text__${name}`);
  const inputText: HTMLInputElement | null = document.querySelector(`.input-text__${name}`);
  if (!inputText) return;
  inputText.type = 'text';
  creatAddElementToPage(`.main__inner--${name}`, 'input', `input-color input-color__${name}`);
  const inputColor: HTMLInputElement | null = document.querySelector(`.input-color__${name}`);
  if (!inputColor) return;
  inputColor.type = 'color';
  creatAddElementToPage(`.main__inner--${name}`, 'button', `input-button input-button__${name}`, `${name}`);
}

function renderInputGroup(): void {
  creatAddElementToPage('.main', 'div', 'main__wrapper main__wrapper--input');
  inputGroup('create');
  inputGroup('update');
  creatAddElementToPage('.main__wrapper--input', 'div', 'main__inner main__inner--button');
  creatAddElementToPage('.main__inner--button', 'button', 'main__button main__button--race', 'race');
  creatAddElementToPage('.main__inner--button', 'button', 'main__button main__button--reset', 'reset');
  creatAddElementToPage('.main__inner--button', 'button', 'main__button main__button--generate-cars', 'generate cars');
}

export default renderInputGroup;