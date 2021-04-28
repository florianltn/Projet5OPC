const orderCart = localStorage.getItem('orderResponse');
const numCommande = JSON.parse(orderCart);
console.log(numCommande.orderId);

let order = document.getElementById('order');
order.innerHTML = `<strong> ${numCommande.orderId}</strong>`;

const totalPrice = localStorage.getItem('totalOrder');
console.log(totalPrice)
totalOrder.innerHTML = `<strong> ${totalPrice} €</strong>`;

//vidage du Localstorage
localStorage.clear();