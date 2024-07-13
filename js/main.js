const incrementButton = document.querySelector('.counter__button--increase');
const decreaseButton = document.querySelector('.counter__button--decrease');
const resetButton = document.querySelector('.counter__reset-button');
const counterValue = document.querySelector('.counter__value');

// button actions
incrementButton.addEventListener('click', increaseValue);
decreaseButton.addEventListener('click', decreaseValue);
resetButton.addEventListener('click', resetValue);

function increaseValue() {

    // get current value of counter
    const currentValue = counterValue.textContent;

    // convert to type number
    const currentValueAsNumber = Number(+currentValue);

    // increment by 1
    let newValue = Number(currentValueAsNumber + 1);

    // set counter with new value
    counterValue.textContent = newValue.toString();
}

function decreaseValue() {

    // get current value of counter
    const currentValue = counterValue.textContent;

    // convert to type number
    const currentValueAsNumber = Number(+currentValue);

    // decrement by 1
    let newValue = Number(currentValueAsNumber - 1);

    // when value reaches zero, keep it as zero
    if (newValue < 0) {
        newValue = 0;
    }
    // update counter with new value
    counterValue.textContent = newValue.toString();
}

function resetValue() {
    // reset value to zero
    counterValue.textContent = '0';
}


