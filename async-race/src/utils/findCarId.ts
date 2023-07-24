function findCarId(carEl: HTMLElement): number | null | undefined {
  const { parentElement } = carEl;
  const grandparentElement: HTMLElement | null | undefined = parentElement?.parentElement;
  const grandGrandparentElement: HTMLElement | null | undefined = grandparentElement?.parentElement;

  if (!grandGrandparentElement) return null;

  const { classList } = grandGrandparentElement;
  const carId: number = Number(classList.item(1)?.split('-')[1]);
  return carId;
}

export default findCarId;
