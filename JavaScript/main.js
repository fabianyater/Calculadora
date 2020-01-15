const numbers = document.querySelectorAll('.numbers');
const clearButton = document.querySelector("#clear");
const equalsButton = document.getElementById("equal");
const operators = document.querySelectorAll(".operators");
const backspaceButton = document.querySelector(".backspace");
const view = document.getElementById("display");
const viewUp = document.getElementById("displayResult");

let firstNumber = 0;
let secondNumber = 0;
let operatorSelected = "";
let result = 0;
let displayText = "";
let equalsPressed = false;
let operatorPressed = false;

clearButton.addEventListener("click", allClear);
equalsButton.addEventListener("click", equals);
backspaceButton.addEventListener("click", backSpace);

numbers.forEach((button) => {
    button.addEventListener('click', e => {
        if (e.target.textContent == "." && displayText.includes('.')) {
        } else {
            display(e.target.textContent);
        }
    });
});


operators.forEach((button) => {
    button.addEventListener('click', e => {
        useOperators(button.textContent);
        view.style.font = "2.7em sans-serif";
    });
});

//Functions
function allClear() {
    view.textContent = 0;
    viewUp.textContent = "";
    displayText = "";
    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    operatorSelected = "";
    equalsPressed = false;
    view.style.font = "2.7em sans-serif";
}

function add(a, b) { return (a + b); }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function factorial(a) {
    a < 2 ? a = 1 : a = a * factorial(a - 1);
    return a;
}


function display(buttonValue) {
    displayText += buttonValue;
    maxDisplayLength(displayText);
}

function selectOperator(operator) {
    switch (operator) {
        case "+":
            displayText = "+";
            operatorSelected = "+";
            operatorPressed = true;
            break;
        case "-":
            displayText = "-";
            operatorSelected = "-";
            break;
        case "x":
            displayText = "x";
            operatorSelected = "x";
            break;
        case "/":
            displayText = "/";
            operatorSelected = "/";
            break;
        case "!":
            displayText = "fact(" + firstNumber + ")";
            operatorSelected = "!";
            break;
    }
    viewUp.textContent += firstNumber + ' ' + operator;
    view.textContent = displayText;
    displayText = "";
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        case "!":
            return factorial(a);
        default:
            return "INVALID OPERATOR";
    }
}

function useOperators(op) {
    if (equalsPressed === true) {
        selectOperator(op);
        secondNumber = parseFloat(displayText, 10);
    }
    else if (secondNumber === 0) {
        firstNumber = parseFloat(displayText, 10);
        secondNumber = 1;
        selectOperator(op);
    }
    else {
        secondNumber = parseFloat(displayText, 10);
        viewUp.textContent += ' ' + secondNumber  + " = ";
        result = operate(operatorSelected, firstNumber, secondNumber);
        displayText = "";
        firstNumber = result;
        selectOperator(op);
    }
}

function backSpace() {
    if (displayText.length > 0) displayText = view.textContent.slice(0, -1);
    displayText.length == 0 ? view.innerHTML = '0' :
        view.innerHTML = displayText;
}

function maxDisplayLength(str) {
    let maxLength = 10;
    //viewUp.textContent = str;
    return str.length > maxLength ? str = str.slice(-maxLength) :
        view.textContent = str;;
}

function equals() {
    if (operatorSelected === "") { return; }

    if (equalsPressed === false && secondNumber === 0) { return; }

    secondNumber = parseFloat(displayText, 10);
    result = view.textContent = operate(operatorSelected, firstNumber, secondNumber);

    if (operatorSelected === "divide" && secondNumber === 0) {
        allClear();
        viewUp.textContent = 'Error! Div by 0';
        return;
    }
    (view.textContent.length > 10) ? view.style.font = "1.2em sans-serif" :
        view.style.font = "2.7em sans-serif";

    if (view.textContent.includes('.')) {
        view.textContent = result.toFixed(3);
        if (view.textContent.includes('0')) {
            view.textContent = result;
        }
    }
    
    viewUp.textContent += ' ' + secondNumber + ' = ' ;

    console.log(result);
    firstNumber = result;
    operatorSelected = "";
    secondNumber = "0";
    equalsPressed = true;
}

