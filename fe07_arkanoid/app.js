const ball = document.getElementById("ball")
const block = document.querySelector(".block")
const cubeContainer = document.querySelector('.cube-container')

const COLORS = [
    'red',
    'aqua',
    'yellow',
    'lime',
    'purple',
    'pink'
]
const CUBE_COUNT = 20
const SPEED = 10
let ballSpeed = 10

generateCubes()


function ball_move() {
    let minimum_y = 0
    let ball_left_side = parseInt(ball.style.left)
    let ball_right_side = parseInt(ball.style.left) + 40

    ball.style.bottom = parseInt(ball.style.bottom) + ballSpeed + 'px'

    if (
        ball_left_side > parseInt(block.style.left) && ball_left_side < (parseInt(block.style.left) + 150)
        ||
        ball_right_side > parseInt(block.style.left) && ball_right_side < parseInt(block.style.left) + 150
    ) {
        minimum_y = 32
    }

    // yuxari asagi hereket 
    if (parseInt(ball.style.bottom) > 460) {
        ballSpeed *= -1
    } else if (parseInt(ball.style.bottom) < minimum_y) {
        ballSpeed = Math.abs(ballSpeed)
    }
}

setInterval(ball_move, 40)

window.addEventListener('keydown', (e) => {
    ball_move()
    if (e.key === 'ArrowRight') {
        block.style.left = parseInt(block.style.left) + SPEED + 'px'
    } else if (e.key === 'ArrowLeft') {
        block.style.left = parseInt(block.style.left) - SPEED + 'px'
    }
    if (parseInt(block.style.left) < 0) {
        block.style.left = '0px'
    } else if (parseInt(block.style.left) > 530) {
        block.style.left = '530px'
    }
})

function generateCubes() {
    for (let i = 0; i < CUBE_COUNT; i++) {
        const randomColor = COLORS[randomIndex(COLORS.length)]
        const cube = document.createElement('div')
        cube.className = 'cube'
        cube.style.backgroundColor = randomColor
        cubeContainer.appendChild(cube)
    }
}

function randomIndex(end) {
    return Math.floor(Math.random() * end)
}