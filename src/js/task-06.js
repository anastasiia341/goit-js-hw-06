const inputEl = document.querySelector('#validation-input');
const inputValidation = inputEl.getAttribute('data-length');
inputEl.addEventListener('blur',onInputValidation)

function onInputValidation(event) {
    if (event.currentTarget.value.length >= inputValidation) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
    }
}