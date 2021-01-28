    for(var i=1; i < localStorage.length + 1; i++){
      let panier = console.log(localStorage.getItem("orinoco" + i));
      //var lsSize = console.log(localStorage.length)
      // créer tableau ici et récuperer les valeurs
      
      const infoProduit = JSON.parse(localStorage.getItem("orinoco" +i));
      console.log("Modèle :" + infoProduit.nom);
      console.log("Prix :" + infoProduit.prix);

      document.getElementById('panier').innerHTML =`<table> 
     <tr>
        <th>Modèle</th>
        <th>Photo</th>
        <th>Description</th>
        <th>Lentille</th>
        <th>Prix</th>
        <th>Quantité</th>
      </tr>
      <tr>
        <td>${infoProduit.nom}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>`;
}
    
// while ( i <= localStorage.length) {
        //refaire le meme processus
        
      //}  
    
 /*     document.getElementById('panier').innerHTML =
          `<div class="cart-product">
            <div class="cart-item cart-column">
                <span class="cart-item-name">${item.nom}</span>
            </div>
            <span class="cart-lenses cart-column">${item.lenses}</span>
            <span class="cart-price cart-column">${item.prix},00 €</span>
            <div class="cart-quantity cart-column">
                <input type="button" value="-" cartId="${item.id}" cartLense="${item.lenses}" class="decrease">
                <span class="cart-quantity-input">${item.quantité}</span>
                <input type="button" value="+" cartId="${item.id}" cartLense="${item.lenses}" class="increase">
                <button id="${item.id}" class="btn btn-danger btn-X" type="button">X</button>
            </div>
            </div>`; 
    
    
      //let buyButton = document.getElementById("cart" + count);
      //buyButton.onclick = e => {
        //saveToCart(item);
      //};
    
/*
            document.getElementById('panier').innerHTML =
          `<div class="cart-product">
            <div class="cart-item cart-column">
                <span class="cart-item-name">${item.nom}</span>
            </div>
            <span class="cart-lenses cart-column">${item.lenses}</span>
            <span class="cart-price cart-column">${item.prix},00 €</span>
            <div class="cart-quantity cart-column">
                <input type="button" value="-" cartId="${item.id}" cartLense="${item.lenses}" class="decrease">
                <span class="cart-quantity-input">${item.quantité}</span>
                <input type="button" value="+" cartId="${item.id}" cartLense="${item.lenses}" class="increase">
                <button id="${item.id}" class="btn btn-danger btn-X" type="button">X</button>
            </div>
            </div>`; 
    

    /*for (var key in cart) {
      Object.values(cart)
      
      console.log(key + " -> " + cart[key]);
    }*/

    /*toto.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            console.log(`${key} ${value}`);
        });
        console.log('-------------------');
    });*/


    
          

/* // Supprimer un produit
var removeProduct = localStorage.removeItem("orinoco" + productId, val)

// Vider le panier
var clearPanier = localStorage.clear()*/
/*
//HTML Formulaire
document.getElementById("formulaire-validation").innerHTML = /*`
    <input type="text" name="prenom" placeholder="Prénom"><br>
    <input type="text" name="nom" placeholder="Nom"><br>
    <input type="email" name="email" placeholder="Email"><br>
    <input type="text" name="adresse" placeholder="Adresse complète"><br>
    <input type="text" name="ville" placeholder="Ville"><br>
    <input type="number" name="code-postal" placeholder="Code postal"><br>
    <input type="submit" name="validation" placeholder="Valider"><br>
`;*/

/*<div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">Prénom*</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="Prénom" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Nom*</label>
      <input type="text" class="form-control" id="validationDefault02" placeholder="Nom" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Email*</label>
      <input type="email" class="form-control" id="validationDefaultMail" placeholder="Email" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Adresse complète*</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder="Adresse" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">Ville*</label>
      <input type="text" class="form-control" id="validationDefault04" placeholder="Ville" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Code Postal*</label>
      <input type="text" class="form-control" id="validationDefault05" placeholder="Code Postal" required>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Valider le formulaire</button>`




//variable products
let products = [];
    panier.forEach(element => {
    products.push(element.id)
});



//options de la requête API
const options = {
    method: 'POST',
    body: JSON.stringify({
        contact: {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            address: form.address.value,
            city: form.city.value,
            email: form.email.value
        },products
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
};*/