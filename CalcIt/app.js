const enteredNumber = document.getElementById('entered_number')

let birinciEded = 0
let operator = ''
let ikinciEded = 0
let calculated = false


function btnForNumber(ed) {
    if (calculated) {
        enteredNumber.value = ed
        calculated = false
    } else {
        enteredNumber.value += ed
    }
}
function btnForOperator(_operator) {
    birinciEded = +enteredNumber.value
    enteredNumber.value = ''
    operator = _operator
}


function btnForClear() {
    enteredNumber.value = ''
    birinciEded = 0
    operator = ''
    ikinciEded = 0
}

function btnForDot() {
    if (!enteredNumber.value.includes('.')) {
        enteredNumber.value += '.'
    }
}

function btnForCalculate() {
    ikinciEded = +enteredNumber.value
    calculated = true
    switch (operator) {
        case '+':
            enteredNumber.value = birinciEded + ikinciEded
            break;
        case '-':
            enteredNumber.value = birinciEded - ikinciEded
            break;
        case '/':
            enteredNumber.value = birinciEded / ikinciEded
            break;
        case 'pow2':
            enteredNumber.value = birinciEded * birinciEded
            break;
        case '*':
            enteredNumber.value = birinciEded * ikinciEded
            break;
        case 'sqrt':
            enteredNumber.value = Math.sqrt(birinciEded)
            break;
    }
}

function btnForBackspace() {
    let value = enteredNumber.value
    enteredNumber.value = value.slice(0, value.length - 1)
}
