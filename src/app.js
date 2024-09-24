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

    document.querySelector(".card-body").innerHTML = cartaAleatoria;
    const generarButton = document.getElementById("generar");
    generarButton.addEventListener("click", generarCarta);
  }
  generarCarta();
  setInterval(generarCarta, 10000);
};
