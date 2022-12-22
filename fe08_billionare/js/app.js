login_btn.addEventListener('click', onLogIn)

function randomQuestionGenerator() {
    const question = getRandomQuestion()
    questionElem.textContent = question.question
    question.answers.forEach((answer) => {
        const p = document.createElement('p')
        p.textContent = answer
        p.onclick = (e) => {
            if (e.target.textContent === question.correctAnswer) {
                console.log('dogru cavab')
                e.target.classList.add('correctAnswer')
            }else{
                e.target.classList.add('wrongAnswer')
            }
            answerContainer.classList.add('disabledAnswersContainer')
        }
        answerContainer.appendChild(p)
    })
    console.log(question)
}
randomQuestionGenerator()
