  let infoProduit = '';
  var prixTotal = 0;


    for(var i=1; i < localStorage.length + 1; i++){
      let panier = console.log(localStorage.getItem("orinoco" + i));

      infoProduit = JSON.parse(localStorage.getItem("orinoco" + i));

      prixTotal = prixTotal + (infoProduit.prix * infoProduit.quantité);

      document.getElementById('panier').innerHTML +=
      `<div class="container mb-4">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Produit</th>
                            <th scope="col" class="text-center">Quantité</th>
                            <th scope="col" class="text-right">Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="${infoProduit.photo}" class="photoproduit" alt="photo produit"</td>
                            <td>${infoProduit.nom}</td>
                            <td class="textquantité">${infoProduit.quantité}</td>
                            <td class="text-right">${infoProduit.prix}€</td>                           
                        </tr>
                    </tbody> 
                </table>      
            </div>
          </div>
        </div>
       </div>`             
    
    document.getElementById('total').innerHTML = 
      `
      <div class="order_total">
        <div class="order_total_content text-md-right">
          <div class="order_total_title">Prix total:</div>
          <div class="order_total_amount">${prixTotal}€</div>
        </div>
      </div>
      <div class="cart_buttons"> 
        <button type="button" onclick=window.location.href='index.html'; id="continueCommand" class="button cart_button_clear">Continuer mes achats</button>
      </div>`;
  
     
    }

//HTML Formulaire

function validationForm(){
  let checkString = new RegExp (/^[A-Z][a-z]+$/);
  let checkMail = new RegExp (/[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/);
  let checkAdresse = new RegExp (/^[^@&\"()!_$*€£`%+=\/;?#]+$/);
  let checkCity = new RegExp (/^[^@&\"()!_$*€£`%+=\/;?#0-9]+$/);  

  if (checkString.test(document.getElementById("formPrenom").value) == false) {
    alert("Votre prénom doit commencer par une majuscule et continuer avec des minuscules et ne doit pas comporter de chiffres ou caractères spéciaux");
    return false;
  }  
  else if (checkString.test(document.getElementById("formNom").value) == false) {
    alert("Votre nom doit commencer par une majuscule et continuer avec des minuscules et ne doit pas comporter de chiffres ou caractères spéciaux");
    return false;
  } 
  else if (checkMail.test(document.getElementById("formEmail").value) == false) {
    alert("Votre email doit être au format abc@abc.abc");
    return false;
  } 
  else if (checkAdresse.test(document.getElementById("formAdresse").value) == false) {
    alert("Votre adresse contient un ou plusieurs des caractères interdits, est incomplète ou n'est pas renseignée.");
    return false;
  } 
  else if (checkCity.test(document.getElementById("formVille").value) == false) {
    alert("Le nom de votre ville doit commencer par une majuscule et continuer avec des minuscules et ne doit pas comporter de chiffres ou caractères spéciaux");
    return false;
  } 
  else {
    validation();
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
      <label for="validationDefault03">Email*</label>
      <input type="email" class="form-control" id="formEmail" placeholder="Email" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault04">Adresse complète*</label>
      <input type="text" class="form-control" id="formAdresse" placeholder="Adresse" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Ville*</label>
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
      //setItem pour récup sur confirm
      localStorage.setItem("totalOrder", prixTotal);
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
   
  