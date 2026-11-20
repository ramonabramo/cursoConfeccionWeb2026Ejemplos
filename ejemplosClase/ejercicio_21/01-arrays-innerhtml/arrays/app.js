/* =========================================================
   TEORÍA · Arrays
   ---------------------------------------------------------
   - Un array guarda varios valores en una sola variable
   - Las posiciones (índices) empiezan en 0
   - length = número de elementos; el último está en length - 1
   - push() añade al final
   ========================================================= */

// 1. Creamos un array con dos elementos
const frutas = ["manzana", "pera"];

// 2. Arrays paralelos: la posición une cada nombre con su nota
const nombres = ["Ana", "Luis", "Eva"];
const notas = [7, 4.5, 9];

// 3. Referencias
const estado = document.getElementById("estado");
const inputFruta = document.getElementById("nuevaFruta");
const salida = document.getElementById("salida");

// Mostramos el array al cargar. join(", ") lo convierte en texto
estado.textContent = `[${frutas.join(", ")}]  ·  length = ${frutas.length}`;

// 4. push(): añadir al final
document.getElementById("btnPush").addEventListener("click", function () {
  const fruta = inputFruta.value.trim();
  if (fruta === "") {
    salida.textContent = "Escribe una fruta primero.";
    return;
  }

  frutas.push(fruta);

  estado.textContent = `[${frutas.join(", ")}]  ·  length = ${frutas.length}`;
  salida.textContent = `frutas.push("${fruta}")\nAhora el array tiene ${frutas.length} elementos.`;
  inputFruta.value = "";
  inputFruta.focus();
});

// 5. Acceder por posición
document.getElementById("btnPrimero").addEventListener("click", function () {
  salida.textContent = `frutas[0] → "${frutas[0]}"`;
});

document.getElementById("btnUltimo").addEventListener("click", function () {
  const ultimaPosicion = frutas.length - 1;
  salida.textContent =
    `frutas.length       → ${frutas.length}\n` +
    `frutas.length - 1   → ${ultimaPosicion}\n` +
    `frutas[${ultimaPosicion}]           → "${frutas[ultimaPosicion]}"\n\n` +
    `frutas[${frutas.length}] (fuera)    → ${frutas[frutas.length]}  ← no existe`;
});

// 6. Recorrer con un for clásico
document.getElementById("btnRecorrer").addEventListener("click", function () {
  let texto = "";
  for (let i = 0; i < frutas.length; i++) {
    texto += `Vuelta ${i}: frutas[${i}] = "${frutas[i]}"\n`;
  }
  salida.textContent = texto;
});

// 7. Recorrer dos arrays paralelos con el MISMO índice
document.getElementById("btnParalelos").addEventListener("click", function () {
  let texto = "";
  for (let i = 0; i < nombres.length; i++) {
    texto += `Posición ${i}: ${nombres[i]} tiene un ${notas[i]}\n`;
  }
  salida.textContent = texto;
});
