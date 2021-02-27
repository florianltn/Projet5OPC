  let infoProduit='';
  
    for(var i=1; i < localStorage.length + 1; i++){
      let panier = console.log(localStorage.getItem("orinoco" + i));

      infoProduit = JSON.parse(localStorage.getItem("orinoco" +i));
      console.log("Modèle :" + infoProduit.nom);
      console.log("Prix :" + infoProduit.prix);

      document.getElementById('panier').innerHTML +=
      `<div class="cart_section">
        <div class="container-fluid">
         <div class="row">
             <div class="col-lg-10 offset-lg-1">
                 <div class="cart_container">
                     <div class="cart_items">
                         <ul class="cart_list">
                             <li class="cart_item clearfix">
                                 <div class="cart_item_image"><img src="${infoProduit.photo}" alt="photo produit"></div>
                                 <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                     <div class="cart_item_name cart_info_col">
                                         <div class="cart_item_title">Nom</div>
                                         <div class="cart_item_text">${infoProduit.nom}</div>
                                     </div>
                                     <div class="cart_item_description cart_info_col">
                                         <div class="cart_item_title">Description</div>
                                         <div class="cart_item_text">${infoProduit.description}</div>
                                     </div>
                                     <div class="cart_item_quantity cart_info_col">
                                         <div class="cart_item_title">Quantité</div>
                                         <div class="cart_item_text">${infoProduit.quantité}</div>
                                     </div>
                                     <div class="cart_item_price cart_info_col">
                                         <div class="cart_item_title">Prix</div>
                                         <div class="cart_item_text">${infoProduit.prix}</div>
                                     </div>
                                 </div>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
        </div>
      </div>`;
      
     // if (var i=1; i < localStorage.length + 1; i++ )
      console.log(infoProduit.prix)
      document.getElementById('total').innerHTML = 
      `<div class="order_total">
          <div class="order_total_content text-md-right">
            <div class="order_total_title">Prix total:</div>
            <div class="order_total_amount">${(infoProduit.prix)  * (infoProduit.quantité)}</div>
          </div>
      </div>
      <div class="cart_buttons"> 
        <button type="button" onclick=window.location.href='index.html'; class="button cart_button_clear">Continuer mes achats</button>
      </div>`;
    } 



//HTML Formulaire
document.getElementById("formulaire-validation").innerHTML =

`<div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">Prénom*</label>
      <input type="text" pattern="(/^[A-Za-z àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛäëïöüÿÄËÏÖÜŸçÇ \s]{1,}/)" class="form-control" id="formPrenom" placeholder="Prénom" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Nom*</label>
      <input type="text" pattern="(/^[A-Za-z àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛäëïöüÿÄËÏÖÜŸçÇ \s]{1,}/)" class="form-control" id="formNom" placeholder="Nom" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Email*</label>
      <input type="email" pattern="(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)" class="form-control" id="formEmail" placeholder="Email" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Adresse complète*</label>
      <input type="text" pattern="(/[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)*/)" class="form-control" id="formAdresse" placeholder="Adresse" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">Ville*</label>
      <input type="text" pattern="(/[A-Za-z àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s]{2,}/)" class="form-control" id="formVille" placeholder="Ville" required>
    </div>
  </div>
  <div class="cart_buttons"> 
    <button type="button" onclick=window.location.href='confirm.html'; class="button cart_button_clear" type="submit">Valider la commande</button>
  </div>`;




//requête POST
let contact = {
  firstName: document.getElementById("formNom").value,
  lastName: document.getElementById("formPrenom").value,
  address: document.getElementById("formEmail").value,
  city: document.getElementById("formAdresse").value,
  email: document.getElementById("formVille").value,
}
console.log(contact)

let products = [infoProduit.id];
console.log(products)

const url = 'http://localhost:3000/api/cameras/order';

const formulaire = {
    method: 'POST',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    //body: contacts, products
    
};
