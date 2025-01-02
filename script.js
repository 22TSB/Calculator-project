const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.dspCalc');
const displayHistory = document.querySelector('.dspCalcHistory');

let array = [];
let aux;
let sw = 0;
let operator = false;

const calculate = (button) => {
    const value = button.textContent;

    if (value === 'AC') {
        array = [];
        display.textContent = '';
        displayHistory.textContent = '';
        sw = 0;
        operator = false;
    } else if (value === '=') {
        const res = eval(aux);
        if ((res % 1) > 0 && (res % 1) < 1) {
            display.textContent = res.toFixed(2);
        } else {
            display.textContent = res;
        }
        displayHistory.textContent = aux;
        aux = res;
        array = [aux];
        operator = false;
    } else if (value === '+/-') {
        if (array.length) {
            if (array[0] !== '-' && (array[0] >= 0 || array[1] >= 0)) {
                array.unshift('-');
                aux = array.join('');
                display.textContent = aux;
            } else {
                if (array[0] === '-') {
                    array.shift();
                } else if (array[0] < 0) {
                    array[0] *= -1;
                }
                aux = array.join('');
                display.textContent = aux;
            }
        }
    } else if (value === '.') {
        if (!sw && !operator) {
            array.push(value);
            aux = array.join('');
            display.textContent = aux;
            sw = 1;
        }
        else if (sw === 1 && operator) {
            array.push(value);
            aux = array.join('');
            display.textContent = aux;
            sw = 2;
        }
    }
    else if (value === '%' || value === '/' || value === '*' || value === '-' || value === '+') {
        if (!operator && array.length) {
            operator = true;
            array.push(value);
            aux = array.join('');
            display.textContent = aux;
        }
        else if (array.length && !(Number(array[array.length - 1]) >= 0 && Number(array[array.length - 1]) <= 9)) {
            operator = true;
            array[array.length - 1] = value;
            aux = array.join('');
            display.textContent = aux;
        }
    }
    else {
        array.push(value);
        aux = array.join('');
        display.textContent = aux;
    }
};

buttons.forEach((button) =>
    button.addEventListener('click', () => calculate(button))
);