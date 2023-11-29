function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const backgroundColorSpan = document.querySelector(".color");

changeColor.addEventListener("click", function () {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  backgroundColorSpan.textContent = randomColor;
});
