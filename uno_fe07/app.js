const opponentElem = document.getElementById('opponent')
const playerElem = document.getElementById('player')

const CARDS = [
    '1~red',
    '2~red',
    '3~red',
    '4~red',
    '5~red',
    '1~green',
    '2~green',
    '3~green',
    '4~green',
    '5~green',
    '1~aquamarine',
    '2~aquamarine',
    '3~aquamarine',
    '4~aquamarine',
    '5~aquamarine',
    '1~orange',
    '2~orange',
    '3~orange',
    '4~orange',
    '5~orange',
    '1~gray',
    '2~gray',
    '3~gray',
    '4~gray',
    '5~gray',
    '<i class="fa-sharp fa-solid fa-ban"></i>~red',
    '<i class="fa-sharp fa-solid fa-ban"></i>~green',
    '<i class="fa-sharp fa-solid fa-ban"></i>~aquamarine',
    '<i class="fa-sharp fa-solid fa-ban"></i>~orange',
    '<i class="fa-sharp fa-solid fa-ban"></i>~gray',
]
createCards(6, opponentElem)
createCards(6, playerElem)


function createCards(cardCount, element) {
    for (let i = 0; i < cardCount; i++) {
        const card_details = randomCard()
        const symbol = card_details[0]
        const color = card_details[1]

        const card = document.createElement('div')
        card.style.backgroundColor = color
        card.className = 'card'
        const span = document.createElement('span')
        span.innerHTML = symbol
        card.appendChild(span)
        element.appendChild(card)
    }
}

function randomCard() {
    const randomIndex = Math.floor(Math.random() * CARDS.length)
    return CARDS.splice(randomIndex, 1)[0].split('~')
}

