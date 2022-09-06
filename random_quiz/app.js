const root = document.getElementById('root')

const questions = [
    {
        text: "Hitler ne vaxt oldurulub?",
        cavablar: [
            {
                text: '1945',
                isTrue: true
            },
            {
                text: 'Hele yasayir',
            },
            {
                text: '2015'
            },
            {
                text: 'dunen'
            },
        ]
    },
    {
        'text': "Azerbaycanin paytaxti hansi seherdir?",
        cavablar: [
            {
                text: 'Africa',
            },
            {
                text: 'Lenkeran',
            },
            {
                text: 'Baki',
                isTrue: true
            },
            {
                text: 'Gence'
            },
        ]
    },
    {
        'text': "Kola ne rengdedir?",
        cavablar: [
            {
                text: 'sari',
            },
            {
                text: 'qirmizi',
            },
            {
                text: 'qara',
                isTrue: true
            },
            {
                text: 'goy'
            },
        ]
    },
    {
        'text': "En boyuk gol hansi goldur?",
        cavablar: [
            {
                text: 'Xezer',
                isTrue: true
            },
            {
                text: 'Baykal',
            },
            {
                text: 'Araliq',
            },
            {
                text: 'Qara'
            },
        ]
    },
]

let sualNomresi = 0;



YeniSual(questions[sualNomresi])


// recursion
function YeniSual(object) {
    const { text, cavablar } = object
    const ekran = CreateElement("div", "ekran")

    const sual = CreateElement("div", 'sual', text)

    ekran.appendChild(sual)

    const ol = CreateElement('ol', 'cavab')

    cavablar.forEach((cavab) => {
        const li = CreateElement("li", "", cavab.text)
        li.type = 'a'
        li.addEventListener("click", () => {
            li.classList.add(cavab.isTrue ? 'dogruCavab' : 'yanlisCavab')
            ol.classList.add('NoPointerEvents')
            setTimeout(() => {
                sualNomresi === questions.length - 1
                    ?
                    GameOver()
                    :
                    GoNext()
            }, 500);
        })
        ol.appendChild(li)
    })

    ekran.appendChild(ol)

    const skipBtn = CreateElement('button', "skipBtn", 'skip')
    skipBtn.addEventListener('click', () => GoNext())
    ekran.appendChild(skipBtn)

    root.prepend(ekran)
}

function GameOver() {
    root.remove()
    alert('Oyun bitdi')
}

function GoNext() {
    ekran.remove()
    sualNomresi++;
    YeniSual(questions[sualNomresi])
}

function CreateElement(tagName, classAdi, text) {
    const elem = document.createElement(tagName)
    if (classAdi) {
        elem.classList.add(classAdi)
    }
    if (text) {
        elem.textContent = text
    }
    return elem;
}