 /* II razonamiento 
 
 const Contacto = {
  nombre: nombre,
  apellido: apellido,

  describir: function () {
    var contacto = this.nombre + this.apellido;
    return Contacto;
  }
}

var persona1 = Object.create(Contacto);
persona1.nombre = "Angela";
persona1.apellido = "Molina";

var persona2 = Object.create(Contacto);
persona2.nombre = "Pedro";
persona2.apellido = "Ramirez";

console.log(persona1.describir);
console.log(persona2.describir);*/




 //I.premier razonamiento = 1 cuadro

 /* Bienvenue
    Liste de choix possibles
    1. lister les contacts
       Choisir une option
    2. Ajouter un contact
       Choisir un option
    3. Quitter
       Choisir une option */

 console.log("Bienvenue dans le gestionaire de contacts !")

 const options = [" 1 : Lister les contacts", " 2 : Ajouter un contact", " 3 : Quitter"];

 options.forEach(option => {
   console.log(option);
 });

 const option1 = options[0];
 const option2 = options[1];
 const option3 = options[2];

 console.log(options[0]);
 console.log(options[1]);
 console.log(options[2]);

 const contact1 = {
   appellido: "Bradford",
   nombre: "Rodrigo"
 }

 const contact2 = {
   appellido: "Stendell",
   nombre: "Jaime"
 }

 const contactNew = {
   apellido: newLname,
   nombre: newFname
 }

 var name1 = ("Nom : " + contact1.appellido + " , " + "Prenom : " + contact1.nombre)
 var name2 = ("Nom : " + contact2.appellido + " , " + "Prenom : " + contact2.nombre);
 var newFname;
 var newLname;


 console.log(name1);
 console.log(name2);

 var decide;

 //var annonce = prompt("Prenez une option");
 //var introContact = prompt("Ajoutez un nouveau contact") + prompt("Introduisez un prenom") + prompt("Introduisez un nom");

 /*if (decide == 1) {
   console.log(listaContactos[0]);
   console.log(listaContactos[1]);
   console.log(listaContactos[2]);
 } else {
   alert(annonce);
 };

 if (2) {

 } else {
   alert(annonce);
 };*/
