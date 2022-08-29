const field = document.getElementById('field')
const modal = document.getElementById('modal')
const modal_point = document.getElementById('modal_point')
const refresh = document.getElementById('refresh')



const colors = [
    'pink',
    'red',
    'lightgreen',
    'purple',
    'yellow',
    'blue',
    'black',
    'violet',
    'teal',
    'darkred'
]
// setTimeout(gameEnd, 3000);

let point = 0

for (let i = 0; i <= 944; i++) {
    const color_ball = document.createElement('div')
    const randomColor = colors[randomIndex()]
    color_ball.id = 'ball' + i
    color_ball.style.backgroundColor = randomColor
    color_ball.className = 'color_ball'
    color_ball.addEventListener('mouseenter', (event) => {
        point++;
        const currentElementColor = event.target.style.backgroundColor;
        const nextElementColor = event.target.nextSibling.style.backgroundColor
        const previousElementColor = event.target.previousSibling.style.backgroundColor

        if (i > 45 && document.getElementById(`ball${i - 45}`).style.backgroundColor === currentElementColor) {
            document.getElementById(`ball${i - 45}`).style.visibility = 'hidden'
            point++;
            console.log('ogulsan')
        }
        if (i < 900 && document.getElementById(`ball${i + 45}`).style.backgroundColor === currentElementColor) {
            document.getElementById(`ball${i + 45}`).style.visibility = 'hidden'
            point++;
            console.log('ogulsan')
        }
        if (currentElementColor === nextElementColor) {
            point++;
            event.target.nextSibling.style.visibility = 'hidden'
            console.log('super')
        }
        if (currentElementColor === previousElementColor) {
            point++;
            event.target.previousSibling.style.visibility = 'hidden'
            console.log('super')
        }
        color_ball.style.visibility = "hidden";
    })
    field.append(color_ball)
}


function gameEnd() {
    modal.style.display = 'block'
    modal_point.textContent = point
}

function randomIndex() {
    return parseInt(Math.random() * colors.length)
}


refresh.addEventListener('click', () => {
    location.reload()
})