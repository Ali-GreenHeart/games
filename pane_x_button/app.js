const root = document.getElementById('root')

const paneData = [
    {
        id: 1,
        heading: 'Lorem',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 2,
        heading: 'Dorem',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 3,
        heading: 'Sorem',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 4,
        heading: 'Norem',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 5,
        heading: 'Korem',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
    {
        id: 6,
        heading: 'Yorem',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`
    },
]



const createElement = (tagName, textContent, className, id) => {
    const element = document.createElement(tagName)
    // textContent && (element.textContent = textContent)
    // id && (element.id = id)
    // className && (element.className = className)
    if (textContent) {
        element.textContent = textContent
    }
    if (id) {
        element.id = id
    }
    if (className) {
        element.className = className
    }
    return element;
}

paneData.forEach(({ id, heading, description }) => { // destructure
    const pane = createElement('div', "", 'pane', `pane${id}`)

    const xBtn = createElement('div', '[x]', 'remove-button','')
    xBtn.onclick = () => pane.remove()

    const h3 = createElement('h3', heading, "heading",'')
    const p = createElement('p', description, 'description','')

    pane.append(xBtn, h3, p)
    root.append(pane)
})
