console.log("Price JavaScript is working!");

glazeVal = 0;
sizeVal = 1;
const curGlazing = document.querySelector('#glazing');
const curSize = document.querySelector('#size');


function updatePrice() {
    if (glazeVal != curGlazing.value){
        glazeVal = curGlazing.value;};
    if (sizeVal != curSize.value){
        sizeVal = curSize.value;};

    value = (2.49 + parseFloat(glazeVal))*sizeVal;

    const curPrice = document.querySelector('#box1');
    console.log(curGlazing.value);
    curPrice.innerText = "$" + value.toFixed(2);
}

document.addEventListener('input', updatePrice,false);
