import creatAddElementToPage from "../../utils/createElement";

import carImage from '../../assets/car.svg';
import flagImage from '../../assets/flag.png';

function renderCar(): void {
  creatAddElementToPage('.cars__list', 'div', 'cars__item');
  creatAddElementToPage('.cars__item', 'div', 'cars__inner cars__inner--info');

  creatAddElementToPage('.cars__inner--info', 'button', 'cars__button cars__button--select', 'select');
  creatAddElementToPage('.cars__inner--info', 'button', 'cars__button cars__button--remove', 'remove');
  creatAddElementToPage('.cars__inner--info', 'span', 'cars__spacer', '|');
  creatAddElementToPage('.cars__inner--info', 'h4', 'cars__model', 'Mersedes GLX');

  creatAddElementToPage('.cars__item', 'div', 'cars__inner cars__inner--game');

  creatAddElementToPage('.cars__inner--game', 'div', 'cars__button-wrapper');
  creatAddElementToPage('.cars__button-wrapper', 'button', 'cars__button cars__button--start', 'start');
  creatAddElementToPage('.cars__button-wrapper', 'button', 'cars__button cars__button--stop', 'stop');
  creatAddElementToPage('.cars__inner--game', 'img', 'cars__car');
  const carElement: HTMLImageElement | null = document.querySelector('.cars__car');
  if (!carElement) return;
  carElement.src = carImage;

  creatAddElementToPage('.cars__inner--game', 'img', 'cars__flag');
  const flagElement: HTMLImageElement | null = document.querySelector('.cars__flag');
  if (!flagElement) return;
  flagElement.src = flagImage;
}

export default renderCar;