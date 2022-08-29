const input = document.getElementById('input')
const btn = document.getElementById('btn')
const info = document.getElementById('info')

const arr = []

btn.addEventListener('click', () => {
    const value = input.value
    if (!arr.includes(value)) {
        arr.push(value)
        const p = document.createElement('p')
        p.textContent = value
        info.appendChild(p)
    } else {
        alert('bunu demisen')
    }
    input.value = ''
})