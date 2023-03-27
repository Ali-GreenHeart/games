const bayraktar = document.getElementById("4")
const image = bayraktar.style.backgroundImage.slice(5, -2)
    // console.log(bayraktar.style.backgroundImage.slice(5, -2))
const container = document.getElementById("container")
container.style.backgroundImage = `url(${image})`

function getId(id) {
    const elem = document.getElementById(id)
    const elemBg = elem.style.backgroundImage.slice(5, -2)
    console.log(container.style.backgroundImage == "")
    container.style.backgroundImage = `url(${elemBg})`

}