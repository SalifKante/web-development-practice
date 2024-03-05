// Utiliser une boucle pour affiche 5 fois "Bonjour"
// Avec For et While

//For

/*console.log("For Loop");
for (var i = 0; i <= 5; i++) {
	console.log("Bonjour");
}

//While
console.log("While Loop");
var x = 0;
while (x < 5) {
	console.log("X est actuellement: ", x);
	if (x === 3) {
		console.log("X est TROIS!!!");
		break;
	}
	console.log("X est inferieure à 5, Ajouter 1 à X");
	x++;
}
//Afficher les chiffres pairs de 0 à 11
*/

/*var num = 1;
while (num < 11) {
	if (num % 2 == 0) {
		console.log(`${num}`);
	}
	num++;
}
*/
// Afficher tous les nombres impairs de 1 à 25

//FOR Loop
/*
var word = "ABABABABAB";
for (var i = 0; i < word.length; i += 2) {
	console.log(word[i]);
}
*/

var firstName = prompt("Prenom: ");
var lastame = prompt("Nom: ");
var age = prompt("Age: ");
var height = prompt("Quel est votre poids : ");
var petName = prompt("Le nom de l'animal: ");

//Logic

//Four Conditions
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

//Name Condition
if (firstName[0] == lastame[0]) {
	nameCond = true;
} else {
	nameCond = false;
}

//Age Condition
if (age > 20 && age < 30) {
	ageCond = true;
} else {
	ageCond = true;
}
//Height Condition
if (height >= 170) {
	heightCond = true;
} else {
	heightCond = false;
}

//PET Condition
if (petName[petName.length - 1] === "y") {
	petCond = true;
} else {
	petCond = false;
}

if (nameCond && ageCond && heightCond && petCond) {
	console.log("YES");
} else {
	console.log("NO");
}
