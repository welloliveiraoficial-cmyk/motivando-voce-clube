const splashScreen = document.getElementById("splashScreen");
const loginScreen = document.getElementById("loginScreen");
const homeScreen = document.getElementById("homeScreen");

const nameInput = document.getElementById("nameInput");
const continueButton = document.getElementById("continueButton");

const userName = document.getElementById("userName");
const profileInitial = document.getElementById("profileInitial");

/* =========================
INICIALIZAÇÃO
========================= */

document.addEventListener("DOMContentLoaded", () => {

const savedName = localStorage.getItem("motivandoUsuario");

setTimeout(() => {

splashScreen.classList.add("hidden");

if (savedName) {
  openHome(savedName);
} else {
  loginScreen.classList.remove("hidden");
}

}, 2600);

});

/* =========================
CONTINUAR
========================= */

continueButton.addEventListener("click", () => {

const name = nameInput.value.trim();

if (!name) {

nameInput.focus();

nameInput.style.borderColor = "#d94b72";

setTimeout(() => {
  nameInput.style.borderColor = "";
}, 1200);

return;

}

localStorage.setItem("motivandoUsuario", name);

openHome(name);

});

/* =========================
ENTER NO CAMPO
========================= */

nameInput.addEventListener("keydown", (event) => {

if (event.key === "Enter") {
continueButton.click();
}

});

/* =========================
ABRIR HOME
========================= */

function openHome(name) {

loginScreen.classList.add("hidden");

homeScreen.classList.remove("hidden");

userName.textContent = name;

profileInitial.textContent =
name.charAt(0).toUpperCase();

}

/* =========================
FRASES MOTIVACIONAIS
========================= */

const motivationalPhrases = [

"Acredite em você. Grandes mudanças começam com pequenos passos.",

"Você não precisa ser perfeito. Precisa apenas continuar.",

"O seu momento pode começar exatamente hoje.",

"Não desista de você. Ainda existem capítulos lindos para viver.",

"Respire fundo. Você já superou dias que achou que não conseguiria.",

"Tenha coragem para recomeçar quantas vezes forem necessárias.",

"Acredite: coisas boas também podem acontecer com você."

];

function changeDailyPhrase() {

const day = new Date().getDate();

const index =
day % motivationalPhrases.length;

const phrase =
motivationalPhrases[index];

const phraseElement =
document.getElementById("dailyPhrase");

if (phraseElement) {
phraseElement.textContent = phrase;
}

}

changeDailyPhrase();

/* =========================
EFEITO NOS CARDS
========================= */

document.querySelectorAll(".feature-card").forEach(card => {

card.addEventListener("click", () => {

card.animate(
  [
    {
      transform: "scale(1)"
    },
    {
      transform: "scale(0.94)"
    },
    {
      transform: "scale(1)"
    }
  ],
  {
    duration: 250,
    easing: "ease-out"
  }
);

});

});
