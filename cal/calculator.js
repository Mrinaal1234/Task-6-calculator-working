let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

function clearEntry() {
    currentInput = "";
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function operate(op) {
    if (currentInput === "" && previousInput !== "") {
        operator = op;
    } else if (currentInput !== "") {
        if (previousInput !== "") {
            calculate();
        }
        previousInput = currentInput;
        currentInput = "";
        operator = op;
    }
}

function calculate() {
    if (previousInput === "" || currentInput === "" || operator === "") return;

    let result;
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            if (curr === 0) {
                result = "Error";
            } else {
                result = prev / curr;
            }
            break;
        case "%":
            result = prev % curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = "";
    operator = "";
    updateDisplay();
}

function reciprocal() {
    if (currentInput !== "") {
        currentInput = (1 / parseFloat(currentInput)).toString();
        updateDisplay();
    }
}

function square() {
    if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) ** 2).toString();
        updateDisplay();
    }
}

function sqrt() {
    if (currentInput !== "") {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        updateDisplay();
    }
}

function toggleSign() {
    if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function updateDisplay() {
    display.value = currentInput;
}
