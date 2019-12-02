//recuperation de l'image se trouvant sur html
var image = document.getElementById('image')
//ajout d'un évenement "au click" sur mon image et appel de la fonction "size"
image.addEventListener ('click', size);
//declaration de la fonction size
function size() {
  // style.width permet de modifier la taille d'une image
  image.style.width ='900px';
}
