function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const bodyEl = document.querySelector('body');

changeColorBtn.addEventListener('click', onChangeColorClick);

function onChangeColorClick() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}