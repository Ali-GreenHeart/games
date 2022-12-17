function onGoToBazaar() {
    const card = createCard(playerElem)
    card.classList.remove('style')
    playerElem.appendChild(card)
}
setTimeout(() => {
    bazaarBtn.style.display = 'block'
}, 2000);
function createCard(element,) {
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
    })
    return card;
}

function opponentGedish({ symbol, color }) {

    let foundCard = opponentCards.find((card) => card.symbol === BLOCK_SYMBOL || card.color === color)
    if (!foundCard) {
        foundCard = opponentCards.find((card) => card.symbol === symbol || card.color === color)
    }
    if (foundCard) {
        const index = opponentCards.indexOf(foundCard)
        opponentCards.splice(index, 1)
        const newCard = document.createElement('div')
        newCard.className = 'card style selected'
        newCard.style.backgroundColor = foundCard.color
        const span = document.createElement('span')
        span.innerHTML = foundCard.symbol
        lastCard = { ...foundCard }
        newCard.appendChild(span)
        newCard.style.zIndex = ++zIndex
        playerElem.append(newCard)
        opponentElem.firstElementChild.remove()
    } else {
        lastCard = { color, symbol }
        let newCard = document.createElement('div')
        newCard.className = 'card cardHIDDEN'
        opponentElem.appendChild(newCard)
        const card_details = randomCard()
        const symbol_ = card_details[0]
        const color_ = card_details[1]
        opponentCards.push({ symbol: symbol_, color: color_ })
    }
    return foundCard || {};
}


function createCards(cardCount, element,) {
    for (let i = 0; i < cardCount; i++) {
        createCard(element,)
    }
}

function randomCard() {
    const randomIndex = Math.floor(Math.random() * CARDS.length)
    return CARDS.splice(randomIndex, 1)[0].split('~')
}