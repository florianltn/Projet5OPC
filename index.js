fetch('http://localhost:3000/api/cameras/').then(response => {
    if(response.ok) {
        return response.json();
    } else {
        return Promise.reject(response.status);
    }
})
  .then(produit => {
    for(const item of produit) {
        let prix = item.price / 10000;
        var urlProduit = 'produits.html'
        var pageProduit = urlProduit.concat(item._id)
        console.log(pageProduit)
        console.log(prix)
        let card = 
        `<div class="cam col-xs-12 col-4">
           <div class="card">
            <img class="card-img-top" src="${item.imageUrl}" alt="${item.name}">
            <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-description">${item.description}</p>
            <p class="card-price">${prix.toFixed(2)} €</p>
            <a href="produits.html?${item._id}" class="btn btn-primary">Voir Produit</a>
            </div>
            </div>
        </div>`;
                
        produits.innerHTML += card;

        console.log(item)
    }

      
  }).catch(err => console.log(`Erreur message : ${err}`));
