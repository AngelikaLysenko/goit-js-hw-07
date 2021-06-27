// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
//  в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsContainerEl = document.querySelector(".js-ingredients");
const elements = ingredients.map(option => {
  const navItemEl = document.createElement("li");
  navItemEl.textContent = option;
  return navItemEl;
});
ingredientsContainerEl.append(...elements);


