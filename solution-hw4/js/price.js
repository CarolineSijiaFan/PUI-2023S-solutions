console.log("Price JavaScript is working!");

const glazingPrices = {
	"Keep original" : 0.0,
	"Sugar milk" : 0.0,
	"Vanilla milk" : 0.50,
	"Double chocolate" : 1.50
};

const packPrices = {
	"1" : 1, "3" : 3, "6" : 5, "12" : 10
};

const basePrice = 2.49;
let glazingOption = "Keep original";
let packOption = 1;

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
	glazingPrice = parseFloat(element.value);
    updateTotalPrice();
}

function sizeChange(element) {
	packPrice = parseFloat(element.value);
    updateTotalPrice();
}

function updateTotalPrice() {
	const totalPrice = (basePrice + glazingPrice) * packPrice;
    const totalPriceField = document.querySelector("#box1");
    totalPriceField.innerText = "$" + totalPrice.toFixed(2);
}