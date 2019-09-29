// objet et constructeur

var Personne = {
  nom: "",
  prenom: "",

  // Retorna la descripción del personaje
  descrire: function () {
    var description = "Nom : " + this.nom + " , Prenom : " +
      this.prenom;
    return description;
  },

};

var perso1 = Object.create(Personne);
perso1.nom = "Lévisse";
perso1.prenom = "Carole";

var perso2 = Object.create(Personne);
perso2.nom = "Nelsonne";
perso2.prenom = "Mélodie";

console.log(perso1.descrire());
console.log(perso2.descrire());


// tableau conteneur des contacts
var contact = [];
contact.push(perso1);
contact.push(perso2);


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
