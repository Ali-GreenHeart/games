const suallar = [
    {
        sual: 'En boyuk gol hansidir?',
        cavab: 'xezer'
    },
    {
        sual: 'Sen harda yasayirsan?',
        cavab: 'yer'
    },
    // {
    //     sual: 'Ali muellime hardan elcatanliq etmek olar?',
    //     cavab: 'github'
    // },
    // {
    //     sual: 'Ali muellime nece muraciet etmek olar?',
    //     cavab: 'ali'
    // },
    // {
    //     sual: 'Nicatin adi nedir?',
    //     cavab: 'aybeniz'
    // }
]

const questionElem = document.getElementById('question')
const wordContainerElem = document.getElementById('word_container')
const symbolsContainerElem = document.getElementById('symbols_container')
const clapsAudioElem = document.getElementById('claps')
const failAudioElem = document.getElementById('fail')

let sualNo = 0
let cavabUzunluq = ''

let cavab = ''
let lastIndex = 0
let xal = 0

writeQuestion()

function goNext() {
    sualNo++
    writeQuestion()
}
window.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        clearLastSymbol()
    }
    else if (e.key >= 'a' && e.key <= 'z') {
        alphabetClick(e.key.toUpperCase())
    } else if (e.key === 'Enter' && lastIndex === cavabUzunluq) {
        goNext()
    }
})
function reset() {
    cavab = ''
    lastIndex = 0
    questionElem.textContent = ''
    clapsAudioElem.pause()
    let childLength = wordContainerElem.children.length
    for (let i = 0; i < childLength; i++) {
        wordContainerElem.removeChild(wordContainerElem.firstChild)
    }
    symbolsContainerElem.classList.remove('disable_all_buttons')
    wordContainerElem.style.backgroundColor = 'unset'
}

function writeQuestion() {
    if (sualNo > suallar.length - 1) {
        onFinish(true)
        return;
    }
    reset()
    questionElem.textContent = suallar[sualNo].sual
    cavabUzunluq = suallar[sualNo].cavab.length
    for (let i = 0; i < cavabUzunluq; i++) {
        const newDiv = document.createElement('div')
        newDiv.id = `div${i}`
        wordContainerElem.appendChild(newDiv)
    }
}

function alphabetClick(symbol) {
    document.getElementById(`div${lastIndex}`).textContent = symbol
    cavab = cavab.concat(symbol)
    lastIndex++
    if (lastIndex === cavabUzunluq) {
        symbolsContainerElem.classList.add('disable_all_buttons')
        if (cavab.toLowerCase() === suallar[sualNo].cavab) {
            console.log('duz tapdin!')
            xal += 10
            document.getElementById('point').textContent = xal
            wordContainerElem.style.backgroundColor = 'green'
            clapsAudioElem.play()
        } else {
            wordContainerElem.style.backgroundColor = 'red'
            failAudioElem.play()
            console.log('yanlisdi')
            onFinish(false)
        }
    }
}


function onFinish(qazandimi) {
    document.querySelector('.container').style.display = 'none'
    document.querySelector('#finishPage > h1 > span').textContent = `Siz ${qazandimi ? 'qazandiniz' : 'uduzdunuz'}`
    document.getElementById('finishPage').style.display = 'block'
    document.getElementById('max_point').textContent = xal
}

function clearLastSymbol() {
    lastIndex = lastIndex - 1
    let lastDiv = document.getElementById(`div${lastIndex}`)
    lastDiv.textContent = ''
    cavab = cavab.slice(0, cavab.length - 1)
}

/*
    +1. dogru tapanda alqis sesleri,sehv tapanda, uduzmalidir (benq benq beeeenq), 
    +2. reng deyishsin, yanlis olanda qirmizi, dogru -> yasil
    +3. novbeti sual kecmir
    +4. ve xallari gostermelidir
    +5. herfleri silmek. sagda 1-1 silmek buttonu
    +6. point system (xal sistemi)
    +7. klaviatura ile yazmaq
    +8. win,fail part
    +9. next on enter
*/