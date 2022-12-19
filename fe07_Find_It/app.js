const colorMode = document.getElementById('colorMode')
const colorModeChangerBtn = document.getElementById('colorModeChangerBtn')
const randomWord = document.getElementById('randomWord')
const enteredWordInput = document.getElementById('enteredWordInput')

enteredWordInput.onkeydown = (event) => {
    if (event.key === 'Enter') {
        checkWord()
    }
}

function checkWord() {
    const enteredWord = enteredWordInput.value;
    console.log(enteredWord)

    enteredWordInput.value = "" // reset input value
}


