const orderCart = localStorage.getItem('orderResponse');
const numCommande = JSON.parse(orderCart);
console.log(numCommande.orderId);

let order = document.getElementById('order');
order.innerHTML = `<strong> ${numCommande.orderId}</strong>`;

const totalPrice = localStorage.getItem('totalOrder');
console.log(totalPrice)
totalOrder.innerHTML = `<strong> ${totalPrice} €</strong>`;
/*const price= localStorage.getItem("prixTotal")
const priceTotal= JSON.parse(price)
console.log(prixTotal.prixTotal)

const prixTotal = 0;
prixTotal = prixTotal + (infoProduit.prix * infoProduit.quantité);
console.log(prixTotal)*/


//vidage du Localstorage
//localStorage.clear();