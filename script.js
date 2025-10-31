
const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = "";
}

function deleteDisplay() {
    display.value = display.value.slice(0, -1);
}


function appendToDisplay(value) {
    if (value === '=') {
        calculate(); 
    } else {
        display.value += value;
    }
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
