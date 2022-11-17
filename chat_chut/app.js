const messageContainer = document.querySelector('.message-container')
const messageInput = document.getElementById('message')
const sendBtn = document.getElementById('sendBtn')
const scrollToTop = document.getElementById('scrollToTop')
const scrollToBottom = document.getElementById('scrollToBottom')
const sentModal = document.getElementById('sentModal')
const dotContainer = document.querySelector('.dot-container')
const dotMenu = document.querySelector('.dot-menu')
const archiveMessages = document.getElementById('archiveMessages')
const archiveMessageContainer = document.querySelector('.archive-message-container')
const closeArchiveContainer = document.getElementById('closeArchiveContainer')

messageInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && e.ctrlKey) {
        sendMessage()
    }
})
sendBtn.addEventListener('click', sendMessage)

scrollToTop.addEventListener('click', () => {
    messageContainer.scrollTo(0, 0)
    document.body.scrollTo(0, 0)
})

scrollToBottom.addEventListener('click', () => {
    messageContainer.scrollTo(0, messageContainer.scrollHeight)
})

dotContainer.addEventListener('click', clickOnDotContainer)
archiveMessages.addEventListener('click', clickOnArchiveMessages)
closeArchiveContainer.addEventListener('click', () => {
    archiveMessageContainer.classList.add('menu-closed')
})

function clickOnArchiveMessages() {
    archiveMessageContainer.classList.remove('menu-closed')
}
function clickOnDotContainer() {
    dotMenu.classList.toggle('menu-closed')
    const closetag = document.createElement('i')
    if (dotMenu.classList.contains('menu-closed')) {
        closetag.className = 'fa-solid fa-ellipsis-vertical'
    } else {
        closetag.className = 'fa-solid fa-xmark'
    }
    dotContainer.replaceChild(closetag, dotContainer.firstElementChild)
}

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
// message archive  (3 dots)