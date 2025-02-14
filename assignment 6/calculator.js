document.addEventListener("DOMContentLoaded", function () {
    let display = document.querySelector(".blank");
    let currentInput = "";
    let previousInput = "";
    let operator = "";

    const buttons = document.querySelectorAll(".buttons div");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            let value = event.target.innerText;

            if (value === "C") {
                currentInput = "";
                previousInput = "";
                operator = "";
                display.innerText = "0000000";
            } else if (value === "CE") {
                currentInput = "";
                display.innerText = "0000000";
            } else if (value === "=") {
                if (previousInput !== "" && currentInput !== "") {
                    currentInput = operate(previousInput, currentInput, operator);
                    display.innerText = currentInput;
                    previousInput = "";
                    operator = "";
                }
            } else if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput !== "") {
                    previousInput = currentInput;
                    currentInput = "";
                    operator = value;
                }
            } else if (value === "1/x") {
                if (currentInput !== "") {
                    currentInput = (1 / parseFloat(currentInput)).toString();
                    display.innerText = currentInput;
                }
            } else if (value === "x²") {
                if (currentInput !== "") {
                    currentInput = (Math.pow(parseFloat(currentInput), 2)).toString();
                    display.innerText = currentInput;
                }
            } else if (value === "x¹/₂") {
                if (currentInput !== "") {
                    currentInput = (Math.sqrt(parseFloat(currentInput))).toString();
                    display.innerText = currentInput;
                }
            } else if (value === "%") {
                if (currentInput !== "") {
                    currentInput = (parseFloat(currentInput) / 100).toString();
                    display.innerText = currentInput;
                }
            } else if (value === "+/-") {
                if (currentInput !== "") {
                    currentInput = (parseFloat(currentInput) * -1).toString();
                    display.innerText = currentInput;
                }
            } else if (value === ".") {
                if (!currentInput.includes(".")) {
                    currentInput += value;
                    display.innerText = currentInput;
                }
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });

    function operate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        if (operator === "+") return (a + b).toString();
        if (operator === "-") return (a - b).toString();
        if (operator === "*") return (a * b).toString();
        if (operator === "/") return (a / b).toString();
        return b.toString();
    }
});
