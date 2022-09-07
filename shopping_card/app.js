const siyahi = document.getElementById('siyahi')
const addBtn = document.getElementById('addBtn')
const quantity = document.getElementById('quantity')
const alinanMehsullar = document.getElementById('alinanMehsullar')


addBtn.addEventListener('click', () => {
    const mehsulSayi = parseInt(quantity.value)
    const selectedValue = siyahi.value
    let selectedLabel = ""
    const options = siyahi.children
    for (const elem of options) {
        if (elem.value === selectedValue) {
            selectedLabel = elem.label
        }
    }
    addList(selectedValue, selectedLabel, mehsulSayi)
})



function addList(selectedValue, selectedLabel, mehsulSayi) {
    const element = document.getElementById(selectedValue)
    if (element) {
        const kohneSay = parseInt(element.textContent.replace(`${selectedLabel}:`, ""))
        element.textContent = `${selectedLabel}: ${mehsulSayi + kohneSay}`
    } else {
        let list = document.createElement("li");
        list.textContent = `${selectedLabel}: ${mehsulSayi}`
        list.id = selectedValue
        alinanMehsullar.appendChild(list)
    }
}

