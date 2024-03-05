var names = [];

// Function to add a name

function addNewName() {
	var newName = prompt("Quel nom voulez-vous ajoutez?");
	names.push(newName);
}

// Function to remove a name

function removeName() {
	var remName = prompt("Quel nom voulez-vous supprimer?");
	var index = names.indexOf(remName);
	names.splice(index, 1);
}

// Display names
function displayNames() {
	console.log(names);
}

// Start Web-App
var start = prompt("Voulez-vous commencez le NAMES web-app? y/n");
var request = "empty";

if (start === "y") {
	while (request !== "quit") {
		request = prompt(
			"Voulez-vous commencer une action : ajout, sup, aff, oubien quit?"
		);
		if (request == "ajout") {
			addNewName();
		} else if (request == "sup") {
			removeName();
		} else if (request == "aff") {
			displayNames();
		} else {
			request = "n";
			//alert("Non reconnu");
		}
	}
}
//alert("Merci d'utilisez le web-app! SVP actualiser la page pour recommencer");

/*var nom = prompt("Donner un String : ");

function stringLength(parametre) {
	console.log(parametre.length);
}

stringLength(nom);
*/
