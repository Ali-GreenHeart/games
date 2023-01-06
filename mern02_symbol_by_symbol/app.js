const suallar = [
    {
        sual: 'En boyuk gol hansidir?',
        cavab: 'xezer'
    },
    {
        sual: 'Sen harda yasayirsan?',
        cavab: 'yer'
    },
    {
        sual: 'Ali muellime hardan elcatanliq etmek olar?',
        cavab: 'github'
    },
    {
        sual: 'Ali muellime nece muraciet etmek olar?',
        cavab: 'ali'
    },
    {
        sual: 'Nicatin adi nedir?',
        cavab: 'aybeniz'
    }
]

const questionElem = document.getElementById('question')
const wordContainerElem = document.getElementById('word_container')
const symbolsContainerElem = document.getElementById('symbols_container')



let cavab = ''
questionElem.textContent = suallar[1].sual
let cavabUzunluq = suallar[1].cavab.length

for (let i = 0; i < cavabUzunluq; i++) {
    const newDiv = document.createElement('div')
    newDiv.id = `div${i}`
    wordContainerElem.appendChild(newDiv)
}

let lastIndex = 0

function alphabetClick(symbol) {
    document.getElementById(`div${lastIndex}`).textContent = symbol
    lastIndex++
    console.log(symbol)
}