const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

console.log(inputEl);

inputEl.addEventListener('input', onInputChange);


function onInputChange(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
        spanEl.textContent = 'Anonymous';
    } else {
        spanEl.textContent = event.currentTarget.value;
    }
}