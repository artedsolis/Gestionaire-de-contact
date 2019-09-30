// objet et constructeur

var Contact = {
  //initialisation de contact
  init: function (nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  },
  // decrire
  decrire: function () {
    return `| ${this.nom} | ${this.prenom} |`;
  }
};

var perso1 = Object.create(Contact);
perso1.nom = "Lévisse";
perso1.prenom = "Carole";

var perso2 = Object.create(Contact);
perso2.nom = "Nelsonne";
perso2.prenom = "Mélodie";


// tableau conteneur des contacts
var contactTab = [];
contactTab.push(perso1);
contactTab.push(perso2);

//console.log(contactTab);

// tableau d'acces aux options
const options = ["1 : Lister les contacts", " 2 : Ajouter un contact", " 0 : Quitter"];

console.log("##### Bienvenue dans le gestionaire de contacts ! #####")

//options.forEach(option => {
//  console.log(options);
//});

// Boucle while & condition switch

while (choix !== 0) {
  for (var i = 0; i < options.length; i++) {
    console.log(options[i]);
  };

  var choix = Number(prompt("Choisissez une option"));
  switch (choix) {
    case 1:
      for (var i = 0; i < contactTab.length; i++) {
        console.log(contactTab);
      }
      break;
    case 2:
      var nom = prompt("Entrer le nom de la personne");
      var prenom = prompt("Entrer le prenom de la personne");
      var nomContact = "contact" + Contact.length;
      nomContact = Object.create(Contact);
      nomContact.decire;
      contactTab.push(nomContact);
      console.log("Le contact a bien était ajouté !");
      break;
    case 0:
      console.log("Au revoir !");
  }
}
