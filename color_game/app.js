const root = document.getElementById('root')
const color_ball_container = document.getElementById('color_ball_container')
const point_element = document.getElementById('point')
const colors_to_find_element = document.getElementById('colors_to_find')
const colors_found_element = document.getElementById('colors_found')
const entered_color = document.getElementById('entered_color')
const modal = document.getElementById('modal')
const refresh = document.getElementById('refresh')

const COLORS = [
    'red',
    'blue',
    'yellow',
    'orange',
    'black',
    'lime',
    'purple',
    'gray',
    'green',
    'pink',
]

const color_array = COLORS.map(() => returnRandomColor())


let point = 0
let colors_to_find = color_array.length
let colors_found = 0

point_element.textContent = point
colors_to_find_element.textContent = colors_to_find
colors_found_element.textContent = colors_found



// append color_balls to element
color_array.forEach((color, index) => { appendColorBall(color, index) })

// handle input 
entered_color.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        const value = entered_color.value.trim()
        if (!value) { return; }
        let lastIndex = color_array.length - 1
        if (value === color_array[lastIndex]) {
            color_array.length = lastIndex
            document.getElementById('ball' + lastIndex).remove()
            updatePointTablo(lastIndex, true)
            if (color_array.length === 0) {
                congratulations()
                return;
            }
        } else {
            const newColor = returnRandomColor()
            color_array.push(newColor)
            lastIndex++;
            appendColorBall(newColor, lastIndex)
            updatePointTablo(lastIndex, false)
        }
        entered_color.value = ''
    }
})

// util functions
function updatePointTablo(lastIndex, tapdimi) {
    if (tapdimi) {
        colors_to_find = lastIndex
    } else {
        colors_to_find = lastIndex + 1
    }
    colors_to_find_element.textContent = colors_to_find
    if (tapdimi) {
        point += 10
    } else {
        point -= 15
    }
    point_element.textContent = point
    if (tapdimi) {
        colors_found++;
        colors_found_element.textContent = colors_found
    }
}

function returnRandomColor() {
    const randomIndex = parseInt(Math.random() * COLORS.length)
    return COLORS[randomIndex]
}

function appendColorBall(color, index) {
    const color_ball = document.createElement('div')
    color_ball.className = 'color_ball'
    color_ball.id = 'ball' + index
    color_ball.style.backgroundColor = color
    color_ball.style.top = index + 'px'
    color_ball.style.left = index + 'px'
    color_ball_container.appendChild(color_ball)
}


function congratulations() {
    modal.style.display = 'block'
    document.getElementById('modal_point').textContent = point
    document.getElementById('modal_colors_found').textContent = colors_found

}


refresh.addEventListener('click', () => {
    location.reload()
})