/*PREMIER FORMULAIRE*/
/*
document.getElementById("sexe").value = "";
//Ici il faut créer une fonction appart
document.getElementById("premierBoutton").addEventListener("click", function (e) {
  var prenomElement = document.createElement("p");
  prenomElement.textContent = document.getElementById("prenom").value;
  var nomElement = document.createElement("p");
  nomElement.textContent = document.getElementById("nom").value;
  var ageElement = document.createElement("p");
  ageElement.textContent = document.getElementById("age").value;
  var sexeElement = document.createElement("p");
  sexeElement.textContent = document.getElementById("sexe").value;
  if (prenomElement.textContent === ""){
    document.getElementById("prenomHelp").textContent = "Veuillez entrer votre prénom!";
  } else if (nomElement.textContent === ""){
    document.getElementById("prenomHelp").textContent = "";
    document.getElementById("nomHelp").textContent = "Veuillez entrer votre nom!";
  } else if (ageElement.textContent === ""){
    document.getElementById("nomHelp").textContent = "";
    document.getElementById("ageHelp").textContent = "Veuillez entrer votre âge!";
  } else if (sexeElement.textContent === ""){
    document.getElementById("ageHelp").textContent = "";
    document.getElementById("sexeHelp").textContent = "Veuillez choisir votre sexe!(Zamel makaynch :D)";
  } else {
    document.getElementById("prenomHelp").textContent = "";
    document.getElementById("nomHelp").textContent = "";
    document.getElementById("ageHelp").textContent = "";
    document.getElementById("sexeHelp").textContent = "";
document.getElementById("fichePremierFormulaire").innerHTML = '<h2> Votre fiche: </h2><p>Prénom: <span id="fichePrenom"></span></p><p id="ficheNom">Nom: </p><p id="ficheAge">Année de naissance: </p><p id="ficheSexe">Sexe: </p>';
document.getElementById("fichePrenom").textContent += prenomElement.textContent;
document.getElementById("ficheNom").textContent += nomElement.textContent;
document.getElementById("ficheAge").textContent += 2017 - ageElement.textContent;
document.getElementById("ficheSexe").textContent += sexeElement.textContent;
document.getElementById("fichePremierFormulaire").style = "display: block; border: 2px solid black; padding-left: 10px; margin-top: 5px;";
}
});

document.getElementById("premierBouttonEffacer").addEventListener("click", function (e) {
document.getElementById("fichePremierFormulaire").innerHTML = '<h2> Votre fiche: </h2><p>Prénom: <span id="fichePrenom"></span></p><p id="ficheNom">Nom: </p><p id="ficheAge">Année de naissance: </p><p id="ficheSexe">Sexe: </p>'
document.getElementById("prenom").value = "";
document.getElementById("nom").value = "";
document.getElementById("age").value = "";
document.getElementById("sexe").value = "";
});

*/
//**************************************************************/
/*PREMIER FORMULAIRE By SAID*/
document.getElementById("soumettreBoutton").addEventListener("click", soumettreFunction);
document.getElementById("effacerBoutton").addEventListener("click", effacerFunction);

var donneesArray = ["prenom", "nom", "age", "sexe"];
var donneesArrayElement = [];
for (var i =0; i < donneesArray.length; i++ ) {
  donneesArrayElement[i] = document.createElement("p");
  }

function soumettreFunction () {
	var valididy = isValid();
    if(valididy){
		for (var i =0; i < donneesArray.length; i++ ) {
		if (document.getElementById(donneesArray[i]) === age) {
			var birthYear = 2017 - document.getElementById(donneesArray[i]).value;
     donneesArrayElement[i].textContent = donneesArray[i].toUpperCase() +": " + birthYear;
     document.getElementById("fichePremierFormulaire").appendChild(donneesArrayElement[i]);
		} else {
     donneesArrayElement[i].textContent = donneesArray[i].toUpperCase() +": " + document.getElementById(donneesArray[i]).value;
     document.getElementById("fichePremierFormulaire").appendChild(donneesArrayElement[i]);
        }
    }
}
}

function effacerFunction () {
		for (var i =0; i < donneesArray.length; i++ ) {
	document.getElementById(donneesArray[i]).value = "";
	donneesArrayElement[i].textContent = "";
    document.getElementById("fichePremierFormulaire").appendChild(donneesArrayElement[i]);
    document.getElementById(donneesArray[i]+"Help").textContent = "";
	}
}

function isValid () {
	var testValidity = true;
	for (var i =0; i < donneesArray.length; i++ ) {
		if (document.getElementById(donneesArray[i]).value === "") {
			document.getElementById(donneesArray[i]+"Help").textContent = "Veuillez entrer votre " + donneesArray[i].toUpperCase() + "!";
		} else {
		document.getElementById(donneesArray[i]+"Help").textContent = "";
		}
	testValidity = testValidity && (document.getElementById(donneesArray[i]).value !== "");
	}
	return testValidity;
}



/*******************************************************************/
/*PREMIER FORMULAIRE By Anas*/
/*
document.getElementById("premierBouttonAnas").addEventListener("click",doOnClick)

//Jamais ecrire une fonction Call back directement dans l'evenement
//Ici doOnClick est un callback donc je le met apart

//Il faut aussi toujours à penser à ecrire du code groupe si tu fait du copier coller
//C'est que tu peut ecrir une fonction ici createElement est unbon example
function doOnClick(e){
    // Cette technique de ecrire un tableau avec tous les ellement permet de boucler sur un tableau
    // et facilement trouver les bugs mais surtout facilement ajouter un champs dans le fomulaire
    // Toujours penser à la maintenabilité du Code !!!
    var formFields =["prenom","nom","age","sexe"]
    for (var i = 0; i < formFields.length; i++) {
      createElement(formFields[i]);
    }
    var formValid = isFormValid(formFields);
    if(formValid){
      // Cette partie n'est pas terrible puisque si j'ajoute un ellement dans formFields ca va pas etre pris en compte
      // A toi de corriger cette partie
      document.getElementById("fichePremierFormulaire").innerHTML = '<h2> Votre fiche: </h2><p>Prénom: <span id="fichePrenom"></span></p><p id="ficheNom">Nom: </p><p id="ficheAge">Année de naissance: </p><p id="ficheSexe">Sexe: </p>';
      document.getElementById("fichePrenom").textContent += document.getElementById("prenom").value ;
      document.getElementById("ficheNom").textContent += document.getElementById("nom").value ;
      document.getElementById("ficheAge").textContent += 2017 - document.getElementById("age").value ;
      document.getElementById("ficheSexe").textContent += document.getElementById("sexe").value ;
      document.getElementById("fichePremierFormulaire").style = "display: block; border: 2px solid black; padding-left: 10px; margin-top: 5px;";
    }
}
//Create Ellement est une fonction qui créé un ellement a base d'un nom
function createElement(name){
  var theElement = document.createElement("p");
  theElement.textContent = document.getElementById(name).value;
  return theElement;
}
//Cette fonction est plus simple est permet de tester si la form est valid
function isFormValid(formFields){
  var isValid = true;
  for (var i = 0; i < formFields.length; i++) {
    if(document.getElementById(formFields[i]).value  === ""){
      document.getElementById(formFields[i] + "Help").textContent = "Veuillez entrer votre " + formFields[i]+ "!";
    }else{
      document.getElementById(formFields[i] + "Help").textContent = "";
    }
    isValid = isValid && (document.getElementById(formFields[i]).value  != "")
  }
  return isValid;
}
*/
/*******************************************************************/

/* 2EME FORMULAIRE*/
/*
document.getElementById("palindromeBoutton").addEventListener("click", function (e) {
  var palindromeElement = document.createElement("p");
  palindromeElement.textContent = document.getElementById("palindrome").value;
if (palindromeElement.textContent === ""){
  document.getElementById("palindromeHelp").textContent = "Veuillez entrer votre texte!";
} else {
  document.getElementById("palindromeHelp").textContent = "";
  var resultatElement = document.createElement("span");
  var testTextElement = document.createElement("string");
  testTextElement = document.getElementById("palindrome").value;
  var number = 0;
    for (var counter1 = 0; counter1 < Math.trunc(testTextElement.length/2); counter1++)
    {
      if (testTextElement[counter1] === testTextElement[testTextElement.length - 1 - counter1]) {
          console.log(counter1*1000+1000);
      } else {number = 1}
    }

if (number === 0){
  resultatElement.textContent = "est un palindrome.";
} else {
  resultatElement.textContent = "n'est pas un palindrome.";
}
document.getElementById("ficheDeuxiemeFormulaire").innerHTML = '<h2> Résultat: </h2><p id="fichePalindrome">Votre texte </p>';
document.getElementById("fichePalindrome").appendChild(resultatElement);
document.getElementById("ficheDeuxiemeFormulaire").style = "display: block; border: 2px solid black; padding-left: 10px; margin-top: 5px;";
}
});

document.getElementById("palindromeBouttonEffacer").addEventListener("click", function (e) {
document.getElementById("ficheDeuxiemeFormulaire").innerHTML = '<h2>Résultat: </h2><br />';
document.getElementById("palindrome").value = "";
});
*/

/* 3EME FORMULAIRE*/
/*
var buttonObject = {
  textHTML: '<label for="somme1">Nombre: </label><input type="number" name="somme1" id="somme1" placeholder="Nombre" required> <button id="plus1" style="display: default;">+</button> <span id="somme1Help"></span>',

};


var numberTestClick = 1;
for (var i = 1; i < 2; i++ ) {
document.getElementById("plus"+numberTestClick).addEventListener("click", function (e) {
  var objectElement1 = document.createElement("string");
  var number2 = Object.create(buttonObject);
  document.querySelector
  objectElement1.textContent = number2.textHTML;
document.getElementById("autresNombres").innerHTML = objectElement1.textContent;
console.log("plus"+numberTestClick+"test");

});
}
*/
