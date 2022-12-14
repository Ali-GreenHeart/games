

function onGoToBazaar() {
    const card = createCard(playerElem)
    card.classList.remove('style')
    playerElem.appendChild(card)
}

function createCard(element) {
    const card_details = randomCard()
    let symbol = card_details[0]
    let color = card_details[1]
    const card = document.createElement('div')
    card.className = 'card style'

    if (element === opponentElem) {
        opponentCards.push({ symbol, color })
        card.classList.add('cardHIDDEN')
    } else {
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
        setTimeout(() => {
            bazaarBtn.style.display='block'
        }, 2000);
    })
    return card;
}

function createCards(cardCount, element) {
    for (let i = 0; i < cardCount; i++) {
        createCard(element)
    }
}

function randomCard() {
    const randomIndex = Math.floor(Math.random() * CARDS.length)
    return CARDS.splice(randomIndex, 1)[0].split('~')
}