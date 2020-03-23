var num1 = Number(prompt('Select your first number'));
var operator = prompt('Select your operator, + - * /');
var num2 = Number(prompt('Select your second number'));
var total;

function add() {
    total = num1 + num2
}

function subtract() {
    total = num1 - num2
}

function multiply() {
    total = num1 * num2
}

function divide() {
    total = num1 / num2
}

if (operator === '+') {
    add();
    document.write(num1 + ' + ' + num2 + ' = ' + total);
} else if (operator === '-') {
    subtract();
    document.write(num1 + ' - ' + num2 + ' = ' + total);
} else if (operator === '*') {
    multiply();
    document.write(num1 + ' * ' + num2 + ' = ' + total);
} else if (operator === '/') {
    divide();
    document.write(num1 + ' / ' + num2 + ' = ' + total);
} else{
    document.write('You are not using math operators!')
}