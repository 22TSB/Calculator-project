// DOM

const displayCalculatorHistory = document.querySelector(".dspCalcHistory");
const displayCalculator = document.querySelector(".dspCalc");

const buttonClear = document.querySelector(".buttonClear");
const buttonPlusMinus = document.querySelector(".buttonPlusMinus");
const buttonProcent = document.querySelector(".buttonProcent");
const buttonDivide = document.querySelector(".buttonDivide");
const buttonMultiply = document.querySelector(".buttonMultiply");
const buttonMinus = document.querySelector(".buttonMinus");
const buttonPlus = document.querySelector(".buttonPlus");
const buttonEquals = document.querySelector(".buttonEquals");
const buttonDecimal = document.querySelector(".buttonDecimal");
const button0 = document.querySelector(".button0");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");
const button8 = document.querySelector(".button8");
const button9 = document.querySelector(".button9");

// VARIABLE

var displayValue = 0;
var firstNumber = null;
var secondNumber = null;
var operator = undefined;
var switchOperator = false;
var decimalOperator = false;
var decimalPower = 1;
var decimalCounter = 0;

// FUNCTIONS

const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};

const subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
};

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};

const divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
};

const percent = (firstNumber, secondNumber) => {
    return firstNumber % secondNumber;
};

const operate = (firstNumber, operator, secondNumber) => {
    switch (operator) {
        case "+":
            add(firstNumber, secondNumber);
            break;
        case "-":
            subtract(firstNumber, secondNumber);
            break;
        case "*":
            multiply(firstNumber, secondNumber);
            break;
        case "/":
            divide(firstNumber, secondNumber);
            break;
        case "%":
            percent(firstNumber, secondNumber);
            break;
    }
};



const switchToDecimal = () => {
    if (!decimalOperator) {
        decimalOperator = true;
        if (!displayCalculator.textContent.includes(".")) {
            displayCalculator.textContent += ".";
        }
        else if (displayCalculator.textContent.includes(".") && switchOperator && !toString(secondNumber).includes(".")) {
            displayCalculator.textContent += ".";
        }
    }
    else {
        decimalCounter = false;
    }
};

const increaseDecimal = () => {
    decimalPower *= 10;
};

const decimalNumber = (increaseNumber, number) => {
    increaseDecimal();
    return (number / decimalPower) + increaseNumber;
};

const bigNumber = (increaseNumber, number) => {
    return (increaseNumber * 10) + number;
};

const resetFunction = () => {
    displayValue = 0;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    switchOperator = false;
    decimalOperator = false;
    decimalPower = 1;
    decimalCounter = 0;
    firstOperation = true;
    displayCalculator.textContent = "";
    displayCalculatorHistory.textContent = "";
};

const addPlusMinusToNumber = () => {
    firstNumber *= -1;
    displayCalculator.textContent = firstNumber.toString();
};

const addNumber = (e) => {
    let number = e.target.getAttribute("class");
    number = number[number.length - 1];
    if (!decimalOperator) {
        if (!switchOperator) {
            for (let i = 0; i < 10; ++i) {
                if (number === String(i)) {
                    if (firstNumber > 0) {
                        firstNumber = bigNumber(firstNumber, i);
                    }
                    else {
                        firstNumber = i;
                    }
                }
            }
            displayCalculator.textContent += number;
        }
        else if (operator !== null) {
            for (let i = 0; i < 10; ++i) {
                if (number === String(i)) {
                    if (secondNumber > 0) {
                        secondNumber = bigNumber(secondNumber, i);
                    }
                    else {
                        secondNumber = i;
                    }
                }
            }
            displayCalculator.textContent += number;
        }
    }
    else {
        if (!switchOperator) {
            for (let i = 0; i < 10; ++i) {
                if (number === String(i)) {
                    if (firstNumber >= 0) {
                        firstNumber = decimalNumber(firstNumber, i);
                    }
                    else {
                        firstNumber = i;
                    }
                }
            }
            if (decimalCounter < 2) {
                decimalCounter++;
            }
            firstNumber = firstNumber.toFixed(decimalCounter) * 100 / 100;
            displayCalculator.textContent += number;
        }
        else {
            for (let i = 0; i < 10; ++i) {
                if (number === String(i)) {
                    if (secondNumber >= 0) {
                        secondNumber = decimalNumber(secondNumber, i);
                    }
                    else {
                        secondNumber = i;
                    }
                }
            }
            if (decimalCounter < 2) {
                decimalCounter++;
            }
            secondNumber = secondNumber.toFixed(decimalCounter) * 100 / 100;
            displayCalculator.textContent += number;
        }
    }
};

const addOperator = (e) => {
    if (firstNumber !== null && !displayCalculator.textContent.includes("%") && !displayCalculator.textContent.includes("*") && !displayCalculator.textContent.includes("/") && !displayCalculator.textContent.includes("+")) {
        if ((displayCalculator.textContent.includes("-") && (displayCalculator.textContent[0] === "-")) || !switchOperator) {
            let addOperator = e.target.getAttribute("class");
            switch (addOperator) {
                case "buttonSize buttonProcent":
                    operator = "%";
                    break;
                case "buttonSize buttonMultiply":
                    operator = "*";
                    break;
                case "buttonSize buttonMinus":
                    operator = "-";
                    break;
                case "buttonSize buttonPlus":
                    operator = "+";
                    break;
                case "buttonSize buttonDivide":
                    operator = "/";
                    break;
            }
            let displaySymbol = displayCalculator.textContent[displayCalculator.textContent.length - 1];
            if (displaySymbol === "%" || displaySymbol === "*" || displaySymbol === "/" || displaySymbol === "+" || displaySymbol === "-") {
                let newDisplay = displayCalculator.textContent.slice(0, -1);
                displayCalculator.textContent = newDisplay;
                displayCalculator.textContent += operator;
            }
            else {
                displayCalculator.textContent += operator;
            }
            if (!switchOperator) {
                switchOperator = true;
            }
            decimalOperator = false;
            decimalPower = 1;
            decimalCounter = 0;
        }
    }
};

const Equals = () => {
    if (switchOperator && secondNumber !== null) {
        switch (operator) {
            case "+":
                displayValue = add(firstNumber, secondNumber);
                break;
            case "-":
                displayValue = subtract(firstNumber, secondNumber);
                break;
            case "*":
                displayValue = multiply(firstNumber, secondNumber);
                break;
            case "/":
                displayValue = divide(firstNumber, secondNumber);
                break;
            case "%":
                displayValue = percent(firstNumber, secondNumber);
                break;
        }
        equalFunction();
    }
};

const equalFunction = () => {
    displayCalculatorHistory.textContent = displayCalculator.textContent;
    displayCalculatorHistory.textContent += "=";
    displayCalculatorHistory.textContent += displayValue.toString();
    displayCalculator.textContent = displayValue.toString();
    firstNumber = displayValue;
    operator = null;
    switchOperator = false;
    secondNumber = null;
};

// EVENT LISTENERS

buttonClear.addEventListener("click", resetFunction);
buttonPlusMinus.addEventListener("click", addPlusMinusToNumber);
buttonProcent.addEventListener("click", addOperator);
buttonDivide.addEventListener("click", addOperator);
buttonMultiply.addEventListener("click", addOperator);
buttonMinus.addEventListener("click", addOperator);
buttonPlus.addEventListener("click", addOperator);
buttonDecimal.addEventListener("click", switchToDecimal);
buttonEquals.addEventListener("click", Equals);
button0.addEventListener("click", addNumber);
button1.addEventListener("click", addNumber);
button2.addEventListener("click", addNumber);
button3.addEventListener("click", addNumber);
button4.addEventListener("click", addNumber);
button5.addEventListener("click", addNumber);
button6.addEventListener("click", addNumber);
button7.addEventListener("click", addNumber);
button8.addEventListener("click", addNumber);
button9.addEventListener("click", addNumber);