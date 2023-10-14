
const menu = document.querySelector('.menu');

const menuElements = [
    {
        title: 'Home',
        href: 'index.html'
    },
    {
        title: 'About Us',
        href: 'about.html'
    },
    {
        title: 'Contacts',
        href: 'contacts.html'
    },
    {
        title: 'Photo',
        href: 'photo.html'
    }
];

const menuItems = menuElements.map(function (item) {
    return `<li class = "menu__item">
                <a href = "${item.href}">${item.title}</a>
            </li>`
}).join('');

menu.innerHTML = menuItems;
