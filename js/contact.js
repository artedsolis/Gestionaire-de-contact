// objet et prototype  monObjet.maMéthode()

const contact = {
  nom: "Lévise",
  prenom: "Carole"
}

function decrire(nom, prenom) {
  return `${this.prenom}, ${this.nom} travaille dans une biblothèque`;
}

console.log(contact.decrire());

var name1 = ("Nom : " + contact.nom + " , " + "Prenom : " + contact.prenom + ", email : ");

console.log(name1);




// tableau d'acces aux options
const options = ["1 : Lister les contacts", " 2 : Ajouter un contact", " 3 : Quitter"];

console.log("##### Bienvenue dans le gestionaire de contacts ! #####")


options.forEach(option => {
  console.log(option);
});

const option1 = options[0];
const option2 = options[1];
const option3 = options[2];

console.log(options[0]);
console.log(options[1]);
console.log(options[2]);
