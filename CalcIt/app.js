const enteredNumber = document.getElementById('entered_number')

function btnForNumber(ed) {
    enteredNumber.value += ed
}

let birinciEded = 0
let operator = ''
let ikinciEded = 0

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

}
