const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
// const operator = document.getElementById('operator')
const result = document.getElementById('result')
// const calculateBtn = document.getElementById('calculateBtn')


// calculateBtn.onclick = () => {
//     const n1 = Number(num1.value)
//     const n2 = Number(num2.value)
//     switch (operator.value) {
//         case '+':
//             result.textContent = n1 + n2
//             break;
//         case '-':
//             result.textContent = n1 - n2
//             break;
//         case '*':
//             result.textContent = n1 * n2
//             break;
//         case '/':
//             result.textContent = n1 / n2
//             break;
//     }
// }



const sum = document.getElementById('sum')
const sub = document.getElementById('sub')
const divide = document.getElementById('divide')
const multip = document.getElementById('multip')



sum.onclick = () => {
    result.textContent = Number(num1.value) + Number(num2.value)
}
sub.onclick = () => {
    result.textContent = Number(num1.value) - Number(num2.value)
}
divide.onclick = () => {
    result.textContent = Number(num1.value) / Number(num2.value)
}
multip.onclick = () => {
    result.textContent = Number(num1.value) * Number(num2.value)
}