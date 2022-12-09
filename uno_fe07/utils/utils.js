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

function createCard(element, notHidden, random) {
    const card_details = randomCard()
    let symbol = card_details[0]
    let color = card_details[1]
    if (random?.symbol) {
        symbol = random.symbol
        color = random.color
    }
    const card = document.createElement('div')
    card.className = 'card style'
    if (element === opponentElem && notHidden === false) {
        opponentCards.push({ symbol, color })
        card.classList.add('cardHIDDEN')
    } else {
        if (random.symbol) {
            setTimeout(() => {
                card.classList.add('selected')
                card.style.zIndex = ++zIndex
            }, 600);
        }
        card.style.backgroundColor = color
        const span = document.createElement('span')
        span.innerHTML = symbol
        card.appendChild(span)
        card.addEventListener('click', clickOnCard)
    }
    start.addEventListener('click', () => {
        element.appendChild(card)
        setTimeout(() => {
            divStart.style.display = "none"
            card.classList.remove('style')
        }, 750)
    })
}

function createCards(cardCount, element, notHidden, random) {
    for (let i = 0; i < cardCount; i++) {
        createCard(element, notHidden, random)
    }

}

function randomCard() {
    const randomIndex = Math.floor(Math.random() * CARDS.length)
    return CARDS.splice(randomIndex, 1)[0].split('~')
}