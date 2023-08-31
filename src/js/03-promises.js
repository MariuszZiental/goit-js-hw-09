import Notiflix from 'notiflix';

const elDelay = document.querySelector('input[name="delay"]');
const elStep = document.querySelector('input[name="step"]');
const elAmount = document.querySelector('input[name="amount"]');
const elBtn = document.querySelector('button');

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
};

const displayPromise = () => {
  let delay = +elDelay.value;

  for (let i = 1; i <= elAmount.value; i++) {
    createPromise(i, delay)
      .then(resolve => {
        Notiflix.Notify.success(resolve);
      })
      .catch(reject => {
        Notiflix.Notify.failure(reject);
      });
    delay += +elStep.value;
  }
};

elBtn.addEventListener('click', e => {
  e.preventDefault();
  displayPromise();
});