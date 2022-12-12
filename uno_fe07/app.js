const opponentElem = document.getElementById('opponent')
const playerElem = document.getElementById('player')
const start = document.getElementById('start')
const divStart = document.querySelector('.divStart')
const bazaarBtn = document.getElementById('bazaarBtn')


let zIndex = 1
let opponentCards = []
let lastCard = null;

createCards(6, opponentElem)
createCards(6, playerElem)



bazaarBtn.onclick = onGoToBazaar
function clickOnCard(e) {
    const colorMe = e.target.style.backgroundColor
    const simvolMe = e.target.firstElementChild.innerHTML
    if (!lastCard) {
        lastCard = { color: colorMe, symbol: simvolMe }
    }
    playerElem.classList.add('disableUserClick')
    if (colorMe === lastCard.color || simvolMe === lastCard.symbol) {
        console.log(colorMe, simvolMe)
        e.target.classList.add('selected')
        e.target.style.zIndex = ++zIndex

        // opponent gedish!
        setTimeout(() => {
            const foundObj = opponentCards.find(({ symbol, color }) => simvolMe === symbol || colorMe === color)
            if (foundObj) {
                const index = opponentCards.indexOf(foundObj)
                opponentCards.splice(index, 1)
                const newCard = document.createElement('div')
                newCard.className = 'card style selected'
                newCard.style.backgroundColor = foundObj.color
                const span = document.createElement('span')
                span.innerHTML = foundObj.symbol
                lastCard = { ...foundObj }
                newCard.appendChild(span)
                newCard.style.zIndex = ++zIndex
                playerElem.append(newCard)
                opponentElem.firstElementChild.remove()
            } else {
                lastCard = { color: colorMe, symbol: simvolMe }
                let newCard = document.createElement('div')
                newCard.className = 'card cardHIDDEN'
                opponentElem.appendChild(newCard)
                const card_details = randomCard()
                const symbol = card_details[0]
                const color = card_details[1]
                opponentCards.push({ symbol, color })
            }
            playerElem.classList.remove('disableUserClick')
        }, 750);
    } else {
        alert('eee duz karti gel gorum, oyun cixarma!')
    }
}

