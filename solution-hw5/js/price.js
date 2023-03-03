console.log("Price JavaScript is working!");

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};


const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenRoll = params.get('roll')

const title = document.querySelector("#title")
title.innerText = chosenRoll + " Cinnamon Rolls";

const image = document.querySelector(".detailImage");
const imageLocation = "products/"+rolls[chosenRoll].imageFile;
image.src = imageLocation;

const basePrice = rolls[chosenRoll].basePrice;

const glazingPrices = {
	"Keep Original" : 0.0,
	"Sugar Milk" : 0.0,
	"Vanilla Milk" : 0.50,
	"Double Chocolate" : 1.50
};

const packPrices = {
	"1" : 1, "3" : 3, "6" : 5, "12" : 10
};

let glazingOption = "Keep original";
let packOption = 1;

let totalPrice = basePrice;

let glazingPrice = 0;
let packPrice = 1;

const glazingSelect = document.querySelector("#glazing");

for (const [pack, price] of Object.entries(glazingPrices)) {
	const option = document.createElement("option");
	option.textContent = pack;
	option.value = price;
	glazingSelect.appendChild(option);
}

const sizeSelect = document.querySelector("#size");

for (const [pack, price] of Object.entries(packPrices)) {
	const option = document.createElement("option");
	option.textContent = pack;
	option.value = price;
	sizeSelect.appendChild(option);
}

function glazingChange(element) {
    glazingOption = element.options[element.selectedIndex].text;
	glazingPrice = parseFloat(element.value);
    updateTotalPrice();
}

function sizeChange(element) {
    packOption = element.options[element.selectedIndex].text;
	packPrice = parseFloat(element.value);
    updateTotalPrice();
}

function updateTotalPrice() {
	totalPrice = (basePrice + glazingPrice) * packPrice;
    totalPrice = totalPrice.toFixed(2);
    const totalPriceField = document.querySelector("#box1");
    totalPriceField.innerText = "$" + totalPrice;
}

updateTotalPrice();

class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const cart = new Set();

function addProduct(type,glazing,size,price){
    const product = new Roll(type,glazing,size,price);
    cart.add(product);
    console.log(cart);
    return product
}

const addInCart = document.querySelector(".box2");
addInCart.addEventListener('click', () => {
    addProduct(chosenRoll,glazingOption,packOption,totalPrice);
});