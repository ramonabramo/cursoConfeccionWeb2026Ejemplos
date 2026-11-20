/* =========================================================
   TEORÍA · splice
   ---------------------------------------------------------
   - array.splice(posición, cuántos) QUITA elementos del array
     original y devuelve un array con los que ha quitado
   - array.splice(posición, 0, nuevo) INSERTA sin quitar nada
   - Los elementos de detrás se desplazan: ¡cambian sus índices!
   ========================================================= */

let letras = ["A", "B", "C", "D", "E"];

const estado = document.getElementById("estado");
const salida = document.getElementById("salida");

estado.textContent = `[${letras.join(", ")}]  ·  length = ${letras.length}`;

// 1. Quitar
document.getElementById("btnQuitar").addEventListener("click", function () {
  const posicion = Number(document.getElementById("posicion").value);
  const cuantos = Number(document.getElementById("cuantos").value);
  const antes = letras.join(", ");

  const quitados = letras.splice(posicion, cuantos);

  estado.textContent = `[${letras.join(", ")}]  ·  length = ${letras.length}`;
  salida.textContent =
    `Antes:   [${antes}]\n` +
    `letras.splice(${posicion}, ${cuantos})\n` +
    `Después: [${letras.join(", ")}]\n\n` +
    `splice devolvió los quitados: [${quitados.join(", ")}]\n\n` +
    `Fíjate: los que estaban detrás se han movido hacia delante.`;
});

// 2. Insertar sin quitar
document.getElementById("btnInsertar").addEventListener("click", function () {
  const posicion = Number(document.getElementById("posicion").value);
  letras.splice(posicion, 0, "X");
  estado.textContent = `[${letras.join(", ")}]  ·  length = ${letras.length}`;
  salida.textContent = `letras.splice(${posicion}, 0, "X")  → inserta "X" en la posición ${posicion}.`;
});

document.getElementById("btnReiniciar").addEventListener("click", function () {
  letras = ["A", "B", "C", "D", "E"];
  estado.textContent = `[${letras.join(", ")}]  ·  length = ${letras.length}`;
  salida.textContent = "Array reiniciado.";
});

// 3. Arrays paralelos: hay que borrar en los dos
document.getElementById("btnMal").addEventListener("click", function () {
  const nombres = ["Ana", "Luis", "Eva"];
  const notas = [7, 4.5, 9];

  nombres.splice(1, 1); // solo en uno...

  let texto = "nombres.splice(1, 1);   // y se nos olvida notas\n\n";
  for (let i = 0; i < nombres.length; i++) {
    texto += `${nombres[i]} → ${notas[i]}\n`;
  }
  texto += "\n¡Eva tiene ahora la nota de Luis! Datos desemparejados.";
  salida.textContent = texto;
});

document.getElementById("btnBien").addEventListener("click", function () {
  const nombres = ["Ana", "Luis", "Eva"];
  const notas = [7, 4.5, 9];

  nombres.splice(1, 1);
  notas.splice(1, 1);

  let texto = "nombres.splice(1, 1);\nnotas.splice(1, 1);\n\n";
  for (let i = 0; i < nombres.length; i++) {
    texto += `${nombres[i]} → ${notas[i]}\n`;
  }
  texto += "\nCorrecto. Con un array de objetos bastaría un solo splice.";
  salida.textContent = texto;
});
