import createItemOnPage from '../../utils/createElement';
import './style.scss';

function inputGroup(name: string): void {
  createItemOnPage('.main__wrapper--input', 'div', `main__inner main__inner--${name}`);
  createItemOnPage(`.main__inner--${name}`, 'input', `input-text input-text__${name}`);
  const inputText: HTMLInputElement | null = document.querySelector(`.input-text__${name}`);
  if (!inputText) return;
  inputText.type = 'text';
  createItemOnPage(`.main__inner--${name}`, 'input', `input-color input-color__${name}`);
  const inputColor: HTMLInputElement | null = document.querySelector(`.input-color__${name}`);
  if (!inputColor) return;
  inputColor.type = 'color';
  createItemOnPage(`.main__inner--${name}`, 'button', `input-button input-button__${name}`, `${name}`);
}

function renderInputGroup(): void {
  createItemOnPage('.main', 'div', 'main__wrapper main__wrapper--input');
  inputGroup('create');
  inputGroup('update');
  createItemOnPage('.main__wrapper--input', 'div', 'main__inner main__inner--button');
  createItemOnPage('.main__inner--button', 'button', 'main__button main__button--race', 'race');
  createItemOnPage('.main__inner--button', 'button', 'main__button main__button--reset', 'reset');
  createItemOnPage('.main__inner--button', 'button', 'main__button main__button--generate-cars', 'generate cars');
}

export default renderInputGroup;