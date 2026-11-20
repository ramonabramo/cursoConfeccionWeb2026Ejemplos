/* =========================================================
   TEORÍA · Acceder al último elemento de un array
   ---------------------------------------------------------
   - El último elemento está en la posición length - 1
   - array.at(-1) devuelve también el último (forma moderna)
   - Si el array está vacío, ambos devuelven undefined:
     ¡hay que comprobar length antes de usarlo!
   ========================================================= */

const temperaturas = [18, 22, 19];

const estado = document.getElementById("estado");
const inputTemp = document.getElementById("temperatura");
const salida = document.getElementById("salida");

estado.textContent = `[${temperaturas.join(", ")}]  ·  length = ${temperaturas.length}`;

// Añadir
document.getElementById("btnAnadir").addEventListener("click", function () {
  temperaturas.push(Number(inputTemp.value));
  estado.textContent = `[${temperaturas.join(", ")}]  ·  length = ${temperaturas.length}`;
  salida.textContent = `push(${inputTemp.value}) → el nuevo valor queda el ÚLTIMO.`;
});

// Vaciar (sirve para ver el caso del array vacío)
document.getElementById("btnVaciar").addEventListener("click", function () {
  temperaturas.length = 0;
  estado.textContent = `[${temperaturas.join(", ")}]  ·  length = ${temperaturas.length}`;
  salida.textContent = "temperaturas.length = 0;  → array vacío. Pide ahora el último.";
});

// Último: dos formas equivalentes
document.getElementById("btnUltimo").addEventListener("click", function () {
  const posicion = temperaturas.length - 1;

  let texto =
    `temperaturas.length - 1          → ${posicion}\n` +
    `temperaturas[length - 1]         → ${temperaturas[posicion]}\n` +
    `temperaturas.at(-1)              → ${temperaturas.at(-1)}\n\n`;

  // Comprobación antes de usar el valor
  if (temperaturas.length === 0) {
    texto += "El array está vacío: no hay último. Por eso SIEMPRE\ncomprobamos length === 0 antes de mostrar nada.";
  } else {
    texto += `Última temperatura: ${temperaturas.at(-1)} °C`;
  }

  salida.textContent = texto;
});

// Penúltimo
document.getElementById("btnPenultimo").addEventListener("click", function () {
  salida.textContent =
    `temperaturas[length - 2] → ${temperaturas[temperaturas.length - 2]}\n` +
    `temperaturas.at(-2)      → ${temperaturas.at(-2)}`;
});

// Último de un array de objetos: obtenemos el objeto entero
document.getElementById("btnObjetos").addEventListener("click", function () {
  const lecturas = [
    { ciudad: "Santander", grados: 17 },
    { ciudad: "Sevilla", grados: 31 },
    { ciudad: "Burgos", grados: 12 },
  ];

  const ultima = lecturas[lecturas.length - 1];

  salida.textContent =
    `const ultima = lecturas[lecturas.length - 1];\n\n` +
    `ultima.ciudad → "${ultima.ciudad}"\n` +
    `ultima.grados → ${ultima.grados}\n\n` +
    `Con objetos, el último trae TODOS sus datos juntos.`;
});
