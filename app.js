const operatorBtn = document.querySelectorAll(".operator");
const backspace = document.querySelector(".backspace");
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
let answer;
let newNum = "";
let displayVal = 0;
let decimalAdded = false;
let secondDecimalAdded = false;


// Adding all event listeners for buttons on the calculator
clearScreen.addEventListener("click", () => {
    calcScreen.value = 0;
    firstNum = "";
    secondNum = "";
    operation = "";
    decimalAdded = false;
    secondDecimalAdded = false;
})

numBtn.forEach((button) => {
    button.addEventListener('click', () => {
            number = button.innerHTML;
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

decimal.addEventListener('click', () => {
    if (operation === "") {
        if (!decimalAdded) {
            firstNum += ".";
            decimalAdded = true;
            updateScreen(firstNum);
        }
    } else {
        if (!secondDecimalAdded) {
        secondNum += ".";
        secondDecimalAdded = true;
        updateScreen(secondNum);
        }
    }
});

equalSign.addEventListener('click', () => {
    if (operation === "+") {
        add(parseFloat(firstNum), parseFloat(secondNum));
        updateScreen(result);
        firstNum = result;
        secondNum = "";
        operation = "";
    } else if (operation === "-") {
        subtract(parseFloat(firstNum), parseFloat(secondNum));
        updateScreen(result);
        firstNum = result;
        secondNum = "";
        operation = "";
    } else if (operation === "*") {
        multiply(parseFloat(firstNum), parseFloat(secondNum));
        updateScreen(result);
        firstNum = result;
        secondNum = "";
        operation = "";
    } else if (operation === "/") {
        divide(parseFloat(firstNum), parseFloat(secondNum));
        updateScreen(result);
        firstNum = result;
        secondNum = "";
        operation = "";
    } else {
        return "Error";
    }
});


// Basic calculator functions
function add(a, b) {
    answer = a + b;
    result = (Math.round(answer * 10) / 10).toFixed(1)
    if (result % 2 === 0) {
        result = parseInt(result);
    } else {
        result = parseFloat(result);
    }
}
function subtract(a, b) {
    answer = a - b;
    result = (Math.round(answer * 10) / 10).toFixed(1)
    if (result % 2 === 0) {
        result = parseInt(result);
    } else {
        result = parseFloat(result);
    }
}
function multiply(a, b) {
    answer = a * b;
    result = (Math.round(answer * 10) / 10).toFixed(1)
    if (result % 2 === 0) {
        result = parseInt(result);
    } else {
        result = parseFloat(result);
    }
}
function divide(a, b) {
    if (b === 0 || b === "0"){
        result = "No bad, no do";
    } else{
    answer = a / b;
    result = (Math.round(answer * 10) / 10).toFixed(1)
    if (result % 2 === 0) {
        result = parseInt(result);
    } else {
        result = parseFloat(result);
    }
    }
}

function updateScreen(number) {
    calcScreen.value = number;
}

function numberInput(number) {
    if (operation === "") {
        input = number;
        if (input === "DEL") {
            firstNum = firstNum.substring(0, firstNum.length - 1);
            updateScreen(firstNum);
        } else {
            firstNum += input;
            updateScreen(firstNum);
        }
    } else {
        input = number;
        if (input === "DEL") {
            secondNum = secondNum.substring(0, secondNum.length - 1);
            updateScreen(secondNum);
        } else {
            secondNum += input;
            updateScreen(secondNum);
        }
    }
}

// Keyboard input functionality
document.addEventListener("keydown", event => {
    if (operation === "") {
        if (event.key == "1") {
            input = "1";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "2") {
            input = "2";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "3") {
            input = "3";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "4") {
            input = "4";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "5") {
            input = "5";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "6") {
            input = "6";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "7") {
            input = "7";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "8") {
            input = "8";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "9") {
            input = "9";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "0") {
            input = "0";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key === "Backspace") {
            firstNum = firstNum.substring(0, firstNum.length - 1);
            updateScreen(firstNum);
        }
    } else {
        if (event.key == "1") {
            input = "1";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "2") {
            input = "2";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "3") {
            input = "3";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "4") {
            input = "4";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "5") {
            input = "5";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "6") {
            input = "6";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "7") {
            input = "7";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "8") {
            input = "8";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "9") {
            input = "9";
            firstNum += input;
            updateScreen(firstNum);
        } else if (event.key == "0") {
            input = "0";
            firstNum += input;
            updateScreen(firstNum);
        }
    }
});

// Do the below as just stuff to improve on your coding with
    // Refactor the functions for the operations to use switch cases