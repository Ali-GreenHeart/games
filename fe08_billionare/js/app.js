let jokerUsed = false
login_btn.addEventListener('click', onLogIn)
jokerBtn.onclick = jokerBtnClick

function randomQuestionGenerator() {
    const question = getRandomQuestion()
    questionElem.textContent = question.question
    fiftyFiftyBtn.onclick = () => fiftyFiftyBtnClick(question)
    relocateIndexesOfArray(question.answers).forEach((answer) => {
        const p = document.createElement('p')
        p.textContent = answer
        p.onclick = (e) => {
            const dogrudurmu = e.target.textContent === question.correctAnswer

            if (dogrudurmu) {
                e.target.classList.add('correctAnswer')
                answerContainer.classList.add('disabledAnswersContainer')
                setTimeout(() => {
                    answerContainer.removeChild(answerContainer.firstElementChild)
                    answerContainer.removeChild(answerContainer.firstElementChild)
                    answerContainer.removeChild(answerContainer.firstElementChild)
                    answerContainer.removeChild(answerContainer.firstElementChild)
                    randomQuestionGenerator()
                    answerContainer.classList.remove('disabledAnswersContainer')
                }, 750);
            } else {
                if (jokerBtn.disabled && !jokerUsed) {
                    e.target.style.visibility = 'hidden'
                    jokerUsed = true
                } else {
                    e.target.classList.add('wrongAnswer')
                    alert('uduzdun')
                    fiftyFiftyBtn.disabled = 'true'
                    jokerBtn.disabled = 'true'
                    phoneBtn.disabled = 'true'
                    answerContainer.classList.add('disabledAnswersContainer')
                }
            }
        }
        answerContainer.appendChild(p)
    })
    console.log(question)
}
randomQuestionGenerator()




/*
----BUGS!----
1. Cavab verenden sonra komekci buttonlar disabled olmalidir.

*/