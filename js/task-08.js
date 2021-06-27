// сделать фун-я создавать
// удалять
// выбирать рандомный цвет
// работа с размером
// функция которая создает 1 элемент, принимает цвет, размер
// функция которая создает много addmany
// функция которая будет очищать моя див
// лисинеры на кнопки
// 0 - 30,30
// 1 - 40,40

const boxDiv = document.getElementById('boxes');
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const INITIAL_ITEM_SIZE = 30;

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

let itemSize = INITIAL_ITEM_SIZE;

function createBoxes() {
    const amount = input.value;

    for(let i = 0; i < amount; i++) {
        const divItem = document.createElement('div');
        divItem.style.backgroundColor = getRandomColor();
        divItem.style.width = `${itemSize}px`;
        divItem.style.height = `${itemSize}px`;
        itemSize += 20;

        boxDiv.appendChild(divItem);
    }
};

function getRandom(min, max) {
    return Math.ceil(Math.random()* (max - min) + min);
};

function destroyBoxes(){
    boxDiv.innerHTML = '';
    itemSize = INITIAL_ITEM_SIZE;
};

function getRandomColor(){
const red = getRandom(0,255);
const green = getRandom(0,255);
const blue = getRandom(0,255);
return `rgb(${red}, ${green}, ${blue})`;
};