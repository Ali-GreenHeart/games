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
const emojiList = ["👍", "👎", "💚", "😈", "☀", "😭"]
let lastId = 0
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
    let archivelenmemisMesajlarMassivi = messageArchiveArray.filter((el) => !el.isArchived)
    archivelenmemisMesajlarMassivi.forEach((elem, index, array) => {
        array[index].isArchived = true
        const div = document.createElement('div')
        const h2 = createHTMLElementByAli('h2', elem.mesaj)
        const p = createHTMLElementByAli('p', elem.time)
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
        showFeedback('mesaj gonderildi!')
    } else {
        alert('mesaj yazmamisiniz!')
    }
}

function createMessage(mesaj, sentByMe) {
    const vaxt = new Date()
    const time = `${vaxt.getHours().toString().padStart(2, '0')}:${vaxt.getMinutes().toString().padStart(2, '0')}`
    messageArchiveArray.push({
        mesaj,
        time,
        sentByMe
    })
    const div = document.createElement('div')
    div.className = sentByMe ? 'sent-message-by-me' : 'sent-message-by-her'
    div.id = `elem${lastId}`
    lastId++
    const p = createHTMLElementByAli('p', mesaj)

    const clipboard_container = createHTMLElementByAli('div', undefined, 'clipboard_container')

    const span1 = createHTMLElementByAli('span', '📋')
    span1.style.cursor = 'pointer'
    span1.addEventListener('click', () => {
        clickToCopy(mesaj)
    })


    const span2 = createHTMLElementByAli('span', time)
    clipboard_container.append(span1, span2)

    const reaction_list = createHTMLElementByAli('div', undefined, 'reaction_list')
    emojiList.forEach((emoji) => {
        const btn = createHTMLElementByAli('button', emoji)
        btn.onclick = () => {
            [...div.children].forEach((elem) => {
                if (elem.classList.contains('added_emoji')) {
                    elem.remove()
                }
            })
            const added_emoji = createHTMLElementByAli('div', emoji, 'added_emoji')
            added_emoji.onclick = () => {
                added_emoji.remove()
            }
            reaction_list.style.display = 'none'
            div.appendChild(added_emoji)
        }
        reaction_list.appendChild(btn)
    })
    closeOnOutsideClick(div, () => {
        reaction_list.style.display = 'none'
    })
    div.addEventListener('dblclick', () => {
        reaction_list.style.display = 'flex'
    })
    div.append(reaction_list, p, clipboard_container)
    messageContainer.appendChild(div)
}
function clickToCopy(mesaj) {
    navigator.clipboard.writeText(mesaj)
    showFeedback('kopyalandi!')
}

function showFeedback(mesaj) {
    sentModal.textContent = mesaj
    sentModal.style.display = 'block'
    setTimeout(() => {
        sentModal.textContent = ''
        sentModal.style.display = 'none'
    }, 700);
}

function closeOnOutsideClick(toWhere, callback) {
    window.addEventListener('click', (e) => {
        if (!e.path.includes(toWhere)) {
            callback()
        }
    })
}

function createHTMLElementByAli(tagName, textContent, className) {
    const el = document.createElement(tagName)
    if (textContent) {
        el.textContent = textContent
    }
    el.classList.add(className)
    return el;
}


// + mesaj beyenmek 👍 on doubleClick on message
// + feature: show on copy!
// remove, edit message
// + fix: 13:7 time  