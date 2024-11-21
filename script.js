// DOM

const buttonsCalculator = document.querySelector('.buttonsCalculator');
const displayCalculatorHistory = document.querySelector('.dspCalcHistory');
const displayCalculator = document.querySelector('.dspCalc');

// VARIABLES

let displayValue = 0;
let firstNumber = null;
let secondNumber = null;
let operator = undefined;
let switchOperator = false;
let decimalOperator = false;
let decimalPower = 1;
let decimalCounter = 0;

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
        case '+':
            add(firstNumber, secondNumber);
            break;
        case '-':
            subtract(firstNumber, secondNumber);
            break;
        case '*':
            multiply(firstNumber, secondNumber);
            break;
        case '/':
            divide(firstNumber, secondNumber);
            break;
        case '%':
            percent(firstNumber, secondNumber);
            break;
    }
};

const switchToDecimal = () => {
    if (!decimalOperator) {
        decimalOperator = true;
        if (!displayCalculator.textContent.includes('.')) {
            displayCalculator.textContent += '.';
        } else if (
            displayCalculator.textContent.includes('.') &&
            switchOperator &&
            !toString(secondNumber).includes('.')
        ) {
            displayCalculator.textContent += '.';
        }
    } else {
        decimalCounter = false;
    }
};

const increaseDecimal = () => {
    decimalPower *= 10;
};

const decimalNumber = (increaseNumber, number) => {
    increaseDecimal();
    return number / decimalPower + increaseNumber;
};

const bigNumber = (increaseNumber, number) => {
    return increaseNumber * 10 + number;
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
    displayCalculator.textContent = '';
    displayCalculatorHistory.textContent = '';
};

const addPlusMinusToNumber = () => {
    firstNumber *= -1;
    displayCalculator.textContent = firstNumber.toString();
};

const addNumber = (button) => {
    let number = button;
    number = number[number.length - 1];
    if (!decimalOperator) {
        if (!switchOperator) {
            for (let i = 0; i < 10; ++i) {
                if (number === String(i)) {
                    if (firstNumber > 0) {
                        firstNumber = bigNumber(firstNumber, i);
                    } else {
                        firstNumber = i;
                    }
                }
            }
            displayCalculator.textContent += number;
        } else if (operator !== null) {
            for (let i = 0; i < 10; ++i) {
                if (number === String(i)) {
                    if (secondNumber > 0) {
                        secondNumber = bigNumber(secondNumber, i);
                    } else {
                        secondNumber = i;
                    }
                }
            }
            displayCalculator.textContent += number;
        }
    } else {
        if (!switchOperator) {
            for (let i = 0; i < 10; ++i) {
                if (number === String(i)) {
                    if (firstNumber >= 0) {
                        firstNumber = decimalNumber(firstNumber, i);
                    } else {
                        firstNumber = i;
                    }
                }
            }
            if (decimalCounter < 2) {
                decimalCounter++;
            }
            firstNumber = (firstNumber.toFixed(decimalCounter) * 100) / 100;
            displayCalculator.textContent += number;
        } else {
            for (let i = 0; i < 10; ++i) {
                if (number === String(i)) {
                    if (secondNumber >= 0) {
                        secondNumber = decimalNumber(secondNumber, i);
                    } else {
                        secondNumber = i;
                    }
                }
            }
            if (decimalCounter < 2) {
                decimalCounter++;
            }
            secondNumber = (secondNumber.toFixed(decimalCounter) * 100) / 100;
            displayCalculator.textContent += number;
        }
    }
};

const addOperator = (button) => {
    if (
        firstNumber !== null &&
        !displayCalculator.textContent.includes('%') &&
        !displayCalculator.textContent.includes('*') &&
        !displayCalculator.textContent.includes('/') &&
        !displayCalculator.textContent.includes('+')
    ) {
        if (
            (displayCalculator.textContent.includes('-') &&
                displayCalculator.textContent[0] === '-') ||
            !switchOperator
        ) {
            let addOperator = button;
            switch (addOperator) {
                case 'buttonSize buttonProcent':
                    operator = '%';
                    break;
                case 'buttonSize buttonMultiply':
                    operator = '*';
                    break;
                case 'buttonSize buttonMinus':
                    operator = '-';
                    break;
                case 'buttonSize buttonPlus':
                    operator = '+';
                    break;
                case 'buttonSize buttonDivide':
                    operator = '/';
                    break;
            }
            let displaySymbol =
                displayCalculator.textContent[
                    displayCalculator.textContent.length - 1
                ];
            if (
                displaySymbol === '%' ||
                displaySymbol === '*' ||
                displaySymbol === '/' ||
                displaySymbol === '+' ||
                displaySymbol === '-'
            ) {
                let newDisplay = displayCalculator.textContent.slice(0, -1);
                displayCalculator.textContent = newDisplay;
                displayCalculator.textContent += operator;
            } else {
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

const equals = () => {
    if (switchOperator && secondNumber !== null) {
        switch (operator) {
            case '+':
                displayValue = add(firstNumber, secondNumber);
                break;
            case '-':
                displayValue = subtract(firstNumber, secondNumber);
                break;
            case '*':
                displayValue = multiply(firstNumber, secondNumber);
                break;
            case '/':
                displayValue = divide(firstNumber, secondNumber);
                break;
            case '%':
                displayValue = percent(firstNumber, secondNumber);
                break;
        }
        equalFunction();
    }
};

const equalFunction = () => {
    const number = Number(displayValue.toFixed(4));
    displayValue = number;
    displayCalculatorHistory.textContent = displayCalculator.textContent;
    displayCalculatorHistory.textContent += '=';
    displayCalculatorHistory.textContent += displayValue.toString();
    displayCalculator.textContent = displayValue.toString();
    firstNumber = displayValue;
    operator = null;
    switchOperator = false;
    secondNumber = null;
};

// EVENT LISTENER

const click = (e) => {
    const button = e.target.getAttribute('class');
    switch (button) {
        case 'buttonSize button0':
        case 'buttonSize button1':
        case 'buttonSize button2':
        case 'buttonSize button3':
        case 'buttonSize button4':
        case 'buttonSize button5':
        case 'buttonSize button6':
        case 'buttonSize button7':
        case 'buttonSize button8':
        case 'buttonSize button9':
            addNumber(button);
            break;
        case 'buttonSize buttonClear':
            resetFunction();
            break;
        case 'buttonSize buttonPlusMinus':
            addPlusMinusToNumber();
            break;
        case 'buttonSize buttonProcent':
            addOperator(button);
            break;
        case 'buttonSize buttonDivide':
            addOperator(button);
            break;
        case 'buttonSize buttonMultiply':
            addOperator(button);
            break;
        case 'buttonSize buttonMinus':
            addOperator(button);
            break;
        case 'buttonSize buttonPlus':
            addOperator(button);
            break;
        case 'buttonSize buttonDecimal':
            switchToDecimal();
            break;
        case 'buttonSize buttonEquals':
            equals();
            break;
    }
};
buttonsCalculator.addEventListener('click', click);
