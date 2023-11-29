let counterValue = 0;

const counter = document.querySelector("#counter");
const buttonIncrese = document.querySelector('[data-action="increment"]');
const buttonDecrese = document.querySelector('[data-action="decrement"]');

buttonIncrese.addEventListener("click", () => {
  counterValue += 1;
  updateCounterView();
});

buttonDecrese.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterView();
});

const counterView = document.querySelector("#value");

function updateCounterView() {
  counterView.textContent = counterValue;
}
