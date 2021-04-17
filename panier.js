  let infoProduit='';

    for(var i=1; i < localStorage.length + 1; i++){
      let panier = console.log(localStorage.getItem("orinoco" + i));

      infoProduit = JSON.parse(localStorage.getItem("orinoco" + i));
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
                                         <div class="cart_item_text">${infoProduit.prix}€</div>
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
    
      
/*var totalPanier = 0
      for (i = 0; i < totalPanier.length; i++) {

        totalPanier += infoProduit[i].prix * infoProduit[i].quantité;
      }
      console.log(totalPanier)*/
      
      let totalPaye = 0;
      Object.keys(localStorage.getItem("orinoco" + [i])).forEach((infoProduit) => {
        totalPaye += infoProduit.prix / 100;
      });
      
      console.log(`Total à payer : ${totalPaye}€`);
    
      
      document.getElementById('total').innerHTML = 
      `<div class="order_total">
          <div class="order_total_content text-md-right">
            <div class="order_total_title">Prix total:</div>
            <div class="order_total_amount">${totalPaye}€</div>
          </div>
      </div>
      <div class="cart_buttons"> 
        <button type="button" onclick=window.location.href='index.html'; class="button cart_button_clear">Continuer mes achats</button>
      </div>`;
    }
  

//HTML Formulaire

function validationForm(){
  let checkString = new RegExp ("/^[A-Z]{1}[a-z]/");
  let checkMail = new RegExp ("/.+@.+\..+/");
  let checkAdresse = new RegExp ("/^[^@&\"()!_$*€£`%+=\/;?#]+$/");

  if (checkString.test(document.getElementById("formPrenom").value) == false) {
    alert("Votre prénom doit commencer par une majuscule et continuer avec des minuscules");
    return false;
  }  
  if (checkString.test(document.getElementById("formNom").value) == false) {
    alert("Votre nom doit commencer par une majuscule et continuer avec des minuscules");
    return false;
  } 
  if (checkMail.test(document.getElementById("formEmail").value) == false) {
    alert("Votre email doit être au format abc@abc.abc");
    return false;
  } 
  if (checkAdresse.test(document.getElementById("formAdresse").value) == false) {
    alert(`Votre adresse contient un ou plusieurs des caractères interdits suivants : ` + '[^@&"()!_$*€£`%+=/;?#]' + "ou n'est pas renseignée.");
    return false;
  } 
  if (checkString.test(document.getElementById("formVille").value) == false) {
    alert("Le nom de votre ville doit commencer par une majuscule et continuer avec desminuscules");
    return false;
  } 
  else {
    return true;
  }

}

document.getElementById("formulaire-validation").innerHTML =

`<div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">Prénom*</label>
      <input type="text" class="form-control" id="formPrenom" placeholder="Prénom" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Nom*</label>
      <input type="text" class="form-control" id="formNom" placeholder="Nom" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">Email*</label>
      <input type="email" class="form-control" id="formEmail" placeholder="Email" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">Adresse complète*</label>
      <input type="text" class="form-control" id="formAdresse" placeholder="Adresse" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">Ville*</label>
      <input type="text" class="form-control" id="formVille" placeholder="Ville" required>
    </div>
  </div>
  `;


  
//requête POST
  function validation(){
    let btnForm = document.getElementById("buttonSubmit");
    
    btnForm.addEventListener("click", function (event) {
    let contact = {
      firstName: document.getElementById("formNom").value,
      lastName: document.getElementById("formPrenom").value,
      address: document.getElementById("formAdresse").value,
      city: document.getElementById("formVille").value,
      email: document.getElementById("formEmail").value,
    }
    console.log(contact)

    let products = [infoProduit.id];
    console.log(products)

    let url = 'http://localhost:3000/api/cameras/order';

    let data = {contact, products}
    let newData = JSON.stringify(data)

    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
    if (this.readyState == XMLHttpRequest.DONE) {
      if (this.status == 201){
      console.log(this.readyState)
      console.log(this.responseText);
      // Récupération de la réponse du serveur
      localStorage.setItem("orderResponse", this.responseText);
      // Redirection vers la page de confirmation
      
      window.location.href = "confirm.html"; 
      } 
    
    else {
      console.log("Administration : ERROR");
        }
      }
    }
  
    request.open('POST', url)
    request.setRequestHeader("Content-Type", "application/json");
    request.send(newData);
    

  }
    )}