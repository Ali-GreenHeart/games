const colorMode = document.getElementById('colorMode')
const colorModeChangerBtn = document.getElementById('colorModeChangerBtn')
const randomWordElem = document.getElementById('randomWordElem')
const enteredWordInput = document.getElementById('enteredWordInput')
const results = document.querySelector('.results')

randomWordElem.textContent = WORDS[randomIndexCreator()].en

enteredWordInput.onkeydown = (event) => {
    if (event.key === 'Enter') {
        checkWord()
    }
}
colorModeChangerBtn.onclick = changeColorMode // dark mode -  light mode

function checkWord() {
    const enteredWord = enteredWordInput.value;
    const azeVersion = WORDS.find((word) => word.en === randomWordElem.textContent).az
    const azeVersionIndex = WORDS.findIndex((word) => word.en === randomWordElem.textContent)

    const p = document.createElement('p')
    p.innerHTML = `<span>${randomWordElem.textContent}</span>`
    if (enteredWord === azeVersion) {
        p.innerHTML += ` - <span> ${azeVersion} </span>`
        WORDS.splice(azeVersionIndex, 1)
    } else {
        p.innerHTML += ` - <span> <strike> ${enteredWord}</strike> (${azeVersion})</span>`
    }
    results.appendChild(p)
    enteredWordInput.value = "" // reset input value
    randomWordElem.textContent = WORDS[randomIndexCreator()].en
    results.scrollTo({
        top: results.scrollHeight
    })
}



function changeColorMode() {
    const isDarkMode = colorMode.classList.contains('darkMode')
    colorModeChangerBtn.textContent = isDarkMode ? '🌝' : '🌞'
    colorMode.classList.toggle('darkMode')
}

function randomIndexCreator() {
    const randomIndex = Math.floor(Math.random() * WORDS.length)
    return randomIndex;
}


// 1. validation (can't enter space)