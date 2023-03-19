
var price;
var quantity;
var total;

price = 5;
quantity = 14;
// Calculate the total by multiplying the price by quantity.
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;

