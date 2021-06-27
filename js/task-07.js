const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.addEventListener('input', () => {
   console.log(`${inputEl.value}px`);
   textEl.style.fontSize =`${inputEl.value}px`;
   console.log(textEl.style.fontSize);
});