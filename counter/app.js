const counter = document.getElementById('counter')
const decreaseBtn = document.getElementById('decreaseBtn')
const resetBtn = document.getElementById('resetBtn')
const increaseBtn = document.getElementById('increaseBtn')


let result = 0;
decreaseBtn.addEventListener('click', () => {
    result--;
    if (result < 0) {
        counter.style.color = 'red'
    }
    if(result===0){
        counter.style.color = 'black'
    }
    counter.textContent = result
})
resetBtn.addEventListener('click', () => {
    result = 0;
    counter.textContent = result
    counter.style.color='black'
})
increaseBtn.addEventListener('click', () => {
    result++;
    if(result>0){
         counter.style.color='green'
    }
    if(result===0){
        counter.style.color = 'black'
    }
    counter.textContent = result
})