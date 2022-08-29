const root = document.getElementById('root')

let paneData = [
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
]

paneData.forEach((pane) => {
    addNewPane(pane)
})

function addNewPane(pane) {
    const newPane = document.createElement('div')
    newPane.className = 'pane'

    const editButton = document.createElement('button')
    editButton.className = 'remove-button'
    editButton.textContent = '[/edit/]'
    editButton.style.width = '50px'
    editButton.onclick = function () {
        const heading = prompt('heading ne olsun?')
        const description = prompt('description ne olsun?')
        const yeniHedef = paneData.find((pane) => pane.heading.toLowerCase() === heading.toLowerCase())
        const kohneHedef = paneData.find((pane) => pane.heading.toLowerCase() === h1.innerText.toLowerCase())

        if (yeniHedef === undefined) {
            h1.textContent = heading
            p.textContent = description
            kohneHedef.heading = heading
            kohneHedef.description = description
        } else {
            alert('bu var basqasini ele')
        }
        console.log(kohneHedef)
        console.log(yeniHedef)
        console.log(paneData)
    }

    const removeButton = document.createElement('button')
    removeButton.className = 'remove-button'
    removeButton.textContent = '[x]'
    removeButton.onclick = function () {
        newPane.remove()
        paneData = paneData.filter((pane) => pane.heading.toLowerCase() !== h1.innerText.toLowerCase())
        console.log(paneData)
    }

    const h1 = document.createElement('h1')
    h1.textContent = pane.heading

    const p = document.createElement('p')
    p.textContent = pane.description
    newPane.append(editButton, removeButton, h1, p)
    root.append(newPane)
}


const paneHeading = document.getElementById('paneHeading')
const paneDescription = document.getElementById('paneDescription')
const addPane = document.getElementById('addPane')


addPane.onclick = function () {
    if (paneHeading.value.trim() === "") {
        alert('ay qa bosdur, neynirsen?')
    } else {
        const ancaqHeadinglerOlanArray = paneData.map((pane) => pane.heading.toLowerCase())
        const varmi = ancaqHeadinglerOlanArray.includes(paneHeading.value.toLowerCase())

        if (varmi == true) {
            alert('heyyy bu heading var')
        } else {
            const pane = {
                id: paneData.length,
                heading: paneHeading.value,
                description: paneDescription.value
            }
            addNewPane(pane)

            paneData.push(pane)
            paneHeading.value = ""
            paneDescription.value = ""
        }
    }
}
