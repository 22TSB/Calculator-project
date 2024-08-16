// DOM

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

var displayValue = 5;
var firstNumber = 0;
var secondNumber = 0;
var operator = undefined;
var switchOperator = false;
var decimalOperator = false;
var decimalPower = 1;
var decimalCounter = 0;
var firstOperation = true;

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
    }
    else {
        decimalCounter = false;
    }
    displayCalculator.textContent += ".";
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
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    switchOperator = false;
    decimalOperator = false;
    decimalPower = 1;
    decimalCounter = 0;
    firstOperation = true;
    displayCalculator.textContent = "";
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
            switch (number) {
                case "0":
                    if (firstNumber > 0) {
                        firstNumber = bigNumber(firstNumber, 0);
                    }
                    else {
                        firstNumber = 0;
                    }
                    break;
                case "1":
                    if (firstNumber > 0) {
                        firstNumber = bigNumber(firstNumber, 1);
                    }
                    else {
                        firstNumber = 1;
                    }
                    break;
                case "2":
                    if (firstNumber > 0) {
                        firstNumber = bigNumber(firstNumber, 2);
                    }
                    else {
                        firstNumber = 2;
                    }
                    break;
                case "3":
                    if (firstNumber > 0) {
                        firstNumber = bigNumber(firstNumber, 3);
                    }
                    else {
                        firstNumber = 3;
                    }
                    break;
                case "4":
                    if (firstNumber > 0) {
                        firstNumber = bigNumber(firstNumber, 4);
                    }
                    else {
                        firstNumber = 4;
                    }
                    break;
                case "5":
                    if (firstNumber > 0) {
                        firstNumber = bigNumber(firstNumber, 5);
                    }
                    else {
                        firstNumber = 5;
                    }
                    break;
                case "6":
                    if (firstNumber > 0) {
                        firstNumber = bigNumber(firstNumber, 6);
                    }
                    else {
                        firstNumber = 6;
                    }
                    break;
                case "7":
                    if (firstNumber > 0) {
                        firstNumber = bigNumber(firstNumber, 7);
                    }
                    else {
                        firstNumber = 7;
                    }
                    break;
                case "8":
                    if (firstNumber > 0) {
                        firstNumber = bigNumber(firstNumber, 8);
                    }
                    else {
                        firstNumber = 8;
                    }
                    break;
                case "9":
                    if (firstNumber > 0) {
                        firstNumber = bigNumber(firstNumber, 9);
                    }
                    else {
                        firstNumber = 9;
                    }
                    break;
            }
            if (firstOperation) {
                displayCalculator.textContent += number;
            }
        }
        else if (operator !== null) {
            switch (number) {
                case "0":
                    if (secondNumber > 0) {
                        secondNumber = bigNumber(secondNumber, 0);
                    }
                    else {
                        secondNumber = 0;
                    }
                    break;
                case "1":
                    if (secondNumber > 0) {
                        secondNumber = bigNumber(secondNumber, 1);
                    }
                    else {
                        secondNumber = 1;
                    }
                    break;
                case "2":
                    if (secondNumber > 0) {
                        secondNumber = bigNumber(secondNumber, 2);
                    }
                    else {
                        secondNumber = 2;
                    }
                    break;
                case "3":
                    if (secondNumber > 0) {
                        secondNumber = bigNumber(secondNumber, 3);
                    }
                    else {
                        secondNumber = 3;
                    }
                    break;
                case "4":
                    if (secondNumber > 0) {
                        secondNumber = bigNumber(secondNumber, 4);
                    }
                    else {
                        secondNumber = 4;
                    }
                    break;
                case "5":
                    if (secondNumber > 0) {
                        secondNumber = bigNumber(secondNumber, 5);
                    }
                    else {
                        secondNumber = 5;
                    }
                    break;
                case "6":
                    if (secondNumber > 0) {
                        secondNumber = bigNumber(secondNumber, 6);
                    }
                    else {
                        secondNumber = 6;
                    }
                    break;
                case "7":
                    if (secondNumber > 0) {
                        secondNumber = bigNumber(secondNumber, 7);
                    }
                    else {
                        secondNumber = 7;
                    }
                    break;
                case "8":
                    if (secondNumber > 0) {
                        secondNumber = bigNumber(secondNumber, 8);
                    }
                    else {
                        secondNumber = 8;
                    }
                    break;
                case "9":
                    if (secondNumber > 0) {
                        secondNumber = bigNumber(secondNumber, 9);
                    }
                    else {
                        secondNumber = 9;
                    }
                    break;
            }
            displayCalculator.textContent += number;
        }
    }
    else {
        if (!switchOperator) {
            switch (number) {
                case "0":
                    if (firstNumber > 0) {
                        firstNumber = decimalNumber(firstNumber, 0);
                    }
                    else {
                        firstNumber = 0;
                    }
                    break;
                case "1":
                    if (firstNumber > 0) {
                        firstNumber = decimalNumber(firstNumber, 1);
                    }
                    else {
                        firstNumber = 1;
                    }
                    break;
                case "2":
                    if (firstNumber > 0) {
                        firstNumber = decimalNumber(firstNumber, 2);
                    }
                    else {
                        firstNumber = 2;
                    }
                    break;
                case "3":
                    if (firstNumber > 0) {
                        firstNumber = decimalNumber(firstNumber, 3);
                    }
                    else {
                        firstNumber = 3;
                    }
                    break;
                case "4":
                    if (firstNumber > 0) {
                        firstNumber = decimalNumber(firstNumber, 4);
                    }
                    else {
                        firstNumber = 4;
                    }
                    break;
                case "5":
                    if (firstNumber > 0) {
                        firstNumber = decimalNumber(firstNumber, 5);
                    }
                    else {
                        firstNumber = 5;
                    }
                    break;
                case "6":
                    if (firstNumber > 0) {
                        firstNumber = decimalNumber(firstNumber, 6);
                    }
                    else {
                        firstNumber = 6;
                    }
                    break;
                case "7":
                    if (firstNumber > 0) {
                        firstNumber = decimalNumber(firstNumber, 7);
                    }
                    else {
                        firstNumber = 7;
                    }
                    break;
                case "8":
                    if (firstNumber > 0) {
                        firstNumber = decimalNumber(firstNumber, 8);
                    }
                    else {
                        firstNumber = 8;
                    }
                    break;
                case "9":
                    if (firstNumber > 0) {
                        firstNumber = decimalNumber(firstNumber, 9);
                    }
                    else {
                        firstNumber = 9;
                    }
                    break;
            }
            if (decimalCounter < 2) {
                decimalCounter++;
            }
            firstNumber = firstNumber.toFixed(decimalCounter) * 100 / 100;
            if (firstOperation) {
                displayCalculator.textContent += number;
            }
        }
        else {
            switch (number) {
                case "0":
                    if (secondNumber > 0) {
                        secondNumber = decimalNumber(secondNumber, 0);
                    }
                    else {
                        secondNumber = 0;
                    }
                    break;
                case "1":
                    if (secondNumber > 0) {
                        secondNumber = decimalNumber(secondNumber, 1);
                    }
                    else {
                        secondNumber = 1;
                    }
                    break;
                case "2":
                    if (secondNumber > 0) {
                        secondNumber = decimalNumber(secondNumber, 2);
                    }
                    else {
                        secondNumber = 2;
                    }
                    break;
                case "3":
                    if (secondNumber > 0) {
                        secondNumber = decimalNumber(secondNumber, 3);
                    }
                    else {
                        secondNumber = 3;
                    }
                    break;
                case "4":
                    if (secondNumber > 0) {
                        secondNumber = decimalNumber(secondNumber, 4);
                    }
                    else {
                        secondNumber = 4;
                    }
                    break;
                case "5":
                    if (secondNumber > 0) {
                        secondNumber = decimalNumber(secondNumber, 5);
                    }
                    else {
                        secondNumber = 5;
                    }
                    break;
                case "6":
                    if (secondNumber > 0) {
                        secondNumber = decimalNumber(secondNumber, 6);
                    }
                    else {
                        secondNumber = 6;
                    }
                    break;
                case "7":
                    if (secondNumber > 0) {
                        secondNumber = decimalNumber(secondNumber, 7);
                    }
                    else {
                        secondNumber = 7;
                    }
                    break;
                case "8":
                    if (secondNumber > 0) {
                        secondNumber = decimalNumber(secondNumber, 8);
                    }
                    else {
                        secondNumber = 8;
                    }
                    break;
                case "9":
                    if (secondNumber > 0) {
                        secondNumber = decimalNumber(secondNumber, 9);
                    }
                    else {
                        secondNumber = 9;
                    }
                    break;
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
    displayCalculator.textContent += operator.toString();
    if (!switchOperator) {
        switchOperator = true;
    }
    decimalOperator = false;
    decimalPower = 1;
    decimalCounter = 0;
};

const Equals = () => {
    if (switchOperator) {
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
                displayValue = procent(firstNumber, secondNumber);
                break;
        }
        equalFunction();
    }
};

const equalFunction = () => {
    displayCalculator.textContent = displayValue.toString();
    firstNumber = displayValue;
    operator = null;
    switchOperator = true;
    secondNumber = 0;
    firstOperation = false;
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