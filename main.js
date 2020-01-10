function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if (b == 0) {
        return 'ERROR'
    } else {
        return Number(a) / Number(b);
    }
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "ERROR - INVALID OPERATOR";
    }
}


const view = document.getElementById("entry");
const clearbutton = document.getElementById("clear");
const buttons = document.querySelectorAll('.numbers');
const op = document.querySelectorAll('.operators');

view.innerHTML = "0";

let accumulator = 0;
let currentValue = null;
let operation = null;
let dec = null;

function display(number) {
    if (number.length >= 9) {
        number = number.slice(0, 9);
    }
    view.innerHTML = number;
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        currentValue ? currentValue = currentValue + button.id : currentValue = button.id;
        display(currentValue);
    });
});

op.forEach(button => {
    button.addEventListener("click", e => {
        operation ? operation = operation + button.id : operation = button.id;
        display(operation);
    })
});


clearbutton.addEventListener("click", e => {
    accumulator = 0;
    currentValue = null;
    operate = null;
    display(accumulator);
});