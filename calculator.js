
const calculator = {
    displayValue: "0",
    firstOp: null,
    waitForSec: false,
    operator: null,
};

//check on
function inputDigit(digit){
    const {displayValue, waitForSec} = calculator;
    if(waitForSec === true){
        calculator.displayValue = digit;
        calculator.waitForSec = false;
    } else{
        calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
    };
};

function inputDecimal(dot){
    if(calculator.waitForSec === true){
        calculator.displayValue = "0."
        calculator.waitForSec = false;
        return;
    }
    if(!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;
    }
};

function handleOperator(nextOperator){
    const { firstOp, displayValue, operator} = calculator
    const inputValue = parseFloat(displayValue);

    if(operator && calculator.waitForSec){
        calculator.operator = nextOperator;
        return;
    }

    if (firstOp == null && !isNaN(inputValue)){
        calculator.firstOp = inputValue;
    }else if(operator){
        const result = calculate(firstOp, inputValue, operator);

        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOp = result;
    }

    calculator.waitForSec = true;
    calculator.operator = nextOperator;
};

function calculate(firstOp, secondOp, operator){
    if(operator === "+"){
        return firstOp + secondOp;

    } else if(operator === "-"){
        return firstOp - secondOp;

    } else if(operator === "*"){
        return firstOp * secondOp;

    } else if(operator === "/"){
        return firstOp / secondOp;
    };
    return secondOp;
}

function resetCalculator(){
    calculator.displayValue = "0";
    calculator.firstOp = null;
    calculator.waitForSec =false;
    calculator.operator = null;
};

function updateDisplay(){
    const display = document.querySelector(".screen");
    display.value = calculator.displayValue;
};

updateDisplay();

const keys = document.querySelector(".cal_keys");
keys.addEventListener("click", event => {
    const {target} = event;
    const {value} = target;
    if(!target.matches("button")){
        return;
    }
    switch (value){
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(value);
            break;
        case'.':
            inputDecimal(value);
            break;
        case 'all-clear':
            resetCalculator();
            break;
        default:
            if(Number.isInteger(parseFloat(value))){
                inputDigit(value);
            }
    }
    updateDisplay();
});



