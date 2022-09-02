const root = document.getElementById('root')


const gameType = prompt('text or image?', 'image') // text image

let words = [
    {
        id: '1',
        text: 'ali',
    },
    {
        id: '2',
        text: 'ali',
    },
    {
        id: '3',
        text: 'rufan',
    },
    {
        id: '4',
        text: 'rufan',
    },
    {
        id: '5',
        text: 'bali',
    },
    {
        id: '6',
        text: 'bali',
    },
    {
        id: '7',
        text: 'jali',
    },
    {
        id: '8',
        text: 'jali',
    },
]

let images = [
    {
        id: '1',
        src: 'cat1',
    },
    {
        id: '2',
        src: 'cat2',
    },
    {
        id: '3',
        src: 'cat1',
    },
    {
        id: '4',
        src: 'cat2',
    },
    {
        id: '5',
        src: 'cat3',
    },
    {
        id: '6',
        src: 'cat3',
    },
    {
        id: '7',
        src: 'cat4',
    },
    {
        id: '8',
        src: 'cat4',
    },
]

const pair = []

for (let i = 0; i < 8; i++) {
    const card = cardAppend()

    card.addEventListener('click', ({ target }) => {
        if (pair.length < 2) {
            pair.push(target)
            if (gameType === 'text') {
                target.style.color = 'black'
            } else if (gameType === 'image') {
                target.firstElementChild.hidden = false
            }
        }
        if (pair.length === 2) {
            const [firstElement, secondElement] = pair;
            if (gameType === 'text') {
                if (firstElement.textContent === secondElement.textContent) {
                    Found(firstElement, secondElement, true)
                } else {
                    Found(firstElement, secondElement, false)
                }
            } else if (gameType === 'image') {
                if (firstElement.firstElementChild.src === secondElement.firstElementChild.src) {
                    Found(firstElement, secondElement, true)
                } else {
                    firstElement.style.backgroundColor = 'red'
                    secondElement.style.backgroundColor = 'red'
                    Found(firstElement, secondElement, false)
                }
            }
            pair.length = 0
        }
    })

}

function Found(firstElement, secondElement, didFindCorrect) {
    setTimeout(() => {
        if (gameType === 'text') {
            firstElement.style.color = didFindCorrect ? 'green' : 'transparent' // ternary
            secondElement.style.color = didFindCorrect ? 'green' : 'transparent'
        } else if (gameType === 'image') {
            firstElement.firstElementChild.hidden = !didFindCorrect //didFind ? false : true
            firstElement.style.backgroundColor = didFindCorrect ? 'green' : 'white'
            secondElement.firstElementChild.hidden = !didFindCorrect //didFind ? false : true
            secondElement.style.backgroundColor = didFindCorrect ? 'green' : 'white'
        }
        firstElement.disabled = didFindCorrect
        secondElement.disabled = didFindCorrect
    }, 300);
}


function cardAppend() {
    const card = document.createElement('button')
    card.className = 'card'
    if (gameType === 'image') {
        const img = document.createElement('img')
        const { src, id } = images[randomIndex()]
        img.src = `./img/${src}.jpg`
        img.hidden = true
        card.appendChild(img)
        images = images.filter((elem) => elem.id !== id)
    } else if (gameType === 'text') {
        card.style.color = 'transparent'
        const { text, id } = words[randomIndex()]
        words = words.filter((elem) => elem.id !== id)
        card.textContent = text
    }
    root.appendChild(card)
    return card;
}

function randomIndex() {
    if (gameType === 'text') {
        return parseInt(Math.random() * words.length)
    } else if (gameType === 'image') {
        return parseInt(Math.random() * images.length)
    }
}