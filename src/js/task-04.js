const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    }

}

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick)

function onDecrementBtnClick() {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
    
};

function onIncrementBtnClick() {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
};