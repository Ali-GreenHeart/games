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
const CUBE_COUNT = 15
const SPEED_Y = 50
const SPEED_X = 5
let ballDirection = 1
let ballSpeed = 10

setInterval(ball_move, 40)
generateCubes()
ball_move()


function ball_move() {
    let minimum_y = 0
    let ball_left_side = parseInt(ball.style.left)
    let ball_right_side = parseInt(ball.style.left) + 40

    ball.style.bottom = parseInt(ball.style.bottom) + ballSpeed + 'px'
    ball.style.left = parseInt(ball.style.left) + (ballDirection * SPEED_X) + 'px'
    if (parseInt(ball.style.bottom) === 32) {
        if (parseInt(ball.style.left) >= parseInt(block.style.left)
            &&
            parseInt(ball.style.left) < parseInt(block.style.left) + 75
        ) {
            ballDirection = -1
        } else if (
            parseInt(ball.style.left) >= parseInt(block.style.left) + 75
            &&
            parseInt(ball.style.left) <= parseInt(block.style.left) + 150) {
            ballDirection = 1
        }
    }
    // 
    if (parseInt(ball.style.left) > 640 || parseInt(ball.style.left) < 0) {
        ballDirection = -ballDirection
    }



    // minimum y teyin edilmesi 
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


window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        block.style.left = parseInt(block.style.left) + SPEED_Y + 'px'
    } else if (e.key === 'ArrowLeft') {
        block.style.left = parseInt(block.style.left) - SPEED_Y + 'px'
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