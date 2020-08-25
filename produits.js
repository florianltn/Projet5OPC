var home = "http://localhost:3000/api/cameras/"
var id_dynamic = $(item)
var id_produit = concat(home, id_dynamic)

fetch('id_produit')
  .then(response => response.json())
  .then(data => console.log(json))
