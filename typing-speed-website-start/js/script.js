const wordBox = document.getElementById('wordBox')
const enteredWord = document.getElementById('enteredWord')
const time = document.getElementById('time')
const resetBtn = document.getElementById('resetBtn')
const modal = document.getElementById('modal')
wordBox.style.top = "0px"

const words = [
    "into",
    "learn",
    "part",
    "question",
    "new",
    "first",
    "other",
    "through",
    "did",
    "back",
    "take",
    "well",
    "talk",
    "so",
    "same",
    "together",
    "page",
    "him",
    "what",
    "quick",
    "made",
    "people",
    "mother",
    "could",
    "set",
    "when",
    "want",
    "up",
    "young",
    "sentence",
    "food",
    "this",
    "about",
    "are",
    "they",
    "spell",
    "want",
    "live",
    "life",
    "went",
    "much",
    "answer",
    "through",
    "we",
    "example",
    "big",
    "car",
    "soon",
    "took",
    "hard",
    "few",
    "walk",
    "had",
    "grow",
    "with",
    "run",
    "family",
    "boy",
    "number",
    "where",
    "picture",
    "too",
    "has",
    "state",
    "follow",
    "each",
    "country",
    "girl",
    "face",
    "if",
    "house",
    "show",
    "leave",
    "this",
    "later",
    "cut",
    "until",
    "men",
    "song",
    "my",
    "and",
    "four",
    "hard",
    "place",
    "without",
    "tree",
    "point",
    "may",
    "night",
    "leave",
    "below",
    "need",
    "was",
    "about",
    "write",
    "America",
    "these",
    "like",
    "who",
    "had",
    "than",
    "many",
    "it",
    "so",
    "children",
    "change",
    "help",
    "you",
    "must",
    "any",
    "were",
    "also",
    "enough",
    "two",
    "almost",
    "say",
    "later",
    "took",
    "were",
    "live",
    "land",
    "man",
    "letter",
    "another",
    "over",
    "again",
    "like",
    "which",
    "girl",
    "our",
    "know",
    "well",
    "white",
    "set",
    "big",
    "head",
    "where",
    "in",
    "call",
    "work",
    "different",
    "watch",
    "even",
    "your",
    "write",
    "away",
    "thought",
    "on",
    "miss",
    "play",
    "book",
];

const randomWords = []

// sozleri wordbox-a yazdiq
words.forEach(() => {
    let randomIndex = parseInt(Math.random() * 151)
    let newWord = document.createElement('span')
    const randomWord = words[randomIndex]
    newWord.textContent = randomWord
    randomWords.push(randomWord)
    wordBox.append(newWord)
})

let seconds = 60
let score = 0;
let timerID = null;

function timer() {
    if (seconds === 0) {
        console.log("oyun bitdi")
        clearInterval(timerID)
        enteredWord.disabled = true
        modal.parentElement.style.display = 'flex'
        modal.textContent = 'Your score is ' + score
    } else {
        seconds--;
        time.textContent = `${seconds}s`
    }
}

let topOffset = 0
let currentWordIndex = 0
wordBox.childNodes[currentWordIndex].className = 'activeSpan'

enteredWord.addEventListener('keydown', ({ keyCode }) => {
    // console.dir(wordBox.childNodes[currentWordIndex + 1].offsetTop)

    if (enteredWord.dataset.didstart == 0) {
        timerID = setInterval(timer, 1000)
        enteredWord.dataset.didstart = 1
    }
    if (keyCode === 32) {
        if (wordBox.childNodes[currentWordIndex].offsetTop < wordBox.childNodes[currentWordIndex + 1].offsetTop) {
            wordBox.style.top = parseInt(wordBox.style.top) - 40 + 'px'
        }
        const daxilEdilmisSoz = enteredWord.value.trim()

        wordBox.childNodes[currentWordIndex + 1].className = 'activeSpan'

        if (daxilEdilmisSoz === randomWords[currentWordIndex]) {
            wordBox.childNodes[currentWordIndex].className = 'correctWord'
            score += 10 // score = score + 10
        } else {
            wordBox.childNodes[currentWordIndex].className = 'wrongWord'
        }
        enteredWord.value = ""
        currentWordIndex++;
    }
})


resetBtn.addEventListener('click', () => {
    window.location.reload()
})