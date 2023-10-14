const photos = document.querySelector('.photos');

const photosElements = ['itstep1.jpg', 'itstep2.jpg', 'itstep3.png'];

const photosItems = photosElements.map(function (item) {
    return `<img src = "img/${item}">`
}).join('');

photos.innerHTML = photosItems;