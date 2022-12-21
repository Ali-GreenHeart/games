const ball = document.getElementById("ball")
const block = document.querySelector(".block")
const SPEED = 50



window.addEventListener('keydown', (e) => {
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
