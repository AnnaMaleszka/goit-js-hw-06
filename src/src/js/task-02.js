const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList.innerHTML);

ingredients.forEach(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  ingredientsList.appendChild(item);
});
