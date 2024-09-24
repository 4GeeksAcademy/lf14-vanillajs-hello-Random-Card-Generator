/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  const paloCarta = ["♦", "♥", "♠", "♣"];
  const numeroCarta = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function seleccionarAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function setCardStyles(width, height) {
    const card = document.querySelector(".card");
    card.style.width = width ? width + "rem" : "18rem";
    card.style.height = height ? height + "rem" : "25rem";
  }

  function generarCarta() {
    const randomPalo = seleccionarAleatorio(paloCarta);
    const randomNumero = seleccionarAleatorio(numeroCarta);
    let cartaAleatoria = "";
    let colorPalo = randomPalo === "♥" || randomPalo === "♦" ? "red" : "";

    cartaAleatoria += `
      <div class="paloArriba" style="color: ${colorPalo};">${randomPalo}</div>
      <div class="numeroCarta">${randomNumero}</div>
      <div class="paloAbajo" style="color: ${colorPalo};">${randomPalo}</div>
    `;

    const widthInput = document.getElementById("width");
    const heightInput = document.getElementById("height");

    setCardStyles(widthInput.value, heightInput.value);

    document.querySelector(".card-body").innerHTML = cartaAleatoria;
    const generarButton = document.getElementById("generar");
    generarButton.addEventListener("click", generarCarta);
  }

  generarCarta();
  setInterval(generarCarta, 10000);
};
