
function clearDisplay() {
    let x = document.getElementById('display');
    x.value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function append(value) {
    let x = document.getElementById('display');
    x.value =  x.value + value;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
