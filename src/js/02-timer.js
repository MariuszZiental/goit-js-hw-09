import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const elInput = document.querySelector('input[type="text"]');
const elDays = document.querySelector('[data-days]');
const elHours = document.querySelector('[data-hours]');
const elMinutes = document.querySelector('[data-minutes]');
const elSeconds = document.querySelector('[data-seconds]');

let timerId = null;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(elInput, options);

function convertMs(ms) {
  // converting miliseconds for another unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // days rest
  const days = Math.floor(ms / day);
  // hours rest
  const hours = Math.floor((ms % day) / hour);
  // minutes rest
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // seconds rest
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value.toString().length === 1) {
    return value.toString().padStart(2, '0');
  } else {
    return value;
  }
}

const countdown = () => {
  timerId = setInterval(() => {
    const chosenDate = elInput.value;
    const chosenDateMs = new Date(chosenDate).getTime();
    const actualDateMs = new Date().getTime();
    const timeLeft = chosenDateMs - actualDateMs;
    const timeLeftConvertMs = convertMs(timeLeft);
    if (timeLeftConvertMs.seconds >= 0) {
      elDays.textContent = addLeadingZero(timeLeftConvertMs.days);
      elHours.textContent = addLeadingZero(timeLeftConvertMs.hours);
      elMinutes.textContent = addLeadingZero(timeLeftConvertMs.minutes);
      elSeconds.textContent = addLeadingZero(timeLeftConvertMs.seconds);
    } else {
      Notiflix.Notify.success('Countdown finished');
      clearInterval(timerId);
    }
  });
};

startBtn.addEventListener('click', countdown);
