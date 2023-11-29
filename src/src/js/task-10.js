function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let startSize = 30;
const initialData = 30;

const inputValue = document.querySelector("input");
const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

btnCreate.addEventListener("click", () => {
  for (let i = 0; i < inputValue.value; i++) {
    const newDiv = document.createElement("div");

    newDiv.style.width = `${startSize}px`;
    newDiv.style.height = `${startSize}px`;
    newDiv.style.backgroundColor = `${getRandomHexColor()}`;
    startSize += 10;
    boxes.appendChild(newDiv);
  }
});

btnDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
  startSize = initialData;
});
