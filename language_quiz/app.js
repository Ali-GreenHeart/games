const root = document.getElementById('root')
const en_az = document.getElementById('en_az')
const az_en = document.getElementById('az_en')
const ru_az = document.getElementById('ru_az')
const az_ru = document.getElementById('az_ru')
const en_ru = document.getElementById('en_ru')
const ru_en = document.getElementById('ru_en')
const point_element = document.getElementById('point')
const left_input = document.getElementById('left_input')
const right_input = document.getElementById('right_input')
const found_words = document.getElementById('found_words')
const words_to_find_element = document.getElementById('words_to_find')
const screen_element = document.getElementById('screen')
const modal_element = document.getElementById('modal')
const modal_point_element = document.getElementById('modal_point')
const refresh_element = document.getElementById('refresh')


const words = [
    {
        "en": "home",
        'az': 'ev',
        'ru': 'dom'
    },
    {
        "en": 'school',
        'az': 'mekteb',
        'ru': 'shkola'
    },
    {
        "en": 'father',
        'az': 'ata',
        'ru': 'papa'
    },
    {
        "en": 'mother',
        'ru': 'mama',
        'az': 'ana'
    },
    {
        "en": 'car',
        'ru': 'mashina',
        'az': 'masin'
    },
    {
        "en": 'driver',
        'ru': 'shofer',
        'az': 'surucu'
    },
    {
        "en": 'laptop',
        'ru': 'noutbuk',
        'az': 'noutbuk'
    },
    {
        "en": 'apple',
        'ru': 'yabloko',
        'az': 'alma'
    },
    {
        "en": 'dog',
        'ru': 'sobaka',
        'az': 'it'
    },
    {
        "en": 'cat',
        'ru': 'koshka',
        'az': 'pishik'
    },
    {
        "en": 'phone',
        'ru': 'tilifon',
        'az': 'telefon'
    },
]

en_az.addEventListener('click', (event) => LanguageChanger(event,"en_az"))
az_en.addEventListener('click', (event) => LanguageChanger(event,"az_en"))
ru_az.addEventListener('click', (event) => LanguageChanger(event,"ru_az"))
az_ru.addEventListener('click', (event) => LanguageChanger(event,"az_ru"))
en_ru.addEventListener('click', (event) => LanguageChanger(event,"en_ru"))
ru_en.addEventListener('click', (event) => LanguageChanger(event,"ru_en"))

let activeLang = ""
let point = 0;
let words_to_find = 10
UpdateTablo()


right_input.addEventListener("keydown", (e) => {
    if (e.code === 'Enter') {
        OnEnter()
    }
})

function OnEnter() {
    const left_val = left_input.value // yabloko
    const right_val = right_input.value // alma
    const word_obj = WordObjFinder(left_val) // {}

    const tapilasiSoz = TapilasiSozFunk(word_obj) // alma

    WordCompare(tapilasiSoz, right_val, left_val)
    words_to_find--;
    right_input.value = ''
    UpdateTablo()
    YoxlaOyunQurtardimi()
}

// add response
function addResponse(className, text) {
    const p = document.createElement('p')
    p.className = className
    p.textContent = text
    found_words.append(p)
}

// language button
function LanguageChanger(event,lang) {
    activeLang = lang
    event.target.classList.add('active')
    const leftPart = lang.split('_')[0]
    left_input.value = randomWord()[leftPart]
    screen_element.style.display = 'block'
    const buttons = document.querySelector('.btn_container').children
    for (const button of buttons) {
        button.setAttribute('disabled', true)
    }
    right_input.focus()
}

// find the word object
function WordObjFinder(left_val) {
    const word_obj = words.find((obj) => {
        const leftPart = activeLang.split('_')[0]
        return obj[leftPart] === left_val
    })

    return word_obj
}

// tapilasi soz

function TapilasiSozFunk(word_obj) {
    const rightPart = activeLang.split('_')[1]
    return word_obj[rightPart]
}

// check if the game is ended or not
function YoxlaOyunQurtardimi() {
    if (words_to_find === 0) {
        gameEnd()
    } else {
        const leftPart = activeLang.split('_')[0]
        left_input.value = randomWord()[leftPart]
    }
}

// update point tablo
function UpdateTablo() {
    point_element.textContent = point
    words_to_find_element.textContent = words_to_find
}

// randomWord
function randomWord() {
    const random_index = parseInt(Math.random() * words.length)
    return words[random_index]

}

// word compare (muqayise)
function WordCompare(tapilasiSoz, right_val, left_val) {
    if (tapilasiSoz === right_val) {
        addResponse('success', `${left_val} - ${right_val}`)
        point += 10
    } else {
        point -= 15
        addResponse('wrong', `${left_val} - ${right_val} - (${tapilasiSoz})`)
    }
}

//  oyun bitdi funksiyasi
function gameEnd() {
    modal_element.style.display = 'block'
    modal_point_element.textContent = point
}

refresh_element.addEventListener('click', () => {
    location.reload()
})