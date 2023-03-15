const glazingPrices = {
	"Keep Original" : 0.0,
	"Sugar Milk" : 0.0,
	"Vanilla Milk" : 0.50,
	"Double Chocolate" : 1.50
};

const packPrices = {
	"1" : 1, "3" : 3, "6" : 5, "12" : 10
};

const cart = new Set();

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.element = null;
        this.totalPrice = calPrice(rollGlazing, packSize, basePrice);
    }
}

function calPrice(rollGlazing, packSize, basePrice){
    const glazingPrice = glazingPrices[rollGlazing];
    const packPrice = packPrices[packSize];
    let totalPrice = (basePrice + glazingPrice) * packPrice;
    totalPrice = totalPrice.toFixed(2);
    return totalPrice;
}

function addNewRoll(rollType, rollGlazing, packSize, basePrice){
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.add(roll);
    createElement(roll);
    updateCartPrice(cart);
}

function createElement(roll) {
    const template = document.querySelector('#Item-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.row');

    const btnDelete = roll.element.querySelector('.remove');
    btnDelete.addEventListener('click', () => {
        deleteRoll(roll);
    });

    const rollList = document.querySelector('#rollList');
    rollList.prepend(roll.element);
    updateRoll(roll);
  }

function updateRoll(roll){
    const rollItemImage = roll.element.querySelector(".cartImage");
    const rollItemType = roll.element.querySelector("#rollType");
    const rollGlazingInfo = roll.element.querySelector("#glazing");
    const rollPackInfo = roll.element.querySelector("#packSize");
    const rollItemPrice = roll.element.querySelector(".price");

    rollItemImage.src = 'products/' + roll.type.toLowerCase()+'-cinnamon-roll.jpg'
    rollItemType.innerText = roll.type + ' Cinnamon Roll';
    rollGlazingInfo.innerText = 'Glazing: '+roll.glazing;
    rollPackInfo.innerText = 'Pack Size: '+roll.size;
    rollItemPrice.innerText = '$'+roll.totalPrice;
}

function updateCartPrice(cart){
    const totalCartPrice = document.querySelector("#cartEndPrice");
    if (cart.size === 0){
        totalCartPrice.innerText='$0';
        return;
    }
    let sum = 0;
    for (item of cart){
        sum = parseFloat(sum)+ parseFloat(item.totalPrice);
    }

    totalCartPrice.innerText = '$'+sum.toFixed(2);
}

function deleteRoll(roll) {
    roll.element.remove();
    cart.delete(roll);
    updateCartPrice(cart);
}

addNewRoll("Original","Sugar Milk","1",2.49);
addNewRoll("Walnut","Vanilla Milk","12",3.49);
addNewRoll("Raisin","Sugar Milk","3",2.99);
addNewRoll("Apple","Keep Original","3",3.49);
