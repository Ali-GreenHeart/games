
// log in function
function onLogIn() {
    console.log(nameInput.value)
    console.log(surnameInput.value)
    console.log(phoneInput.value)
    loginPage.style.display = 'none'
    gamePage.style.display = 'flex'
}

// get random index
function getRandomIndex() {
    return Math.floor(Math.random() * QS.length)
}


function getRandomQuestion() {
    const questionIndex = getRandomIndex()
    const question = QS[questionIndex]
    QS.splice(questionIndex, 1)
    return question;
}