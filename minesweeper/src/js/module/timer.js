let timerId;
let seconds = 0;

function runSecondCounter() {
  const timeOut = document.querySelector('.number__time');
  seconds = 0;

  timeOut.innerText = String(seconds).padStart(3, '0');

  timerId = setInterval(() => {
    if (timeOut.innerText === '999') clearInterval(timerId);

    seconds += 1;
    timeOut.innerText = String(seconds).padStart(3, '0');
  }, 1000);
}

function stopSecondCounter() {
  clearInterval(timerId);
}

function secondCounter() {
  return seconds;
}

export { runSecondCounter, stopSecondCounter, secondCounter };
