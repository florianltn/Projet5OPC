var getProduct = "http://localhost:3000/api/cameras/"
var getId = window.location.search
var clearId = getId.split("?")
var productId = clearId[1]
var getUrl = getProduct.concat(productId)


fetch(getUrl)
  .then(response => response.json())
  .then(item => {

  let prix = item.price / 10000;

  let card =
      `<div class="card mb-3" style="max-width: 1024px;">
        <div class="row" id="productcontain">
          <div class="col-md-6">
            <img id="image" src="${item.imageUrl}" class="card-img" alt="${item.name}">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h2 class="card-title h5">${item.name}</h2>
              <p class="card-text">${item.description}</p>
              <label for="lenses">Selectionner la lentille</label>
              <select id="lenses" class="form-control form-control-sm"></select>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <small id="prix" class="text-muted">${prix.toFixed(2)} €</small>
              
            <div id="quantity">Quantité
              <button type="button" onclick="decrease()">-</button>
              <input type="text" id="qinput" value="1">
              <button type="button" onclick="increase()">+</button>
            </div>
            <div>
              <button id="addPanier" type="button" class="btn btn-sm btn-secondary">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  //detail produit
  const detailproduits = document.getElementById('detailproduits')
  detailproduits.innerHTML += card;

  //ajout des lentilles
  var lenses = item.lenses;
  console.log(item.lenses)

  let selectionChoix = document.getElementById('lenses');
  console.log(selectionChoix);
  for(let lense of item.lenses){
      let x =`<option value="${lense}">${lense}</option>`;
  selectionChoix.innerHTML += x;
   }

  //synchro ajout panier click button
  addPanier.addEventListener('click', e => {
    e.preventDefault();

  // ajout au panier
  var data = {	
    nom: item.name,
    photo: item.imageUrl,
    lentille: item.lenses,
    description: item.description,
    id: item._id,
    quantité: qinput.value,
    prix: prix.toFixed(2),
  };
  
  const numero = localStorage.length + 1;
  const orinoco = 'orinoco';
  localStorage[orinoco + numero] = JSON.stringify(data);
    
  })

})
.catch(function (error){
  console.log('Il y a eu un problème avec l\'opération fetch: ' + error);
  alert('La connexion au serveur a échouée !');
});





// Bouton quantité
function increase(){
  var a = 1;
  var textBox = document.getElementById("qinput");
  textBox.value++;
  
}    
function decrease(){
  var textBox = document.getElementById("qinput");
  if (textBox.value > 1){
  textBox.value--;
  }
}

