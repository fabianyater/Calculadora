const view = document.getElementById('display');
const viewUp = document.getElementById('displayResult');
const buttons = document.querySelectorAll('.numbers');
const clearButton = document.querySelector('#clear');
const eraseButton = document.querySelector('#erase');
const result = document.querySelector('#equal');
const operations = document.querySelectorAll('.operators');

let operatorSelected = '';
let mensaje = '';
let operator = '';

view.textContent = "0";


eraseButton.addEventListener('click', backspace);
clearButton.addEventListener('click', clearAll);
result.addEventListener('click', calculate);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
});

operations.forEach(button => {
    button.addEventListener('click', (e) => {
        operatorSelected = e.target.textContent;
    });
});

function mostrar(str) {
    if (str == '0') {
        
    }
}

function clearAll() {
    view.textContent = '0';
    viewUp.textContent = '';
    firstNumber = '';
    secondNumber = '';
    view.style.font = "2.7em sans-serif";
}

function backspace() {
    if (newVal.length > 0) newVal = view.textContent.slice(0, -1);
    newVal.length == 0 ? view.innerHTML = '0' : view.innerHTML = newVal;
    decimal = false;
}

function maxDisplayLength(str) {
    let maxLength = 10;
    return str.length > maxLength ? str = str.slice(-maxLength) : view.innerHTML = str;;
}

function add(a, b) { return a + b }

function substract(a, b) { return a - b }

function multiply(a, b) { return a * b }

function divide(a, b) {
    let res = "";
    b == 0 ? res = view.innerHTML = "Error" : res = a / b;
    return res;
}

function factorial(a) {
    a < 2 ? a = 1 : a = a * factorial(a - 1);
    return a;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "x":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        case "!":
            return factorial(a);
        default:
            view.innerHTML = "INVALID INPUT";
    }
}
