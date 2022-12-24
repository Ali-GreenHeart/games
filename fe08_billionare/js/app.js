let jokerUsed = false
login_btn.addEventListener('click', onLogIn)
jokerBtn.onclick = jokerBtnClick
phoneBtn.onclick = phoneBtnClick
let prizeCount = 1

function randomQuestionGenerator() {

    if (QS.length === 0) {
        showResults()
    }

    console.dir(phoneBtn)
    const question = getRandomQuestion()
    questionElem.textContent = question.question
    fiftyFiftyBtn.onclick = () => fiftyFiftyBtnClick(question)
    relocateIndexesOfArray(question.answers).forEach((answer) => {
        const p = document.createElement('p')
        p.textContent = answer
        p.onclick = (e) => {
            const dogrudurmu = e.target.textContent === question.correctAnswer

            if (dogrudurmu) {
                const lastChild = document.querySelector(`.prizes-container > p:nth-last-child(${prizeCount})`)
                lastChild?.classList.add('takenPrize')
                prizeCount++
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
                    onLose(e)
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