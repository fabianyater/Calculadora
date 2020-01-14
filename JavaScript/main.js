const view = document.getElementById('display');
const viewUp = document.getElementById('displayResult');
const buttons = document.querySelectorAll('.numbers');
const clearButton = document.querySelector('#clear');
const eraseButton = document.querySelector('#erase');
const result = document.querySelector('#equal');
const operations = document.querySelectorAll('.operators');

let numberSelected = '';
let operatorSelected = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';
let decimal = false;
let newVal = '';
let newOp = '';
view.innerHTML = "0";

function calculate() {
    secondNumber = +view.textContent;
    let x = view.innerHTML = operate(operator, firstNumber, secondNumber);
    (view.textContent.length > 10) ? view.style.font = "1.2em sans-serif" : view.style.font = "2.7em sans-serif";
    if (view.textContent.includes('.')) {
        view.textContent = x.toFixed(3);
    }
    viewUp.textContent += secondNumber + ' = ';
    firstNumber = null;
    secondNumber = null;
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

eraseButton.addEventListener('click', backspace);
clearButton.addEventListener('click', clearAll);
result.addEventListener('click', calculate);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        numberSelected = e.target.textContent;
        if (view.textContent == '0') {
            newVal = numberSelected;
        } else if (numberSelected == "." && view.textContent.includes(".")) {
        } else {
            newVal += numberSelected;
        }
        maxDisplayLength(newVal);
    })
});

operations.forEach(button => {
    button.addEventListener('click', (e) => {
        operatorSelected = e.target.textContent;
        if (firstNumber) {
            secondNumber = +view.textContent;
            firstNumber = operate(operator, firstNumber, secondNumber);
            newOp = operatorSelected;
            viewUp.textContent += secondNumber + " " + newOp + " ";
            operator = newOp;
        } else {
            operator = operatorSelected;
            firstNumber = +view.textContent;
            viewUp.textContent += firstNumber + " " + operator + " ";
        }
        if (operatorSelected == "!") {
            viewUp.textContent = "fact(" + firstNumber + ")";
        }
        view.textContent = "0";
        view.style.font = "2.7em sans-serif";
    });
});