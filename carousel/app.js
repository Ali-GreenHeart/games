const carousel = document.querySelector('.carousel');

const lt_arrow = document.createElement('button');
lt_arrow.className = 'arrow_btn lt_arrow';
lt_arrow.innerHTML = '&lt;';

const gt_arrow = document.createElement('button');
gt_arrow.className = 'arrow_btn gt_arrow';
gt_arrow.innerHTML = '&gt;';
carousel.appendChild(gt_arrow);


const carouselData = [
    {
        id: 1,
        title: 'Item1',
        img: 'https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        title: 'Item2',
        img: 'https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 3,
        title: 'Item3',
        img: 'https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 4,
        title: 'Item4',
        img: 'https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 5,
        title: 'Item5',
        img: 'https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 6,
        title: 'Item6',
        img: 'https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 7,
        title: 'Item7',
        img: 'https://images.unsplash.com/photo-1516728918023-0fd81a3a149c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
]

let f = 0;

carouselData.slice(f, f + 4).forEach((data) => createCarouselItem(data));

lt_arrow.onclick = () => {
    f--;
    carousel.innerHTML = '';
    carousel.appendChild(lt_arrow);
    carousel.appendChild(gt_arrow);
    let start = f - 4;
    if (start < 0) {
        f = carouselData.length;
    }
    carouselData.slice(f - 4, f).forEach((data) => createCarouselItem(data));
};

gt_arrow.onclick = () => {
    f++;
    carousel.innerHTML = '';
    carousel.appendChild(lt_arrow);
    carousel.appendChild(gt_arrow);
    let end = f + 4;
    if (end > carouselData.length) {
        f = 0;
    }
    carouselData.slice(f, f + 4).forEach((data) => createCarouselItem(data));
};

function createCarouselItem(data) {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel_item';
    carouselItem.id = `item${data.id}`;

    const title = document.createElement('h1');
    title.textContent = data.title;

    const img = document.createElement('img');
    img.src = data.img;

    carouselItem.append(title, img);
    carousel.appendChild(carouselItem);
}
