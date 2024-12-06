const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");


openShopping.addEventListener("click", () => {
    body.classList.add("active")
    body.style.zIndex = 2;
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        id: 1,
        name: "Standard",
        images: "/standard.jpg",
        price: 60
    },
    {
        id: 2,
        name: "Deluxe",
        images: "/deluxe.jpg",
        price: 72
    },
    {
        id: 3,
        name: "Luxury",
        images: "/luxury.jpg",
        price: 96
    },
    {
        id: 4,
        name: "Mini",
        images: "/mini.jpg",
        price: 48
    },
    {
        id: 5,
        name: "Drop Cookies",
        images: "/dropCookie.jpg",
        price: 36
    }
]

let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src ="Images/${value.images}">
            <div class ="title">${value.name}</div>
            <div class ="price">$${value.price.toLocaleString()}</div>
            <button onclick ="addToCard(${key})">Add To Cart</button>
        `
        list.appendChild(newDiv)
    })
}
initApp()


const addToCard = (key) => {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1
    }

    reloadCard();
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src ="Images/${value.images}"></div>
                <div class ="cardTitle">${value.name}</div>
                <div class ="cardPrice">$${value.price.toLocaleString()}</div>

                <div>
                    <button style="background-color: #000" 
                    class="cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})"></button>
                    <div class ="count">${count}</div>
                    <button style="background-color: #000" 
                    class="cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})"></button>
                </div>
            `
            listCard.appendChild(newDiv);
        }
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}

const changeQuantity = (key, quantity) => {

    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }

    reloadCard();
}

// Carousel

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("carousel-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}