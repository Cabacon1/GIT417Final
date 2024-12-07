"use strict";

// DarkMode
// const btn = document.querySelector("btn-toggle");
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark-theme)");

// btn.addEventListener("click", function () {
//   if (prefersDarkScheme.matches) {
//     document.body.classList.toggle("light-theme");
//   } else {
//     document.body.classList.toggle("dark-theme");
//   }
// });

//   Shopping Cart
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
// Product Map
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
// Cart list array
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

// Image Carousel

let myIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("carousel-image");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}


// Regex

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous errors
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";

    // Collect input values
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Regular expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const phoneRegex = /^\d{10}$/; // Validates exactly 10-digit phone numbers

    let isValid = true; // Flag for overall form validity

    // Validate email
    if (!email || !emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate phone number
    if (!phone || !phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Create customer object if form is valid
    if (isValid) {
        const customer = {
            email,
            phone,
        };

        // Display success message or use customer object as needed
        alert(`Form submitted successfully! \nCustomer Info:\nEmail: ${customer.email}\nPhone: ${customer.phone}`);
        console.log(customer);

        // Reset form
        e.target.reset();
    }
});
