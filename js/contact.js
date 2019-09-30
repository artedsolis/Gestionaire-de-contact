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

var name1 = ("Nom : " + perso1.nom + " , prénom: " + perso1.prenom);
var name2 = ("Nom : " + perso2.nom + " , prénom: " + perso2.prenom);

// tableau conteneur des contacts
//var contactTab = [];
//contactTab.push(name1);
//contactTab.push(name2);

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
      //for (var i = 0; i < contactTab.length; i++) {
      console.log(name1);
      console.log(name2);
      console.log(newName);
      //}
      break;
    case 2:
      var nom = prompt("Entrer le nom de la personne");
      var prenom = prompt("Entrer le prenom de la personne");
      var newPerson = Object.create(Contact);
      newPerson.nom = nom;
      newPerson.prenom = prenom;
      var newName = ("Nom : " + newPerson.nom + " , prénom : " + newPerson.prenom);
      console.log(newName);
      console.log("Le contact a bien était ajouté !");
      break;
    case 0:
      console.log("Au revoir !");
  }
}
