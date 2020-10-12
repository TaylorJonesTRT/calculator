const operatorBtn = document.querySelectorAll(".operator");
const numBtn = document.querySelectorAll(".num-btn");
const clearScreen = document.querySelector(".all-clear");
const equalSign = document.querySelector(".equal-sign");
const decimal = document.querySelector(".decimal");
let calcScreen = document.querySelector(".calculator-screen");
let firstNum = "";
let secondNum = "";
let operator = "";
let operation = "";

clearScreen.addEventListener("click", () => {
    calcScreen.value = 0;
    firstNum = "";
    secondNum = "";
    operation = "";
})

numBtn.forEach((button) => {
    button.addEventListener('click', () => {
        let input = button.innerHTML;
        if (firstNum === "" || secondNum === "") {
            if (firstNum === "") {
                firstNum = parseInt(input);
                calcScreen.value = firstNum;
            } else if (secondNum === "") {
                secondNum = parseInt(input);
                calcScreen.value = secondNum;
            }
        } else {
            return "Error";
        }
    });
});

operatorBtn.forEach((button) => {
    button.addEventListener('click', () => {
        let input = button.innerHTML;
        operation = input;
        console.log(operation);
    })
});

equalSign.addEventListener('click', () => {
    if (operation === "+") {
        operate(operation, firstNum, secondNum);
    } else if (operation === "-") {
        operate(operation, firstNum, secondNum);
    } else if (operation === "*") {
        operate(operation, firstNum, secondNum);
    } else if (operation === "/") {
        operate(operation, firstNum, secondNum);
    } else {
        return "Error";
    }
});

//TODO: Need to implement adding a decimal point to the current number being entered
decimal.addEventListener('click', () => {
    alert("Doesn't work yet");
})

// Operat function to take 2 numbers and what operation to do and return the answer
function operate(sign, num1, num2) {
    if (operation === "+") {
        add(num1, num2);
    } else if (operation === "-") {
        subtract(num1, num2);
    } else if (operation === "*") {
        multiply(num1, num2);
    } else if (operation === "/") {
        divide(num1, num2);
    }
}

// Basic calculator functions
function add(a, b) {
    result = a + b;
    calcScreen.value = result;
    firstNum = result;
    secondNum = "";
}
function subtract(a, b) {
    result = a - b;
    calcScreen.value = result;
    firstNum = result;
    secondNum = "";}
function multiply(a, b) {
    result = a * b;
    calcScreen.value = result;
    firstNum = result;
    secondNum = "";}
function divide(a, b) {
    result = a / b;
    calcScreen.value = result;
    firstNum = result;
    secondNum = "";}