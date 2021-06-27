// Задание 5
// Напиши скрипт который, при наборе текста в инпуте
//  input#name-input (событие input), подставляет его текущее 
//  значение в span#name-output. Если инпут пустой, в спане должна 
//  отображаться строка 'незнакомец'.
// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const nameInput = document.querySelector('.js-input');
const nameOutput = document.querySelector('.js-name');
const defaultName = nameOutput.textContent;

console.log(nameInput);
console.log(nameOutput);
console.log(defaultName);

nameInput.addEventListener("input", e => {
    console.log(e.currentTarget.value);
    const val = e.currentTarget.value;
    if (val.length > 0) {
        nameOutput.textContent = val;
    } else{
        nameOutput.textContent = defaultName;
    }
});

