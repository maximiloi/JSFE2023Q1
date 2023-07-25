function checkHeaderButton(value: string) {
  const buttonGarageEl: HTMLButtonElement | null = document.querySelector('.header__button--garage');
  const buttonWinnersEl: HTMLButtonElement | null = document.querySelector('.header__button--winners');
  if (!buttonGarageEl || !buttonWinnersEl) return;

  const mainWrapperInputEl: HTMLElement | null = document.querySelector('.main__wrapper--input');
  const mainGarageEl: HTMLElement | null = document.querySelector('.main__garage');
  const mainWinnersEl: HTMLElement | null = document.querySelector('.main__winners');
  if (!mainWrapperInputEl || !mainGarageEl || !mainWinnersEl) return;


  if (value === 'garage') {
    console.log('value: ', value);
    buttonGarageEl.disabled = true;
    buttonWinnersEl.disabled = false;
    mainWinnersEl.classList.add('hidden');
    mainWrapperInputEl.classList.remove('hidden');
    mainGarageEl.classList.remove('hidden');
  }

  if (value === 'winners') {
    console.log('value: ', value);
    buttonWinnersEl.disabled = true;
    buttonGarageEl.disabled = false;
    mainWrapperInputEl.classList.add('hidden');
    mainGarageEl.classList.add('hidden');
    mainWinnersEl.classList.remove('hidden');
  }
}

export default checkHeaderButton;