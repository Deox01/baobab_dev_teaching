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
console.log(studentStatus)
