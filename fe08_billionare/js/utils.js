
// log in function
function onLogIn() {
    console.log(nameInput.value)
    console.log(surnameInput.value)
    console.log(phoneInput.value)
    loginPage.style.display = 'none'
    gamePage.style.display = 'flex'
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