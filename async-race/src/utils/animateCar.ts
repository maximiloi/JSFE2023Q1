const START_SIZE: number = 160;
let requestId: number | null = null;
let position: number = 0;

export function animateCar(velocity: number, carElem: HTMLElement): void {
  const carElement: HTMLElement = carElem;
  const traceEl: HTMLElement | null = document.querySelector('.cars__inner');
  if (!traceEl) return;
  const widthRace: number = traceEl.offsetWidth;
  const speed: number = velocity / 30;

  position = 0;

  function animate(): void {
    position += speed;
    carElement.style.transform = `translateX(${position}px) scaleX(-1)`;

    if (position + START_SIZE < widthRace) {
      requestId = requestAnimationFrame(animate);
    }
  }

  animate();
}

export function stopAnimation(): void {
  if (requestId) {
    cancelAnimationFrame(requestId);
    requestId = null;
  }
}

export function resetCar(carElem: HTMLElement): void {
  const carElement: HTMLElement = carElem;
  carElement.style.transform = `translateX(0px) scaleX(-1)`;
  stopAnimation();
}
