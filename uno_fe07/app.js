const opponentElem = document.getElementById('opponent')
const playerElem = document.getElementById('player')
const start = document.getElementById('start')
const divStart = document.querySelector('.divStart')
let zIndex = 1
let opponentCards = []


createCards(6, opponentElem, false, true)
createCards(6, playerElem, true, true)




function clickOnCard(e) {
    const colorMe = e.target.style.backgroundColor
    const simvolMe = e.target.firstElementChild.innerHTML
    console.log(colorMe, simvolMe)
    e.target.classList.add('selected')
    e.target.style.zIndex = ++zIndex

    const foundObj = opponentCards.find(({ symbol, color }) => simvolMe === symbol || colorMe === color)
    if (foundObj) {
        const index = opponentCards.indexOf(foundObj)
        opponentCards.splice(index, 1)
        createCard(opponentElem, true, foundObj)
        opponentElem.firstElementChild.remove()
    } else {
        let newCard = document.createElement('div')
        newCard.className = 'card cardHIDDEN'
        opponentElem.appendChild(newCard)
        const card_details = randomCard()
        const symbol = card_details[0]
        const color = card_details[1]
        opponentCards.push({ symbol, color })
    }
    console.log(foundObj)

}