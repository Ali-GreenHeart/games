const messageContainer = document.querySelector('.message-container')
const messageInput = document.getElementById('message')
const sendBtn = document.getElementById('sendBtn')
const scrollToTop = document.getElementById('scrollToTop')
const scrollToBottom = document.getElementById('scrollToBottom')
const sentModal = document.getElementById('sentModal')


messageInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && e.ctrlKey) {
        sendMessage()
    }
})
sendBtn.addEventListener('click', sendMessage)

scrollToTop.addEventListener('click', () => {
    messageContainer.scrollTo(0, 0)
})

scrollToBottom.addEventListener('click', () => {
    messageContainer.scrollTo(0, messageContainer.scrollHeight)
})


function sendMessage() {
    const mesaj = messageInput.value.trim()
    if (!!mesaj) {  // !!truthy -> true, !!falsy -> false
        createMessage(mesaj, true)
        let herMessage = mesaj.split('').reverse().join('')
        createMessage(herMessage, false)

        messageInput.value = ''
        setTimeout(() => {
            messageContainer.scrollTo(0, messageContainer.scrollHeight)
        }, 1);
        sentModal.style.display = 'block'
        setTimeout(() => {
            sentModal.style.display = 'none'
        }, 700);
    } else {
        alert('mesaj yazmamisiniz!')
    }
}

function createMessage(mesaj, sentByMe) {
    const vaxt = new Date()

    const div = document.createElement('div')
    div.className = sentByMe ? 'sent-message-by-me' : 'sent-message-by-her'

    const p = document.createElement('p')
    p.textContent = mesaj

    const span = document.createElement('span')
    span.textContent = `${vaxt.getHours()}:${vaxt.getMinutes()}`

    div.append(p, span)
    messageContainer.appendChild(div)
}


// remove, edit message
// message archive