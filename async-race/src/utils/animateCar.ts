const START_SIZE: number = 160;
let requestId: number | null = null;
let position: number = 0;

export function animateCar(velocity: number, carElem: HTMLElement): void {
  const carElement: HTMLElement = carElem;
  const traceEl: HTMLElement | null = document.querySelector('.cars__inner');
  if (!traceEl) return;
  const widthRace: number = traceEl.offsetWidth;
  const speed: number = velocity / 30;

  function animate(): void {
    position += speed;
    carElement.style.left = `${position}px`;

    if (position + START_SIZE < widthRace) {
      requestId = requestAnimationFrame(animate);
    }
  }

  animate();
}

export function stopAnimation(carElem: HTMLElement): void {
  const carElement: HTMLElement = carElem;
  if (requestId) {
    cancelAnimationFrame(requestId);
    carElement.style.left = `${position}px`;
    requestId = null;
  }
}