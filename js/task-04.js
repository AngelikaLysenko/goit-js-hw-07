// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

function increment (){
    console.log('increment -> this', counterValue);
    counterValue += 1;
};

function decrement () {
    console.log('decrement -> this', counterValue);
    counterValue -= 1;
};

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('.js-value');

decrementBtn.addEventListener('click', function () {
    console.log ('Клик на декремент');
    decrement();
    console.log(counterValue);
    valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', function () {
    console.log ('Клик на инкремент');
    increment();
    console.log(counterValue);
    valueEl.textContent = counterValue;
});

// function increment(){
//     return counterValue +=1;}
// function decrement(){
//     return counterValue -=1;}
// incrementBtn.addEventListener('click', increment =>{
//     console.log('cheak plus')
//     counterValue = counter.value;});
// decrementBtn.addEventListener('click', decrement =>{
//     console.log('cheak minus')});

// const counter = {
//     value:0,
//     increment(){
//         console.log('increment -> this', this);
//         this.value += 1;
//     },
//     decrement()) {
//         console.log('decrement -> this', this);
//         this.value -= 1;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// }

// updateCounter(10,counter.increment);
// updateCounter(5, counter.decrement);