// objet et constructeur

var Personaje = {
  nom: "",
  prenom: "",

  // Retorna la descripción del personaje
  describir: function () {
    var descripcion = "Nom : " + this.nom + " , Prenom : " +
      this.vida;
    return descripcion;
  },

};

var perso1 = Object.create(Personaje);
perso1.nom = "Lévisse";
perso1.prenom = "Carole";

var perso2 = Object.create(Personaje);
perso2.nom = "Nelsonne";
perso2.pre = "Mélodie";

console.log(perso1.describir());
console.log(perso2.describir());


//var name1 = ("Nom : " + contact.nom + " , " + "Prenom : " + contact.prenom + ", email : ");

//console.log(name1);

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
