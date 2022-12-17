const opponentElem = document.getElementById('opponent')
const playerElem = document.getElementById('player')
const start = document.getElementById('start')
const divStart = document.querySelector('.divStart')
const bazaarBtn = document.getElementById('bazaarBtn')
const BLOCK_SYMBOL = '<i class="fa-sharp fa-solid fa-ban"></i>'

let zIndex = 1
let opponentCards = []
let lastCard = null;

createCards(6, opponentElem)
createCards(6, playerElem)



bazaarBtn.onclick = onGoToBazaar
console.log(opponentCards.map(({ color, symbol }) => color + `~` + symbol + '\n').toString())
function clickOnCard(e) {
    if (opponentCards.length === 0) {
        alert('reqib qazandi')
        return 0
    }

    const color = e.target instanceof HTMLDivElement ? e.target.style.backgroundColor : e.target.parentElement.style.backgroundColor
    const symbol = e.target instanceof HTMLDivElement ? e.target.firstElementChild.innerHTML : e.target.innerHTML

    if (!lastCard) {
        lastCard = { color, symbol }
    }
    playerElem.classList.add('disableUserClick')
    if (color === lastCard.color || symbol === lastCard.symbol) {
        if (opponentCards.length === 0) {
            alert('reqib qazandi')
            return 0
        }
        e.target.classList.add('selected')
        e.target.style.zIndex = ++zIndex

        // opponent gedish!
        if (symbol !== BLOCK_SYMBOL) {
            let lastOpponentCard = opponentGedish({ symbol, color })
            if (!lastOpponentCard) {
                onGoToBazaar()
            }
        } else {
            lastCard = { color, symbol }
        }
        playerElem.classList.remove('disableUserClick')
    } else {
        alert('eee duz karti gel gorum, oyun cixarma!')
    }
    console.log('en son----', opponentCards.map(({ color, symbol }) => color + `~` + symbol).toString())
}

/*
Bugs: 🐛
1. need to tell or click uno! button. 
2. block doesn't work!
3. lastCard has issue
4. disableUserClick has issue!

*/