const redBtn = document.getElementById('redBtn')
const greenBtn = document.getElementById('greenBtn')
const blueBtn = document.getElementById('blueBtn')
const blackBtn = document.getElementById('blackBtn')
const basliq = document.getElementById('basliq')

// ------------------1-ci yol----------------------
// redBtn.addEventListener("click", () => {
//     document.body.style.backgroundColor = "red"
// })

// greenBtn.addEventListener("click", () => {
//     document.body.style.backgroundColor = "green"
// })
// blueBtn.addEventListener("click", () => {
//     document.body.style.backgroundColor = "blue"
//     basliq.style.color = "white"
// })
// blackBtn.addEventListener("click", () => {
//     document.body.style.backgroundColor = "black"
//     basliq.style.color = "white"
// })
// ------------------2ci yol----------------------
// redBtn.onclick = () => {
//     document.body.style.backgroundColor = "red"
// }


// ------------------3cu yol----------------------



const colorChanger = (colorName) => {
    if(colorName==='blue' || colorName==='black'){
        basliq.style.color='white'
    }else{
        basliq.style.color='black'
    }
    document.body.style.backgroundColor=colorName
}