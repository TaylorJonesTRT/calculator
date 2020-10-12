const operatorBtn = document.querySelectorAll(".operator");
const numBtn = document.querySelectorAll(".num-btn");
const clearScreen = document.querySelector(".all-clear");
const equalSign = document.querySelector(".equal-sign");
const decimal = document.querySelector(".decimal");
let calcScreen = document.querySelector(".calculator-screen");
let firstNum = "";
let secondNum = "";
let number;
let operator = "";
let operation = "";
let input = "";
let result;

clearScreen.addEventListener("click", () => {
    calcScreen.value = 0;
    firstNum = "";
    secondNum = "";
    operation = "";
})

numBtn.forEach((button) => {
    button.addEventListener('click', () => {
            number = parseInt(button.innerHTML);
            numberInput(number);
            console.log(number);
        });
});

operatorBtn.forEach((button) => {
    button.addEventListener('click', () => {
        let input = button.innerHTML;
        operation = input;
        console.log(operation);
    });
});

equalSign.addEventListener('click', () => {
    if (operation === "+") {
        add(parseInt(firstNum), parseInt(secondNum));
        updateScreen(result);
        firstNum = result;
        secondNum = "";
        operation = "";
    } else if (operation === "-") {
        subtract(parseInt(firstNum), parseInt(secondNum));
        updateScreen(result);
        firstNum = result;
        secondNum = "";
        operation = "";
    } else if (operation === "*") {
        multiply(parseInt(firstNum), parseInt(secondNum));
        updateScreen(result);
        firstNum = result;
        secondNum = "";
        operation = "";
    } else if (operation === "/") {
        divide(parseInt(firstNum), parseInt(secondNum));
        updateScreen(result);
        firstNum = result;
        secondNum = "";
        operation = "";
    } else {
        return "Error";
    }
});

//TODO: Need to implement adding a decimal point to the current number being entered
decimal.addEventListener('click', () => {
    alert("Doesn't work yet");
});

// Basic calculator functions
function add(a, b) {
    result = a + b;
}
function subtract(a, b) {
    result = a - b;
}
function multiply(a, b) {
    result = a * b;
}
function divide(a, b) {
    result = a / b;
}


function updateScreen(number) {
    calcScreen.value = number;
}

function numberInput(number) {
    if (operation === "") {
        input = parseInt(number);
        firstNum += parseInt(input);
        updateScreen(firstNum);
    } else {
        input = parseInt(number);
        secondNum += parseInt(input);
        updateScreen(secondNum);
    }
}

function resetScreen() {
    calcScreen.value = 0;
}

//TODO: Add functionality to use numpad/num row to input numbers
