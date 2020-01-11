const view = document.getElementById('display');
const buttons = document.querySelectorAll('.numbers');
const clearButton = document.querySelector('#clear');
const eraseButton = document.querySelector('#erase');
let number = '';
let del = '';
let decimal = false;
let newVal = '';
let resultVal = '';
view.innerHTML = '0';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        number = e.target.id;
        if (resultVal) {
            newVal = number;
            console.log(newVal);
            resultVal = "";
        } else if (number == ".") {
            if (decimal != true) {
                newVal += number;
                decimal = true;
            }
        } else {
            newVal += number;
        }
        newVal.length >= 10 ? newVal = newVal.slice(0, 10) : view.innerHTML = newVal;
    })
});

clearButton.addEventListener('click', (e) => {
    view.innerHTML = '0';
    newVal = '';
});

eraseButton.addEventListener('click', (e) => {
    if (newVal.length > 0) newVal = newVal.slice(0, -1);
    newVal.length == 0 ? view.innerHTML = '0' : view.innerHTML = newVal;
})

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
        case "—":
            return substract(a, b);
        case "X":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        case "!":
            return factorial(a);
        default:
            view.innerHTML = "INVALID INPUT";
    }
}