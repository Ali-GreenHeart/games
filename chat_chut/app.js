const messageContainer = document.querySelector('.message-container')
const messageInput = document.getElementById('message')
const sendBtn = document.getElementById('sendBtn')
const scrollToTop = document.getElementById('scrollToTop')
const scrollToBottom = document.getElementById('scrollToBottom')
const sentModal = document.getElementById('sentModal')
const dotContainer = document.querySelector('.dot-container')
const dotMenu = document.querySelector('.dot-menu')
const archiveMessages = document.getElementById('archiveMessages')
const clearChat = document.getElementById('clearChat')
const archiveMessageContainer = document.querySelector('.archive-message-container')
const closeArchiveContainer = document.getElementById('closeArchiveContainer')
const clearArchiveMessages = document.getElementById('clearArchiveMessages')

const messageArchiveArray = []  // mesaj time  sentByMe 


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
clearChat.addEventListener('click', clearMessagesChat)
closeArchiveContainer.addEventListener('click', () => {
    archiveMessageContainer.classList.add('menu-closed')
})
clearArchiveMessages.addEventListener('click', clearArchiveMessagesFunc)



function clearMessagesChat() {
    if (confirm('ay qa silirsen hamisini?')) {
        const len = messageContainer.children.length
        for (let i = 1; i < len; i++) {
            messageContainer.removeChild(messageContainer.lastElementChild)
        }
    } else {
        alert('diqqetli ol, hormetli ol!')
    }
}
function clearArchiveMessagesFunc() {
    messageArchiveArray.length = 0
    const len = archiveMessageContainer.children.length
    for (let i = 1; i < len; i++) {
        archiveMessageContainer.removeChild(archiveMessageContainer.lastElementChild)
    }
}
function clickOnArchiveMessages() {
    archiveMessageContainer.classList.remove('menu-closed')
    console.log(messageArchiveArray)
    let archivelenmemisMesajlarMassivi = messageArchiveArray.filter((el) => !el.isArchived)
    archivelenmemisMesajlarMassivi.forEach((elem, index, array) => {
        array[index].isArchived = true
        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        h2.textContent = elem.mesaj
        const p = document.createElement('p')
        p.textContent = elem.time
        const hr = document.createElement('hr')
        div.append(h2, p, hr)
        archiveMessageContainer.appendChild(div)
    })
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
    const time = `${vaxt.getHours()}:${vaxt.getMinutes()}`
    messageArchiveArray.push({
        mesaj,
        time,
        sentByMe
    })
    const div = document.createElement('div')
    div.className = sentByMe ? 'sent-message-by-me' : 'sent-message-by-her'

    const p = document.createElement('p')
    p.textContent = mesaj

    const clipboard_container = document.createElement('div')
    clipboard_container.className = 'clipboard_container'

    const span1 = document.createElement('span')
    span1.textContent = '📋'
    span1.style.cursor = 'pointer'
    span1.addEventListener('click', () => {
        navigator.clipboard.writeText(mesaj)
    })

    const span2 = document.createElement('span')
    span2.textContent = time
    clipboard_container.append(span1, span2)

    div.append(p, clipboard_container)
    messageContainer.appendChild(div)
}

// mesaj beyenmek 👍 on doubleClick on message
// remove, edit message
// fix: 13:7 time  