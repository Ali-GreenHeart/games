const colorMode = document.getElementById('colorMode')
const colorModeChangerBtn = document.getElementById('colorModeChangerBtn')
const randomWord = document.getElementById('randomWord')
const enteredWordInput = document.getElementById('enteredWordInput')

enteredWordInput.onkeydown = (event) => {
    if (event.key === 'Enter') {
        checkWord()
    }
}

colorModeChangerBtn.onclick = changeColorMode // dark mode -  light mode

function changeColorMode() {
    const isDarkMode = colorMode.classList.contains('darkMode')
    colorModeChangerBtn.textContent = isDarkMode ? '🌝' : '🌞'
    colorMode.classList.toggle('darkMode')
}

function checkWord() {
    const enteredWord = enteredWordInput.value;
    console.log(enteredWord)

    enteredWordInput.value = "" // reset input value
}


