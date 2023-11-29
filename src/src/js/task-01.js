const categories = document.querySelectorAll("li.item");
const categoriesNumber = categories.length;
console.log(`Number of categories: ${categoriesNumber}`);

categories.forEach(category => {
  const header = category.querySelector("h2");
  const categoryItems = category.querySelectorAll("li");
  console.log(`Category: ${header.textContent}`);
  console.log(`Elemets: ${categoryItems.length}`);
});
