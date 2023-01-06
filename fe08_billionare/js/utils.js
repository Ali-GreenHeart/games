
// log in function
function onLogIn() {
    console.log(nameInput.value)
    console.log(surnameInput.value)
    console.log(phoneInput.value)
    user_name.textContent = nameInput.value
    loginPage.style.display = 'none'
    gamePage.style.display = 'flex'
}

function createStadium() {
    const prizesContainer = document.querySelector('.prizes-container')
    for (let i = 15; i >= 1; i--) {
        const p = document.createElement('p')
        p.textContent = i * 100
        prizesContainer.appendChild(p)
    }
}

// get random index
function getRandomIndex(max) {
    return Math.floor(Math.random() * max)
}


function getRandomQuestion() {
    const questionIndex = getRandomIndex(QS.length)
    const question = QS[questionIndex]
    QS.splice(questionIndex, 1)
    return question;
}

function relocateIndexesOfArray(arr) {
    const r1 = Math.floor(Math.random() * arr.length)
    const r2 = Math.floor(Math.random() * arr.length)
    arraymove(arr, r1, 2)
    arraymove(arr, r2, 3)
    function arraymove(arr, fromIndex, toIndex) {
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
    }
    return arr;
}


function fiftyFiftyBtnClick(question) {
    fiftyFiftyBtn.disabled = 'true'
    const dogru_cvb_index = question.answers.indexOf(question.correctAnswer)
    const indexes = [0, 1, 2, 3]
    indexes.splice(dogru_cvb_index, 1)
    relocateIndexesOfArray(indexes)
    answerContainer.children[indexes[0]].style.visibility = 'hidden'
    answerContainer.children[indexes[2]].style.visibility = 'hidden'
    console.log(indexes)
    fiftyFiftyBtn.disabled = true
    fiftyFiftyBtn.onclick = null
}

function jokerBtnClick() {
    jokerBtn.disabled = 'true'
    jokerBtn.onclick = null
}

function phoneBtnClick() {
    const randomIndex = getRandomIndex(4)
    answerContainer.children[randomIndex].style.backgroundColor = '#06457b'
    phoneBtn.disabled = true
    phoneBtn.onclick = null;
}

function sumOfAllPrizes() {
    let s = 0
    for (let i = 100; i <= prizeCount * 100; i += 100) {
        s += i
    }
    return s;
}

function onLose(e) {
    document.getElementById('fail').play()
    e.target.classList.add('wrongAnswer')
    const winner_loser = document.getElementById('winner_loser')
    winner_loser.textContent = 'Loser!'
    fiftyFiftyBtn.disabled = 'true'
    jokerBtn.disabled = 'true'
    phoneBtn.disabled = 'true'
    answerContainer.classList.add('disabledAnswersContainer')
    setTimeout(() => {
        showResults()
    }, 500);
}


function showResults() {
    gamePage.style.display = 'none'
    finishPage.style.display = 'flex'
    let result = sumOfAllPrizes()
    correct_count.textContent = prizeCount
    paymentElem.textContent = result
    return 0;
}