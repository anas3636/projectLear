/*PREMIER FORMULAIRE By SAID*/

$('#soumettreBoutton').click(function() {
  soumettreFunction();
});
$('#effacerBoutton').click(function() {
  effacerFunction();
});

var donneesArray = ["prenom", "nom", "age", "sexe"];
var donneesArrayElement = [];
for (var i = 0; i < donneesArray.length; i++) {
  donneesArrayElement[i] = document.createElement("p");
}

function soumettreFunction() {
  $('#fichePremierFormulaire').attr("class", "jumbotron");
  $("#fichePremierFormulaire").css({
    'display': 'block',
    'border': '2px solid black',
    'margin-top': '5px'
  });

  var valididy = isValid();
  if (valididy) {
    for (var i = 0; i < donneesArray.length; i++) {
      if (document.getElementById(donneesArray[i]) === age) {
        var birthYear = 2017 - $('.input:eq(' + i + ')').val();
        donneesArrayElement[i].textContent = "ANNEE DE NAISSANCE: " + birthYear;
      } else {
        donneesArrayElement[i].textContent = donneesArray[i].toUpperCase() + ": " + $('.input:eq(' + i + ')').val();
      }
      $('#fichePremierFormulaire').append(donneesArrayElement[i]);
    }
  }
}

function effacerFunction() {
  $('#fichePremierFormulaire').html('');
  for (var i = 0; i < donneesArray.length - 1; i++) {
    $('.input:eq(' + i + ')').val('');
    $('#' + donneesArray[i] + 'Help').text("");
  }
}

function isValid() {
  var testValidity = true;
  for (var i = 0; i < donneesArray.length; i++) {
    if (($('.input:eq(' + i + ')').val() == '') || ($('.input:eq(' + i + ')').text() == null)) {
      $('#' + donneesArray[i] + 'Help').text("Veuillez entrer votre " + donneesArray[i].toUpperCase() + "!");
    } else {
      $('#' + donneesArray[i] + 'Help').text("");
    }
    testValidity = testValidity && ($('.input:eq(' + i + ')').val() != "") && ($('.input:eq(' + i + ')').text() !== null);
  }
  return testValidity;
}



/*******************************************************************/
/*******************************************************************/

/* 2EME FORMULAIRE*/

$("#palindromeBoutton").click(function() {
  console.log("testetste");
  $('#ficheDeuxiemeFormulaire').attr("class", "jumbotron");
  var palindromeElement = document.createElement("p");
  palindromeElement.textContent = $("#palindrome").val();
  if (palindromeElement.textContent === "") {
    $("#palindromeHelp").text("Veuillez entrer votre texte!");
  } else {
    $("#palindromeHelp").text("");
    var resultatElement = document.createElement("span");
    var testTextElement = document.createElement("string");
    testTextElement = $("#palindrome").val();
    var number = 0;
    for (var counter1 = 0; counter1 < Math.trunc(testTextElement.length / 2); counter1++) {
      if (testTextElement[counter1] === testTextElement[testTextElement.length - 1 - counter1]) {
        console.log(counter1 * 1000 + 1000);
      } else {
        number = 1
      }
    }

    if (number === 0) {
      resultatElement.textContent = "est un palindrome.";
    } else {
      resultatElement.textContent = "n'est pas un palindrome.";
    }
    $("#ficheDeuxiemeFormulaire").html('<h2> Résultat: </h2><p id="fichePalindrome">Votre texte </p>');
    $("#fichePalindrome").append(resultatElement);
    $("#ficheDeuxiemeFormulaire").css({
      'display': 'block',
      'border': '2px solid black',
      'padding-left': '10px',
      'margin-top': '5px'
    });
  }
});

$("#palindromeBouttonEffacer").click(function() {
  $("#ficheDeuxiemeFormulaire").html('<h2>Résultat: </h2><br />');
  $("#palindrome").val("");
});


/* 3EME FORMULAIRE*/

var numberTestClick = 1;
$('#plus1').click(function(e) {
  e.preventDefault();
  addNumber();
})
$('#moins1').click(function(e) {
  e.preventDefault();
  deleteNumber();
})
$('#calculerSomme').click(function(e) {
  e.preventDefault();
  calculSomme();
});

function calculSomme() {
  $('#ficheSomme').attr("class", "jumbotron");
  var sigma = 0;
  for (i = 1; i < numberTestClick + 1; i++) {
    sigma = sigma + Number($('#somme' + i).val());
  }
  $('#ficheSomme').html('<h2> Résultat: </h2><p id="sommeCalculee">La somme = ' + sigma + '</p>');
  $('#ficheSomme').css('display', 'block');

}

function addNumber() {
  numberTestClick = numberTestClick + 1;
  $('#autresNombres').append('<form id=form' + numberTestClick + ' ></form>');
  $('#form' + numberTestClick).append('<label for="somme' + numberTestClick + '">Nombre: ' + numberTestClick + ' </label>');
  $('#form' + numberTestClick).append('<input type="number" name="somme' + numberTestClick + '" class="input form-control" id="somme' + numberTestClick + '" placeholder="Nombre" required>');
}

function deleteNumber() {
  if (numberTestClick > 1) {
    $('#form' + numberTestClick).remove();
    numberTestClick = numberTestClick - 1;
  }
}
