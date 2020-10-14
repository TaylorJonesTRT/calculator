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
    if (secondNum === "") {
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


// Basic calculator functions
function add(a, b) {
    answer = a + b;
    result = (Math.round(answer * 10) / 10).toFixed(1)
}
function subtract(a, b) {
    answer = a - b;
    result = (Math.round(answer * 10) / 10).toFixed(1)
}
function multiply(a, b) {
    answer = a * b;
    result = (Math.round(answer * 10) / 10).toFixed(1)
}
function divide(a, b) {
    if (b === 0 || b === "0"){
        result = "No bad, no do";
    } else{
    answer = a / b;
    result = (Math.round(answer * 10) / 10).toFixed(1)
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
        }else {
            secondNum += input;
            updateScreen(secondNum);
        }
    }
}

//TODO: Add functionality to use numpad/num row to input numbers
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
//TODO: Change screen output to have if statements to determine to show an int or a float

// Do the below as just stuff to improve on your coding with
    // Refactor the functions for the operations to use switch cases