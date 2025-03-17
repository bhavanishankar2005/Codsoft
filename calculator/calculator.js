let display = document.getElementById("display");

// Function to append numbers to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append operators to the display
function appendOperator(operator) {
    display.value += ` ${operator} `;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to calculate the expression in the display
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
