const carousel = document.querySelector('.carousel')

const carouselData = [
    {
        id: 0,
        title: 'Item1',
        img: 'https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 1,
        title: 'Item2',
        img: 'https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        title: 'Item3',
        img: 'https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        title: 'Item4',
        img: 'https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
]


carouselData.forEach((data) => {
    const carouselItem = document.createElement('div')
    carouselItem.className = 'carousel_item'
    carouselItem.id = `item${data.id}`

    const title = document.createElement('h1')
    title.textContent = data.title

    const img = document.createElement('img')
    img.src = data.img

    carouselItem.append(title, img)
    carousel.appendChild(carouselItem)
})
