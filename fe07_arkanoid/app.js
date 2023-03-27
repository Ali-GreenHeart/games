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
const BLOCK_SPEED = 50
const BALL_SPEED_X = 5
const BALL_SPEED_Y = 10
const BALL_MOVE_INTERVAL_ID = setInterval(ball_move, 40)

let ballDirection_x = 1
let ballDirection_y = 1


generateCubes()
ball_move()


function ball_move() {
    if (parseInt(ball.style.bottom) < 20) {
        onLose()
    }
    let minimum_y = 0
    let ball_left_side = parseInt(ball.style.left)
    let ball_right_side = parseInt(ball.style.left) + 40

    ball.style.bottom = parseInt(ball.style.bottom) + (ballDirection_y * BALL_SPEED_Y) + 'px'
    ball.style.left = parseInt(ball.style.left) + (ballDirection_x * BALL_SPEED_X) + 'px'
    if (parseInt(ball.style.bottom) === 32) {
        // eger top block-un sol terefine deyse
        if (parseInt(ball.style.left) >= parseInt(block.style.left)
            &&
            parseInt(ball.style.left) < parseInt(block.style.left) + 75
        ) {
            // direction menfi olsun ki, sol terefe getsin
            ballDirection_x = -1
        } else if (
            // eger top block-un sag terefine deyse
            parseInt(ball.style.left) >= parseInt(block.style.left) + 75
            &&
            parseInt(ball.style.left) <= parseInt(block.style.left) + 150
        ) {
            // direction musbet olsun ki, sag terefe getsin
            ballDirection_x = 1
        }
    }
    // sol-sag divarlara deyende istiqamet deyishsin
    if (parseInt(ball.style.left) > 640 || parseInt(ball.style.left) < 0) {
        ballDirection_x = -ballDirection_x
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
        ballDirection_y *= -1
    } else if (parseInt(ball.style.bottom) < minimum_y) {
        ballDirection_y = 1
    }
}


window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        block.style.left = parseInt(block.style.left) + BLOCK_SPEED + 'px'
    } else if (e.key === 'ArrowLeft') {
        block.style.left = parseInt(block.style.left) - BLOCK_SPEED + 'px'
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

function onLose() {
    clearInterval(BALL_MOVE_INTERVAL_ID)
    console.log('uduzdun')
    setTimeout(() => {
        ball.style.display = 'none'
    }, 300);
    // todo: top partlasin, partlayanda ses cixarsin
}

function randomIndex(end) {
    return Math.floor(Math.random() * end)
}

