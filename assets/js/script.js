console.log("Javascript Running");
const openCard = document.querySelector("#open");
const card = document.querySelector("#card");
const card2 = document.querySelector("#card2");
const audioElement = new Audio("./assets/audio/page.mp3");
let isOpen = false;

openCard.addEventListener("click", (e) => {
  audioElement.play().catch((error) => {
    console.error("Error al reproducir el audio:", error);
  });
  if (isOpen) {
    card.classList.remove("card--active");
    card2.classList.remove("card2--active");
    openCard.innerHTML = "Abrir";
    isOpen = false;
  } else {
    card.classList.add("card--active");
    card2.classList.add("card2--active");
    openCard.innerHTML = "Cerrar";
    isOpen = true;
  }
});
