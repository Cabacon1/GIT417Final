const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");


openShopping.addEventListener("click", () => {
    body.classList.add("active")
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
    products.forEach((value,key) =>{
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src ="Images/${value.images}">
            <div class ="title">${value.name}</div>
            <div class ="price">${value.price.toLocaleString()}</div>
            <button onclick ="addToCard(${key})">Add To Cart</button>
        `
        list.appendChild(newDiv)
    })
}
initApp()