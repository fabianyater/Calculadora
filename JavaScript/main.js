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
eraseButton.addEventListener('click', backspace);
clearButton.addEventListener('click', clearAll);
result.addEventListener('click', calculate);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        numberSelected = e.target.textContent;
        if (view.textContent == '0') {
            newVal = numberSelected;
        } else if (numberSelected == "." && view.textContent.includes(".")) {
            /*if (decimal != true) {
                newVal += numberSelected;
                decimal = true;
            }*/
        } else {
            newVal += numberSelected;
        }
        newVal.length >= 11 ? newVal = newVal.slice(0, 11) : view.innerHTML = newVal;
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
        view.textContent = "0";
    });
});

function calculate() {
    secondNumber = +view.textContent;
(view.textContent.length > 10)? view.style.fontSize = "1.2em": view.style.fontSize = "2em";
    view.innerHTML = operate(operator, firstNumber, secondNumber);
    viewUp.textContent += secondNumber + ' =';
    firstNumber = null;
    secondNumber = null;
}

function clearAll() {
    view.textContent = '0';
    viewUp.textContent = '';
    firstNumber = '';
    secondNumber = '';
}

function backspace() {
    if (newVal.length > 0) newVal = view.textContent.slice(0, -1);
    newVal.length == 0 ? view.innerHTML = '0' : view.innerHTML = newVal;
    decimal = false;
}

function add(a, b) { return a + b }
function substract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) {
    if (b == 0) {
        return view.innerHTML = "Error";
        console.log("errooooor");
    }
    return a / b;
}

function factorial(a) {
    if (a < 2) {
        return 1;
    }
    return a * factorial(a - 1);
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

clearAll();
