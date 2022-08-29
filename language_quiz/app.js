const root = document.getElementById('root')
const en_az = document.getElementById('en_az')
const az_en = document.getElementById('az_en')
const point_element = document.getElementById('point')
const left_input = document.getElementById('left_input')
const right_input = document.getElementById('right_input')
const found_words = document.getElementById('found_words')
const words_to_find_element = document.getElementById('words_to_find')
const screen_element = document.getElementById('screen')

const words = [
    {
        "en": "home",
        'az': 'ev'
    },
    {
        "en": 'school',
        'az': 'mekteb'
    },
    {
        "en": 'father',
        'az': 'ata'
    },
    {
        "en": 'mother',
        'az': 'ana'
    },
    {
        "en": 'car',
        'az': 'masin'
    },
    {
        "en": 'driver',
        'az': 'surucu'
    },
    {
        "en": 'laptop',
        'az': 'noutbuk'
    },
    {
        "en": 'apple',
        'az': 'alma'
    },
    {
        "en": 'dog',
        'az': 'it'
    },
    {
        "en": 'cat',
        'az': 'pishik'
    },
    {
        "en": 'phone',
        'az': 'telefon'
    },
]

en_az.addEventListener('click', () => LanguageChanger("en_az"))
az_en.addEventListener('click', () => LanguageChanger("az_en"))

let activeLang = ""
let point = 0;
let words_to_find = 10
UpdateTablo()


right_input.addEventListener("keydown", (e) => {
    if (e.code === 'Enter') {
        const left_val = left_input.value
        const right_val = right_input.value

        const word_obj = words.find((obj) => {
            if (activeLang === 'en_az') {
                return obj.en === left_val
            } else if (activeLang === 'az_en') {
                return obj.az === left_val
            }
        })
        let tapilasiSoz;
        if (activeLang === 'en_az') {
            tapilasiSoz = word_obj.az
        } else if (activeLang === 'az_en') {
            tapilasiSoz = word_obj.en
        }
        console.log(tapilasiSoz)
        console.log(right_val)
        if (tapilasiSoz === right_val) {
            addResponse('success', `${left_val} - ${right_val}`)
            point += 10
        } else {
            point -= 15
            addResponse('wrong', `${left_val} - ${right_val} - (${tapilasiSoz})`)
        }
        words_to_find--;
        UpdateTablo()
        right_input.value = ''
        if (words_to_find === 0) {
            alert('oyun bitdi')
            left_input.value = ''
        } else {
            if (activeLang === 'en_az') {
                left_input.value = randomWord().en
            }else if(activeLang==='az_en'){
                left_input.value = randomWord().az
            }
        }
    }
})


// add response
function addResponse(className, text) {
    const p = document.createElement('p')
    p.className = className
    p.textContent = text
    found_words.append(p)
}

// language button
function LanguageChanger(lang) {
    activeLang = lang
    if (lang === 'en_az') {
        left_input.value = randomWord().en
        en_az.classList.add("active")
    } else if (lang === 'az_en') {
        left_input.value = randomWord().az
        az_en.classList.add("active")
    }
    screen_element.style.display = 'block'
    az_en.setAttribute('disabled', true)
    en_az.setAttribute('disabled', true)
    right_input.focus()
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
function WordCompare() {


}