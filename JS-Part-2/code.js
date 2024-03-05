//console.log("Bonsoir!!!");

//For
/*
var nombre0 = 0;
var nombre1 = 1;
var nombre10 = 10;

console.log(nombre0);
console.log(nombre1);
console.log(nombre10);
*/
/*for (var i = 0; i <= 10; i = i + 2) {
	console.log(i);
}*/

//While
/*
var i = 1;
while (i <= 10) {
	console.log(i);
	i += 2;
}
*/
//Structures conditionnelles
/*
var nombre = 25;
if (25 > nombre) {
	console.log(`25 est superieur a ${nombre}`);
} else if (25 == 25) {
	console.log(`25 est egale a ${nombre}`);
} else {
	console.log(`25 est inferieur a ${nombre}`);
}
*/

//Fonctions
// Def. un bloc de code reutilisable avec un appel de la dite fonction
//Ex. ecrire une fonction qui affiche la somme de 2 nombres.

/*function sommeD2Nombres(nombre1, nombre2) {
	console.log(nombre1 + nombre2);
}*/

//Ex. ecrire une fonction qui retourne la somme de 2 nombres.
/*
function sommeD2Nombres(nombre1, nombre2) {
	resultat = nombre1 + nombre2;
	return resultat;
}*/

/*
Syntaxe d'une fonction en JS 
 	function nom_function(parametre1, parametre2, ...){
	  	instructions;
	}
*/

//EXERCICE:
/*
Ecrire une fonction TesterNombre qui retourne True si deux nombres sont
egaux et retourne nombre1 est superieur a nombre2 si n1>n2 et retourne
nombre1 est inferieur a nombre2 si n1<n2
*/
function testerNombre(n1, n2) {
	if (n1 > n2) {
		return `${n1} est superieur a ${n2}`;
	} else if (n1 < n2) {
		return `${n1} est inferieur a ${n2}`;
	} else {
		return true;
	}
}

//console.log(testerNombre(-100, -100));
/*
Ecrire une fonction RepeterChaine qui retourne une chaine n fois avec la
chaine et n passer en parametre 
Ex. RepeterChaine("Bonsoir", 1) 
Resultat : "Bonsoir"
*/

//Fonction
function RepeterChaine(chaine, n) {
	var chaine2 = ""; //222

	var i = 0; //2
	while (n > i) {
		chaine2 = chaine2 + chaine;
		console.log(chaine2);
		i++;
	}
}

// 10>0
//2
//10>1
//22
//10>2
//222
//C'est bon: // It is good
// bonbon : goodgood
//Appel de la fonction
RepeterChaine(2, 10);
//Array
//Objects
/*var nom = "papa";
console.log(nom.length);*/
