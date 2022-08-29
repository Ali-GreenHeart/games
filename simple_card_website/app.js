const users = [
    {
        id: 1,
        username: "Ali",
        img: 'ali',
        job: 'developer'
    },
    {
        id: 2,
        username: 'bedbext_developer',
        img: 'bedbext_developer',
        job: 'test2',
    },
    {
        id: 3,
        username: 'duman',
        img: 'duman',
        job: 'test3',
    },
    {
        id: 4,
        username: 'js_oyrenen_shexs',
        img: 'js_oyrenen_shexs',
        job: 'test4',
    },
    {
        id: 5,
        username: 'qarli_daglar',
        img: 'qarli_daglar',
        job: 'test5',
    },
    {
        id: 6,
        username: 'qoca_cinar',
        img: 'qoca_cinar',
        job: 'test6',
    },
    {
        id: 7,
        username: 'visselka',
        img: 'visselka',
        job: 'test7',
    },
    {
        id: 8,
        username: 'novxani',
        img: 'novxani',
        job: 'test8',
    }
]
const root = document.getElementById('root')

const cardContainer = document.createElement('div')
cardContainer.className = "card_container"

users.forEach((user) => {
    const newCard = document.createElement('div')
    newCard.className = 'card'
    newCard.id = 'card' + user.id

    const newImg = document.createElement('img')
    newImg.src = `./img/${user.img}.jpg`

    const newH2 = document.createElement('h2')
    newH2.innerText = user.username

    const newDescription = document.createElement('p')
    newDescription.innerText = user.job

    newCard.append(newImg, newH2, newDescription)
    cardContainer.append(newCard)
})


root.appendChild(cardContainer)