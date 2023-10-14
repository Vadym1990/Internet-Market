const contacts = document.querySelector('.contacts');

const contactsElement = [
    {
        operator: 'Kyivstar:',
        phone: '(098)-111-11-11'
    },
    {
        operator: 'Life:',
        phone: '(063)-222-22-22'
    },
    {
        operator: 'Vodafone:',
        phone: '(099)-333-33-33'
    }

];

const contactsItems = contactsElement.map(function (item) {
    return `
            <div class = "contacts__item">
                <span>${item.operator}</span>
                <span>${item.phone}</span>
            </div>
                        `
}).join('');

contacts.innerHTML = contactsItems;