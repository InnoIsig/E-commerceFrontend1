let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    { id: 1, name: 'JAMESON', image: 'W1.JPG', price: 25 },
    { id: 2, name: 'BROADLEAF', image: 'W2.JPG', price: 25 },
    { id: 3, name: 'BLUE LABEL', image: 'W3.JPG', price: 25 },
    { id: 4, name: 'KAI-SIMON', image: 'W4.JPG', price: 25 },
    { id: 5, name: 'GUINNISS', image: 'W5.JPG', price: 25 },
    { id: 6, name: 'BUDWEISER', image: 'W7.JPG', price: 25 },
    { id: 7, name: 'BUDWEISER', image: 'W8.JPG', price: 25 },
    { id: 8, name: 'BUDWEISER', image: 'W9.JPG', price: 25 },
    { id: 9, name: 'BUDWEISER', image: 'W10.JPG', price: 25 },
    { id: 10, name: 'BUDWEISER', image: 'W11.JPG', price: 25 },
    { id: 11, name: 'BUDWEISER', image: 'W12.JPG', price: 25 },
    { id: 12, name: 'BUDWEISER', image: 'W13.JPG', price: 25 },
    { id: 13, name: 'BUDWEISER', image: 'W14.JPG', price: 25 },
    { id: 14, name: 'BUDWEISER', image: 'W15.JPG', price: 25 },
    { id: 15, name: 'BUDWEISER', image: 'W16.JPG', price: 25 },
    { id: 16, name: 'BUDWEISER', image: 'W17.JPG', price: 25 },
    { id: 17, name: 'BUDWEISER', image: 'W18.JPG', price: 25 },
    { id: 18, name: 'BUDWEISER', image: 'W19.JPG', price: 25 }
];


let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="MyImage/${value.image}" alt="${value.name}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Ajoutez la carte</button>`;
        list.appendChild(newDiv);
    });
}

function addToCard(key) {
    if (listCards[key] == null) {
        // Copy product from list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice += value.price * value.quantity;
        count += value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="MyImage/${value.image}" alt="${value.name}"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

initApp();
