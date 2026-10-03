/* const title = document.getElementById("title");
title.textContent = "Welcome to my website";

document.getElementById("btn").addEventListener("click", () => {
  title.style.color = "red";

  //   alert("Un clique sur le boutton");
});

console.log("Hello world");
console.log(typeof "Hello world");
console.log(typeof [1, 2, 3]);
console.log(typeof 112);
console.log(title.textContent);

const firstNumber = 24;
const secondNumber = 6;

console.log("Multiplication");
console.log(firstNumber * secondNumber);

console.log("Addition");
console.log(firstNumber + secondNumber);

console.log("Soustraction");
console.log(firstNumber - secondNumber);

console.log("Division");
console.log(firstNumber / secondNumber);

let nom = "Deo";
let ville = "Goma";
let school = "Afrix Global";
let age = 20;
age = 25;

console.log("J'ai " + age + " ans");
*/

let nom = "Josue";
console.log(nom.toUpperCase());

function toUppercase(name) {
  return name.toUpperCase();
}

let uppercaseResultat = toUppercase("Deogratias");
console.log(typeof uppercaseResultat);

console.log(uppercaseResultat);

let isMajeur;
let age = 10;

if (age > 18) {
  isMajeur = true;
} else {
  isMajeur = false;
}

console.log(isMajeur, typeof isMajeur);

console.log(Number("2000"));

console.log(typeof Boolean(0));
console.log(!Boolean(1));

let prixUnit = 500;
let quantity = 15;
const devise = "CDF";

let prixTotal = prixUnit * quantity;
console.log("Le prix total est de : " + prixTotal + " " + devise);

let note01 = 40,
  note02 = 38,
  note03 = 76,
  note04 = 62;

let moyenne = (note01 + note02 + note03 + note04) / 4;
console.log(
  "La moyenne de " +
    note01 +
    " + " +
    note02 +
    " + " +
    note03 +
    " + " +
    note04 +
    " est de : " +
    moyenne,
);

let etudiantName = "Shukuru";

let mathPoints = 78,
  englishPoints = 60,
  itPoints = 70,
  physicPoints = 52,
  historyPoints = 29,
  geoPoints = 45;

let moyenneNotes =
  (mathPoints +
    englishPoints +
    itPoints +
    physicPoints +
    historyPoints +
    geoPoints) /
  6;
console.log(
  `La moyenne des notes de l'etudiant ${etudiantName} est de : ${moyenneNotes}`,
);

// LES OPERATEURS

// lES CONDITIONS

let userAge = 28;

if (age > 18) {
  console.log("Vous etes majeur");
} else {
  console.log("Vous etes mineur");
}

let note = 50;
if (note >= 80) {
  console.log("Excellent");
} else if (note >= 70) {
  console.log("Tres bien");
} else if (note >= 60) {
  console.log("Bien");
} else if (note >= 50) {
  console.log("Passable");
} else {
  console.log("Echec !");
}

// OPERATEURS LOGIQUES

let number = 3;

if (number % 2 === 0) {
  console.log("Le nombre est pair");
} else {
  console.log("Le nombre est impair");
}
console.log("\n---------------------------------------------");

// Exercise mineur ou mageur

let userAge2 = 17;

if (userAge2 >= 18) {
  console.log("Vous etes majeur!");
} else if (userAge2 < 1 || isNaN(Number(userAge2))) {
  console.log("L'age es invalide!");
} else {
  console.log("Vous etes mineur!");
}

console.log("\n");

// Exercice evaluation etudiant avec moyenne

const studentName = "Julien";

const noteMath = 78;
const noteInfo = 70;
const noteAnglais = 60;
const notePhysique = 52;
const noteHistoire = 29;
const noteGeographie = 45;

const noteMoyenne =
  (noteMath +
    noteInfo +
    noteAnglais +
    notePhysique +
    noteHistoire +
    noteGeographie) /
  6;

let pairOrImpaire = null;

if (noteMoyenne % 2 === 0) {
  pairOrImpaire = "Paire";
} else {
  pairOrImpaire = "Impaire";
}

let studentStatus;
let estAdmis = noteMoyenne >= 50 ? true : false;

if (estAdmis) {
  studentStatus = "Admis";
} else {
  studentStatus = "Non admis";
}

if (noteMoyenne >= 80) {
  console.log(
    ` L'etudiant ${studentName} a eu la mention : Excelent ! ${studentStatus}`,
  );
} else if (noteMoyenne >= 70) {
  console.log(
    ` L'etudiant ${studentName} a eu la mention : Tres bien ! ${studentStatus}`,
  );
} else if (noteMoyenne >= 60) {
  console.log(
    ` L'etudiant ${studentName} a eu avec la mention : Bien ! ${studentStatus}`,
  );
} else if (noteMoyenne >= 50) {
  console.log(
    ` L'etudiant ${studentName} a eu la mention : Passable ! ${studentStatus}`,
  );
} else {
  console.log(
    `Desole cher ${studentName} vous avez echoue : Echec ! ${studentStatus}`,
  );
}

console.log(`La moyenne ${noteMoyenne} est : ${pairOrImpaire}`);
console.log(studentStatus);
console.log("\n");

// Exercice donner a l'utilisateur l'acces

let userName = "Tresor";
let useAge = 9;
let isPremium = true;

if (useAge >= 18 && isPremium) {
  console.log("Acces autorisé avec succes !");
} else {
  console.log("Acces refusé Desolé !");
}

// Les boucles en js

// 1. Boucle for
// for (let i = 0; i <= 75; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
let num = 5;
for (let i = 1; i <= 12; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
// for (let i = 35; i >= 1; i--) {
//   console.log(i);
// }

// 2. Boucle while
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
  if (i === 5) {
    break;
  }
}

// Boucle do....while

let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 5);

const num2 = 7;
for (let i = 1; i <= 12; i++) {
  console.log(`${num2} * ${i} = ${num2 * i}`);
}

console.log(`\n---------------------------------`);

for (let i = 0; i <= 30; i++) {
  if (i % 3 !== 0) {
    continue;
  }
  console.log(i);
}

console.log(
  `\n--------------- Calcule somme de nombres 1 a 10 ------------------`,
);
let num3 = 0;
for (let n = 1; n <= 10; n++) {
  num3 += n;
}

console.log(num3);

console.log(`\n--------------- Table de multiplication ------------------`);

for (let i = 1; i <= 12; i++) {
  for (let j = 1; j <= 12; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log(`\n`);
}

// Les functions
// function saluer() {
//   console.log("Bonjour, comment allez-vous ?");
// }

// saluer();
// saluer();

// // les parametres et les arguments
// function greet(name, age) {
//   console.log(`Bonjour ${name}, vous avez ${age} ans.`);
// }

// greet("Deo", 19);
// greet("Julien", 20);
// greet("Josue", 25);
// greet("Guy", 27);

// function mutiplication(num1, num2, num3) {
//   console.log(`${num1} * ${num2} * ${num3} = ${num1 * num2 * num3}`);
// }

// mutiplication(2, 3, 5);

// // return
// function addition(a, b) {
//   return a + b;
// }

// let result = addition(10, 5);
// console.log(addition(5, 6));
// console.log(result);

// // Exercice calculer la moyenne en utilisant une fonction
// function calculerMoyenne(note1, note2, note3, nameEtudiant) {
//   if ((note1 + note2 + note3) / 3 >= 50) {
//     return `L'etudiant ${nameEtudiant} a reussi.`;
//   } else {
//     return `L'etudiant ${nameEtudiant} a echoue`;
//   }
// }

// console.log(calculerMoyenne(56, 46, 80, "Deo"));

// // Boucle dans une fonction

// function afficherNombre(limite) {
//   for (let i = 0; i <= limite; i++) {
//     console.log(i);
//   }
// }

// afficherNombre(5);

// // Valeur par defaut
// function saluerValeur(nom = "Visiteur") {
//   console.log(`Bonjour ${nom}`);
// }

// saluerValeur();
// saluerValeur("Djodjo");

// // Fonctions anonymes
// const additionner = function (a, b) {
//   return a + b;
// };

// console.log(additionner(45, 35));

// // Fonction fleche

// const division = (a, b) => {
//   return a / b;
// };
// console.log(division(15, 5));

// Exercice

function addition(a, b) {
  return a + b;
}

function soustraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return "Division par zero impossible";
  } else {
    return a / b;
  }
}

console.log(addition(10, 5));
console.log(soustraction(10, 5));
console.log(multiplication(10, 5));
console.log(division(10, 0));

// Exercice une fonction qui calcule la mention de la moyenne

function afficherMentionMoyenne(note1, note2, note3) {
  const moyenne = (note1 + note2 + note3) / 3;

  if (moyenne >= 80) {
    return "Excellent";
  } else if (moyenne >= 70) {
    return "Tres bien";
  } else if (moyenne >= 60) {
    return "Bien";
  } else if (moyenne >= 50) {
    return "Passable";
  } else {
    return "Echec";
  }
}

console.log(afficherMentionMoyenne(80, 70, 90));

// Exercice : Une fonction qui affiche la table de multiplication d'un nombre entre par le user

function afficherTableDeMultplication(nombre) {
  for (let i = 1; i <= 12; i++) {
    console.log(`${nombre} * ${i} = ${nombre * i}`);
  }
}

afficherTableDeMultplication(5);
