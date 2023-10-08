const inputSizeControl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
spanEl.style.fontSize = `${inputSizeControl.value}px`;

inputSizeControl.addEventListener('input', onSizeControl);

function onSizeControl(event) {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
}