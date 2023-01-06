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
const clapsAudioElem = document.getElementById('claps')
const failAudioElem = document.getElementById('fail')


questionElem.textContent = suallar[1].sual
let cavabUzunluq = suallar[1].cavab.length

for (let i = 0; i < cavabUzunluq; i++) {
    const newDiv = document.createElement('div')
    newDiv.id = `div${i}`
    wordContainerElem.appendChild(newDiv)
}

let cavab = ''
let lastIndex = 0

function alphabetClick(symbol) {
    document.getElementById(`div${lastIndex}`).textContent = symbol
    cavab = cavab.concat(symbol)
    lastIndex++
    setTimeout(() => {
        if (lastIndex === cavabUzunluq) {
            alphabetClick = () => { }
            symbolsContainerElem.classList.add('disable_all_buttons')
            if (cavab.toLowerCase() === suallar[1].cavab) {
                console.log('duz tapdin!')
                clapsAudioElem.play()
            } else {
                failAudioElem.play()
                console.log('yanlisdi')
            }
        }
    }, 200);
    console.log(symbol)
}
/*
    +1. dogru tapanda alqis sesleri,sehv tapanda, uduzmalidir (benq benq beeeenq), 
    2. reng deyishsin, yanlis olanda qirmizi, dogru -> yasil
    3. novbeti sual kecmir
    4. ve xallari gostermelidir
    5. herfleri silmek. sagda 1-1 silmek buttonu
    6. point system (xal sistemi)
    7. 
*/