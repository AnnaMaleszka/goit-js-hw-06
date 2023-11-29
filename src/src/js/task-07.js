const inputFontSize = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

inputFontSize.addEventListener("input", () => {
  inputText.style.fontSize = `${inputFontSize.value}px`;
});
