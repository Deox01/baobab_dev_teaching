// Recuperer les elements html.

// Avec getElementById().
const titre = document.getElementById("titre");
console.log(titre.textContent);
console.log(titre);

// Avec querySelector().
const text = document.querySelector(".text");
console.log(text);

// querySelectorAll() : C'est pour selectionner plusieurs elements ca retourne une collection d'elements NodeList().
const messages = document.querySelectorAll(".message");
console.log(messages);

messages.forEach((msg) => {
  msg.style.color = "green";
  console.log(msg.textContent);
});

// textContent permet aussi de modifier le contenu d'un element.

// Utilisation de innerHTML.
const contenuDiv = document.getElementById("contenu");
contenuDiv.innerHTML =
  "<h2> She patiently waited for his number to be called. </h2> <p> Mom tended to be that way. She would keep insisting until you wore down and did what she wanted. So, here she sat, patiently waiting for her number to be called.</p>";
console.log(contenuDiv);

const btn = document.getElementById("btn");
btn.style.padding = "5px";
btn.style.backgroundColor = "black";
btn.style.color = "white";
btn.style.border = "none";

// Manipulation des attributs
const img = document.getElementById("img");
img.src = "./images/headphones.jpg";
img.setAttribute("width", 600);
img.setAttribute("alt", "Headphones");

// Lire la valeur d'un attribut
const altImg = img.getAttribute("alt");
console.log(altImg);

// Supprimer un attribut
img.removeAttribute("alt");
console.log(img.getAttribute("alt"));

// Modifier la valeur d'un attribut
img.setAttribute("src", "./images/abandoned.jpg")
