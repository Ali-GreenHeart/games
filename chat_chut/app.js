const messageContainer = document.querySelector('.message-container')
const messageInput = document.getElementById('message')
const sendBtn = document.getElementById('sendBtn')
const scrollToTop = document.getElementById('scrollToTop')
const scrollToBottom = document.getElementById('scrollToBottom')
const sentModal = document.getElementById('sentModal')
const valueModal = document.getElementById('valueModal')
const dotContainer = document.querySelector('.dot-container')
const dotMenu = document.querySelector('.dot-menu')
const archiveMessages = document.getElementById('archiveMessages')
const clearChat = document.getElementById('clearChat')
const archiveMessageContainer = document.querySelector('.archive-message-container')
const closeArchiveContainer = document.getElementById('closeArchiveContainer')
const clearArchiveMessages = document.getElementById('clearArchiveMessages')

const messageArchiveArray = []  // mesaj time  sentByMe 
const emojiList = ["👍", "👎", "💚", "😈", "☀", "😭"]
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
archiveMessages.addEventListener('click', () => {
    clickOnArchiveMessages(false)
})
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
function clickOnArchiveMessages(closeMenu) {
    if (closeMenu) {
        archiveMessageContainer.classList.add('menu-closed')
    } else {
        archiveMessageContainer.classList.remove('menu-closed')
    }
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
    const messageElement = document.createElement('div')
    messageElement.className = sentByMe ? 'sent-message-by-me' : 'sent-message-by-her'

    const messageContent = createHTMLElementByAli('p', mesaj)
    const clipboard_container = createHTMLElementByAli('div', undefined, 'clipboard_container')

    const messageBtnContainer = createHTMLElementByAli('div', undefined, 'messageBtnContainer')

    const copyBtn = createHTMLElementByAli('span', '📋')
    copyBtn.style.cursor = 'pointer'
    copyBtn.addEventListener('click', (e) => {
        const txt = e.path[3].children[1].textContent
        clickToCopy(txt)
    })
    messageBtnContainer.appendChild(copyBtn)

    if (messageElement.classList.contains('sent-message-by-me')) {
        const editBtn = createHTMLElementByAli('span', '🖊')
        editBtn.style.cursor = 'pointer'
        editBtn.addEventListener('click', (e) => {
            valueModal.style.display = 'flex'
            const input = document.querySelector('#valueModal input')
            input.placeholder = 'edit message'
            input.value = e.path[3].children[1].textContent
            const submitBtn = document.getElementById('valueModal_submit')
            submitBtn.onclick = () => {
                let newMessage = input.value
                input.value = null
                if (newMessage.trim()) {
                    e.target.parentElement.parentElement.previousElementSibling.textContent = newMessage
                    const vaxt = new Date()
                    const time = `${vaxt.getHours().toString().padStart(2, '0')}:${vaxt.getMinutes().toString().padStart(2, '0')}`
                    messageArchiveArray.push({
                        mesaj: newMessage,
                        time,
                        sentByMe: true
                    })
                    clickOnArchiveMessages(true)
                }else{
                    alert('mesaj yazmali idin...')
                }
                valueModal.style.display = 'none'
            }
        })
        messageBtnContainer.appendChild(editBtn)
    }
    const removeBtn = createHTMLElementByAli('span', '✖')
    removeBtn.style.cursor = 'pointer'
    removeBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.parentElement.remove()
    })
    messageBtnContainer.appendChild(removeBtn)

    const timeContent = createHTMLElementByAli('span', time)
    clipboard_container.append(messageBtnContainer, timeContent)

    const reaction_list = createHTMLElementByAli('div', undefined, 'reaction_list')
    emojiList.forEach((emoji) => {
        const btn = createHTMLElementByAli('button', emoji)
        btn.onclick = () => {
            [...messageElement.children].forEach((elem) => {
                if (elem.classList.contains('added_emoji')) {
                    elem.remove()
                }
            })
            const added_emoji = createHTMLElementByAli('div', emoji, 'added_emoji')
            added_emoji.onclick = () => {
                added_emoji.remove()
            }
            reaction_list.style.display = 'none'
            messageElement.appendChild(added_emoji)
        }
        reaction_list.appendChild(btn)
    })
    closeOnOutsideClick(messageElement, () => {
        reaction_list.style.display = 'none'
    })
    messageElement.addEventListener('dblclick', () => {
        reaction_list.style.display = 'flex'
    })
    messageElement.append(reaction_list, messageContent, clipboard_container)
    messageContainer.appendChild(messageElement)
}

function clickToCopy(text) {
    navigator.clipboard.writeText(text)
    showFeedback('kopyalandi!')
}

function showFeedback(mesaj) {
    sentModal.style.display = 'block'
    sentModal.textContent = mesaj
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
    if (className) {
        el.classList.add(className)
    }
    return el;
}
function hideValueModal() {
    valueModal.style.display = 'none'
}