const startBtn = document.querySelector('.data-start');
const stopBtn = document.querySelector('.data-stop');
const colorTheme = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId = null;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId.setInterval(() => {
    colorTheme.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(colorTheme);
  startBtn.disabled = false;
});

