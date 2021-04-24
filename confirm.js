const orderCart = localStorage.getItem('orderResponse');
const numCommande = JSON.parse(orderCart);
console.log(numCommande.orderId);

const commandeCart = localStorage.getItem('panier');
const totalPrice = JSON.parse(commandeCart);
const totalOrder = document.getElementById('totalorder');

let order = document.getElementById('order');
order.innerHTML = `<strong> ${numCommande.orderId}</strong>`;


//vidage du Localstorage
localStorage.clear();