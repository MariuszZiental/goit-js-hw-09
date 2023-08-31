import Notiflix from 'notiflix';

const elDelay = document.querySelector('input[name="delay"]');
const elStep = document.querySelector('input[name="step"]');
const elAmount = document.querySelector('input[name="amount"]');
const elBtn = document.querySelector('button');

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      