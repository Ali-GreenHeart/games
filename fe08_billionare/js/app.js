let jokerUsed = false
login_btn.addEventListener('click', onLogIn)
jokerBtn.onclick = jokerBtnClick
phoneBtn.onclick = phoneBtnClick
let prizeCount = 0

console.log(QS.length)

createStadium()

function randomQuestionGenerator() {

    if (prizeCount === 15) {
        document.getElementById('claps').play()
        showResults()
        return;
    }

    const question = getRandomQuestion()
    questionElem.textContent = question.question
    fiftyFiftyBtn.onclick = () => fiftyFiftyBtnClick(question)
    relocateIndexesOfArray(question.answers).forEach((answer) => {
        const p = document.createElement('p')
        p.textContent = answer
        p.onclick = (e) => {
            const dogrudurmu = e.target.textContent === question.correctAnswer

            if (dogrudurmu) {
                prizeCount++
                const lastChild = document.querySelector(`.prizes-container > p:nth-last-child(${prizeCount})`)
                lastChild?.classList.add('takenPrize')
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
}
randomQuestionGenerator()





/*
----BUGS!----
1. add login functionality 
    1.1. validation
2. add more questions


*/