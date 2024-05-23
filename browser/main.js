const counterEl = document.getElementById('counter');
let counter = Number(counterEl.textContent);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  counter++;
  counterEl.textContent = counter;
});