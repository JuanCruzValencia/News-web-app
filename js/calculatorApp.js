//numero actual
let firstNumber = [];
//acumulador
let secondNum = [];
//operacion
let opSign = [];

//Tomo del html el display donde van a aparecer los numeros
const display = document.getElementById('calc__display');

//Tomamos los operadores y le agregamos el evento
const btnOperations = document.querySelectorAll('#calc__operations');
btnOperations.forEach((btn) => {
    btn.addEventListener('click', () => {
        operation(btn.innerText);
    });
});
//Funcion que guarda el calculo y devuelve el resultado
function operation(operation) {
    if(operation != '=' && secondNum.length === 0) {
        secondNum.push(firstNumber.join(''));
        opSign.push(operation);
        firstNumber = [];
        display.innerText += operation;
    } else {
        let calc = eval(secondNum.join('')) + opSign + eval(firstNumber.join(''));
        let result = eval(calc);
        (result % 1) != 0 ? result = result.toFixed(2) : result;
        display.innerText = result;
        firstNumber = [result];
        secondNum = [];
        opSign = [];
    };
};

//Tomamos botones de los numeros y le agregamos el evento de ver en pantalla
const btnNumbers = document.querySelectorAll('#calc__numbers');
btnNumbers.forEach((btn) => {
    btn.addEventListener('click', () => {
        addNumber(btn.innerText);
    });
});
//Funcion que muestra los numeros en pantalla y guarda en mi primer acumulador
function addNumber(number){
    display.innerText === '0' ? display.innerText = number : display.innerText += number;
    firstNumber.push(number);
};

//Boton y funcion para dejar el display en blanco
const btnClear = document.getElementById('calc__clear');
btnClear.addEventListener('click', () => {
    clearDisplay();
});
function clearDisplay() { //funcion que deja en cero el display
    display.innerText = 0;
    firstNumber = [];
    secondNum = [];
    opSign = [];
};
